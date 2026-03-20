-- Abayas site schema:
-- - products: public-facing abaya products
-- - product_images: gallery images (stored in Supabase Storage)
-- - product_variants: pricing variants (size/length/material/etc.)
-- - product_inquiries: "Request a quote" submissions
-- - profiles: role-based access control for the admin tools

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Profiles (admin role management)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'viewer' check (role in ('viewer', 'admin')),
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

-- Products (public catalog + SEO fields)
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'Everyday',
  description text not null default '',
  material text,
  tags text[] not null default '{}',
  is_published boolean not null default false,

  seo_title text,
  seo_description text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
before update on public.products
for each row
execute function public.set_updated_at();

-- Gallery images reference Supabase Storage objects
create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products (id) on delete cascade,
  storage_path text not null,
  sort_order int not null default 0,
  alt_text text,
  created_at timestamptz not null default now(),

  unique (product_id, storage_path)
);

-- Pricing variants (size/length/material/etc.)
create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products (id) on delete cascade,
  label text not null,
  options jsonb not null default '{}'::jsonb,
  price numeric(12,2) not null,
  currency text not null default 'USD',
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);

-- Public quote/inquiry submissions
create table if not exists public.product_inquiries (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products (id) on delete set null,
  variant_id uuid references public.product_variants (id) on delete set null,

  name text not null,
  email text not null,
  whatsapp text,
  country text,
  message text not null,

  created_at timestamptz not null default now()
);

-- Storage bucket for admin uploads
insert into storage.buckets (id, name, public)
values ('abaya-images', 'abaya-images', true)
on conflict (id) do nothing;

-- -------------------------
-- RLS: profiles
-- -------------------------
alter table public.profiles enable row level security;

-- User can read their own profile
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (id = auth.uid());

-- User can create their own profile (viewer only)
drop policy if exists "profiles_insert_own_viewer" on public.profiles;
create policy "profiles_insert_own_viewer"
on public.profiles
for insert
to authenticated
with check (id = auth.uid() and role = 'viewer');

-- Admin can manage profiles
drop policy if exists "profiles_admin_all" on public.profiles;
create policy "profiles_admin_all"
on public.profiles
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- -------------------------
-- RLS: products
-- -------------------------
alter table public.products enable row level security;

-- Public can read published products
drop policy if exists "products_select_published" on public.products;
create policy "products_select_published"
on public.products
for select
to public
using (is_published = true);

-- Admin can create/update/delete products
drop policy if exists "products_admin_write" on public.products;
create policy "products_admin_write"
on public.products
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- -------------------------
-- RLS: product_images
-- -------------------------
alter table public.product_images enable row level security;

-- Public can read images for published products
drop policy if exists "product_images_select_published_product" on public.product_images;
create policy "product_images_select_published_product"
on public.product_images
for select
to public
using (
  exists (
    select 1
    from public.products p
    where p.id = product_images.product_id
      and p.is_published = true
  )
);

-- Admin can upload/manage image metadata rows
drop policy if exists "product_images_admin_write" on public.product_images;
create policy "product_images_admin_write"
on public.product_images
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- -------------------------
-- RLS: product_variants
-- -------------------------
alter table public.product_variants enable row level security;

-- Public can read variant pricing for published products
drop policy if exists "product_variants_select_published_product" on public.product_variants;
create policy "product_variants_select_published_product"
on public.product_variants
for select
to public
using (
  exists (
    select 1
    from public.products p
    where p.id = product_variants.product_id
      and p.is_published = true
  )
);

-- Admin can write variants
drop policy if exists "product_variants_admin_write" on public.product_variants;
create policy "product_variants_admin_write"
on public.product_variants
for all
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- -------------------------
-- RLS: product_inquiries
-- -------------------------
alter table public.product_inquiries enable row level security;

-- Public can insert quote/inquiry submissions
drop policy if exists "inquiries_insert_public" on public.product_inquiries;
create policy "inquiries_insert_public"
on public.product_inquiries
for insert
to public
with check (true);

-- Admin can view inquiries
drop policy if exists "inquiries_admin_select" on public.product_inquiries;
create policy "inquiries_admin_select"
on public.product_inquiries
for select
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- Admin can delete inquiries (optional)
drop policy if exists "inquiries_admin_delete" on public.product_inquiries;
create policy "inquiries_admin_delete"
on public.product_inquiries
for delete
to authenticated
using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

-- -------------------------
-- Storage RLS policies
-- -------------------------
-- Note: Supabase uses storage.objects with RLS enabled.
-- Ensure RLS policies exist for your bucket.

drop policy if exists "abaya_images_select_public" on storage.objects;
create policy "abaya_images_select_public"
on storage.objects
for select
to public
using (bucket_id = 'abaya-images');

drop policy if exists "abaya_images_admin_insert" on storage.objects;
create policy "abaya_images_admin_insert"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'abaya-images'
  and storage.extension(name) in ('png', 'jpg', 'jpeg', 'webp')
  and exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "abaya_images_admin_update" on storage.objects;
create policy "abaya_images_admin_update"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'abaya-images'
  and exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
)
with check (
  bucket_id = 'abaya-images'
  and exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);

drop policy if exists "abaya_images_admin_delete" on storage.objects;
create policy "abaya_images_admin_delete"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'abaya-images'
  and exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  )
);


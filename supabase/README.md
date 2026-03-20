# Supabase Setup (Abayas Site)

## 1) Create a Supabase project
- Create a new Supabase project.
- Note your `Project URL` and `Anon key`.

## 2) Run the migration
The schema + RLS + Storage policies live in:
- `supabase/migrations/001_abayas_init.sql`

In Supabase Dashboard:
- Go to **SQL Editor**
- Paste and run the migration (or use Supabase migrations tooling if you prefer).

This migration also creates:
- Tables: `profiles`, `products`, `product_images`, `product_variants`, `product_inquiries`
- Storage bucket: `abaya-images` (public read)
- RLS policies (admin-only writes, public reads)

## 3) Create the first admin profile
To enable admin tools, you must create an admin profile row:
- Sign up a user account in Supabase Auth
- Create a row in `public.profiles` for that user with `role = 'admin'`

Example (in SQL Editor, replace `USER_UUID`):
```sql
insert into public.profiles (id, role)
values ('USER_UUID', 'admin');
```

## 4) Configure the app
Create `/Users/kamrankhan/web/.env.local` using `.env.example`.


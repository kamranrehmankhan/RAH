import Link from 'next/link'

import {createSupabaseServerClient} from '@/lib/supabase/server'
import {requireAdmin} from '@/lib/supabase/admin'
import LogoutButton from '@/components/admin/LogoutButton'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  await requireAdmin(locale)

  let products: Array<{id: string; title: string; slug: string}> = []
  try {
    const supabase = await createSupabaseServerClient()
    const {data} = await supabase
      .from('products')
      .select('id,title,slug')
      .order('created_at', {ascending: false})
      .limit(20)

    products = (data ?? []) as any
  } catch {
    // Supabase not configured yet (or tables not created). Keep dashboard readable.
    products = []
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="mt-1 text-pink-600 ">
            Upload pictures and set pricing for abayas.
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/${locale}/admin/products/new`}
          className="rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600   "
        >
          + New product
        </Link>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Recent products</h2>
        {products.length === 0 ? (
          <p className="mt-2 text-sm text-pink-600 ">
            No products yet. Create one to start uploading images and pricing
            variants.
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-200 ">
            {products.map((p) => (
              <li key={p.id} className="py-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="truncate font-medium">{p.title}</div>
                    <div className="truncate text-sm text-pink-600 ">
                      {p.slug}
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/admin/products/new?from=${encodeURIComponent(
                      p.id
                    )}`}
                    className="text-sm font-medium text-pink-900 underline underline-offset-4 hover:text-slate-700  "
                  >
                    Edit (coming soon)
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}


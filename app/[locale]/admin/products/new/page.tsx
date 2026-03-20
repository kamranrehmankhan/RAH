import ProductCreateForm from '@/components/admin/ProductCreateForm'
import {requireAdmin} from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

export default async function AdminNewProductPage({
  params
}: {
  params: {locale: string}
}) {
  const {locale} = params
  await requireAdmin(locale)

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Create abaya product</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Upload pictures, then set pricing variants (size/length/material).
      </p>

      <div className="mt-6">
        <ProductCreateForm locale={locale} />
      </div>
    </main>
  )
}


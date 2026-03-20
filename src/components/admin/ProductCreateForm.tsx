'use client'

import {useMemo, useState, useTransition} from 'react'
import {useRouter} from 'next/navigation'

import {createSupabaseBrowserClient} from '@/lib/supabase/browser'

type VariantInput = {
  label: string
  price: string
  currency: string
}

function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function ProductCreateForm({locale}: {locale: string}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('Everyday')
  const [material, setMaterial] = useState('')
  const [description, setDescription] = useState('')

  const [files, setFiles] = useState<File[]>([])
  const [variants, setVariants] = useState<VariantInput[]>([
    {label: 'Standard', price: '99.00', currency: 'USD'}
  ])

  const [error, setError] = useState<string | null>(null)

  const storageBaseUrl = useMemo(() => {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!base) return null
    // https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/<path>
    return `${base}/storage/v1/object/public/abaya-images`
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!title.trim()) {
      setError('Title is required.')
      return
    }

    const finalSlug = slug.trim() || slugify(title)
    if (!finalSlug) {
      setError('Slug is invalid.')
      return
    }

    startTransition(async () => {
      try {
        const supabase = createSupabaseBrowserClient()

        // 1) Create product (draft by default)
        const {data: product, error: productError} = await supabase
          .from('products')
          .insert({
            title: title.trim(),
            slug: finalSlug,
            category,
            material: material.trim(),
            description: description.trim(),
            is_published: false
          })
          .select('id')
          .single()

        if (productError) throw productError
        if (!product?.id) throw new Error('Product insert failed.')

        // 2) Upload images + create product_images rows
        const uploadedPaths: string[] = []
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const ext = file.name.includes('.') ? file.name.split('.').pop() : ''
          const safeExt = ext ? `.${ext}` : ''
          const storagePath = `${product.id}/${crypto.randomUUID()}${safeExt}`

          const {error: uploadError} = await supabase.storage
            .from('abaya-images')
            .upload(storagePath, file, {
              contentType: file.type || undefined,
              upsert: false
            })

          if (uploadError) throw uploadError
          uploadedPaths.push(storagePath)

          const {error: imageRowError} = await supabase
            .from('product_images')
            .insert({
              product_id: product.id,
              storage_path: storagePath,
              sort_order: i
            })

          if (imageRowError) throw imageRowError
        }

        // 3) Insert pricing variants
        const parsedVariants = variants
          .filter((v) => v.label.trim() && v.price.trim())
          .map((v) => ({
            label: v.label.trim(),
            price: Number(v.price),
            currency: v.currency || 'USD',
            options: {} as Record<string, unknown>,
            is_default: variants[0]?.label === v.label
          }))

        if (parsedVariants.length === 0) {
          throw new Error('Add at least one pricing variant.')
        }

        const {error: variantError} = await supabase
          .from('product_variants')
          .insert(
            parsedVariants.map((v) => ({
              product_id: product.id,
              label: v.label,
              price: v.price,
              currency: v.currency,
              options: v.options,
              is_default: v.is_default
            }))
          )

        if (variantError) throw variantError

        router.replace(`/${locale}/admin/dashboard`)
      } catch (err: any) {
        setError(err?.message ?? 'Failed to create product.')
      }
    })
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {error ? (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200">
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Title
          </span>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={title}
            onChange={(e) => {
              const next = e.target.value
              setTitle(next)
              setSlug((prev) => (prev ? prev : slugify(next)))
            }}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Slug (SEO URL)
          </span>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Category
          </span>
          <select
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Everyday</option>
            <option>Eid</option>
            <option>Wedding</option>
            <option>Ramadan</option>
            <option>Custom</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Material
          </span>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="e.g., Chiffon, Linen, Crepe"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-slate-600 dark:text-slate-300">
          Description
        </span>
        <textarea
          className="mt-1 min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a SEO-friendly description (fabric, fit, occasions, care)."
        />
      </label>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="font-semibold">Pictures (upload)</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Upload multiple images. They’ll appear in the gallery for this product.
        </p>

        <input
          className="mt-4 block w-full text-sm"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
        />

        {files.length > 0 ? (
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-200">
            {files.map((f) => (
              <li key={f.name}>
                {f.name}
                {storageBaseUrl ? '' : ''}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold">Pricing variants</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Add variant prices (size/length/material). Public pages will
              show the selected option price.
            </p>
          </div>
          <button
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            type="button"
            onClick={() =>
              setVariants((prev) => [
                ...prev,
                {label: '', price: '', currency: 'USD'}
              ])
            }
          >
            + Add variant
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {variants.map((v, idx) => (
            <div
              key={idx}
              className="grid gap-3 rounded-md border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-4"
            >
              <label className="md:col-span-2 block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Label (e.g., “Standard / Black”)
                </span>
                <input
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  value={v.label}
                  onChange={(e) => {
                    const next = e.target.value
                    setVariants((prev) =>
                      prev.map((x, i) => (i === idx ? {...x, label: next} : x))
                    )
                  }}
                  placeholder="Standard"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Price
                </span>
                <input
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  value={v.price}
                  inputMode="decimal"
                  onChange={(e) => {
                    const next = e.target.value
                    setVariants((prev) =>
                      prev.map((x, i) =>
                        i === idx ? {...x, price: next.replace(/[^\d.]/g, '')} : x
                      )
                    )
                  }}
                  placeholder="99.00"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Currency
                </span>
                <select
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  value={v.currency}
                  onChange={(e) => {
                    const next = e.target.value
                    setVariants((prev) =>
                      prev.map((x, i) => (i === idx ? {...x, currency: next} : x))
                    )
                  }}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="AED">AED</option>
                  <option value="SAR">SAR</option>
                </select>
              </label>

              <div className="flex items-end md:col-span-1">
                <button
                  type="button"
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                  disabled={variants.length <= 1}
                  onClick={() =>
                    setVariants((prev) => prev.filter((_, i) => i !== idx))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 disabled:opacity-60 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
        disabled={isPending}
        type="submit"
      >
        {isPending ? 'Creating…' : 'Create product'}
      </button>
    </form>
  )
}


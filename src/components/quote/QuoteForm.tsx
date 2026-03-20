'use client'

import {useState, useTransition} from 'react'
import {createSupabaseBrowserClient} from '@/lib/supabase/browser'

export default function QuoteForm({
  productId,
  variantId
}: {
  productId?: string
  variantId?: string
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    startTransition(async () => {
      try {
        const supabase = createSupabaseBrowserClient()
        const {error: insertError} = await supabase
          .from('product_inquiries')
          .insert({
            product_id: productId ?? null,
            variant_id: variantId ?? null,
            name: name.trim(),
            email: email.trim(),
            whatsapp: whatsapp.trim() || null,
            country: country.trim() || null,
            message: message.trim()
          })

        if (insertError) throw insertError
        setSuccess(true)
      } catch (err: any) {
        setError(err?.message ?? 'Failed to send request.')
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {success ? (
        <p className="rounded-md border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-200">
          Thanks! Your request has been sent. We’ll reply soon.
        </p>
      ) : null}

      {error ? (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200">
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Email
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            WhatsApp (optional)
          </span>
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+1 555 123 4567"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Country (for shipping)
          </span>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g., UAE, UK, US"
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-slate-600 dark:text-slate-300">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
          placeholder="Tell us the variant/size you want, preferred color, and any special requests."
        />
      </label>

      <button
        className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 disabled:opacity-60 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
        type="submit"
        disabled={isPending}
      >
        {isPending ? 'Sending…' : 'Send request'}
      </button>
    </form>
  )
}


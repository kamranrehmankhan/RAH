'use client'

import {useState, useTransition} from 'react'
import {useRouter} from 'next/navigation'
import {useTranslations} from 'next-intl'

import {createSupabaseBrowserClient} from '@/lib/supabase/browser'

export default async function AdminLoginPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const t = useTranslations()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    startTransition(async () => {
      try {
        const supabase = createSupabaseBrowserClient()
        const {error: signInError} = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (signInError) throw signInError

        router.replace(`/${locale}/admin/dashboard`)
      } catch (err: any) {
        setError(err?.message ?? 'Sign in failed')
      }
    })
  }

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-semibold">{t('admin.loginTitle')}</h1>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-sm text-pink-600 ">
            {t('admin.email')}
          </span>
          <input
            className="mt-1 w-full rounded-md border border-pink-200 bg-pink-50 px-3 py-2 text-pink-900 outline-none focus:border-slate-400   "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-pink-600 ">
            {t('admin.password')}
          </span>
          <input
            className="mt-1 w-full rounded-md border border-pink-200 bg-pink-50 px-3 py-2 text-pink-900 outline-none focus:border-slate-400   "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            required
          />
        </label>

        {error ? (
          <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700   ">
            {error}
          </p>
        ) : null}

        <button
          className="w-full rounded-md bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-600 disabled:opacity-60   "
          disabled={isPending}
          type="submit"
        >
          {t('admin.signIn')}
        </button>
      </form>
    </main>
  )
}


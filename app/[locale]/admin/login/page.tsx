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
          <span className="text-sm text-slate-600 dark:text-slate-300">
            {t('admin.email')}
          </span>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-600 dark:text-slate-300">
            {t('admin.password')}
          </span>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            required
          />
        </label>

        {error ? (
          <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200">
            {error}
          </p>
        ) : null}

        <button
          className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 disabled:opacity-60 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          disabled={isPending}
          type="submit"
        >
          {t('admin.signIn')}
        </button>
      </form>
    </main>
  )
}


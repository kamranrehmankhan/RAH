'use client'

import {useRouter} from 'next/navigation'
import {useState} from 'react'

import {createSupabaseBrowserClient} from '@/lib/supabase/browser'

export default function LogoutButton() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onLogout() {
    setIsLoading(true)
    try {
      const supabase = createSupabaseBrowserClient()
      await supabase.auth.signOut()
    } finally {
      // Keep redirect simple; locale is derived from current path in most cases.
      router.refresh()
      setIsLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={isLoading}
      className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-800 dark:text-slate-50 dark:hover:bg-slate-900"
    >
      {isLoading ? 'Signing out…' : 'Sign out'}
    </button>
  )
}


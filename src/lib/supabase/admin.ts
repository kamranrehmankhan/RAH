import {redirect} from 'next/navigation'
import {createSupabaseServerClient} from './server'

export async function requireAdmin(locale: string) {
  let supabase
  try {
    supabase = await createSupabaseServerClient()
  } catch {
    redirect(`/${locale}/admin/login`)
  }

  const {data: authData, error: authError} = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect(`/${locale}/admin/login`)
  }

  const user = authData.user

  const {data: profile} = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (!profile || profile.role !== 'admin') {
    redirect(`/${locale}/admin/login`)
  }

  return user
}


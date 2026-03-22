import {redirect} from 'next/navigation'

export default async function ArchiveAliasPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  redirect(`/${locale}/orders`)
}

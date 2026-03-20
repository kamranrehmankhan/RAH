import Link from 'next/link'

export default function SiteFooter({locale}: {locale: string}) {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold">Abayas</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Worldwide shipping, quality fabrics, and trusted service.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Shop</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/collections`}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Support</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/shipping-returns`}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Abayas. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


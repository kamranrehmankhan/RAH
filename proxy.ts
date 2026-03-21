import createMiddleware from 'next-intl/middleware'

import {routing} from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Apply middleware to all routes except API routes, Next.js internals, and static files.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}


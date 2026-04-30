import { NextRequest, NextResponse } from 'next/server'

/**
 * 301 redirects for renamed pages.
 * Preserves SEO equity and prevents broken links.
 */
const REDIRECTS: Record<string, string> = {
  '/tools/withholding-calculator': '/tools/401k-withholding-calculator',
  '/tools/equity-compensation': '/tools/rsu-equity-compensation-calculator',
  '/tools/retirement-readiness': '/tools/retirement-savings-calculator',
  '/tools/roth-conversion': '/tools/roth-conversion-calculator',
  '/tools/business-exit-scorecard': '/tools/business-exit-planning-calculator',
  '/insights/how-to-choose-cfp-las-vegas': '/insights/how-to-choose-cfp-scottsdale',
}

// Paths that stay reachable even when MAINTENANCE_MODE is on
// (the maintenance page itself, plus anything compliance/legal needs to keep accessible)
const MAINTENANCE_ALLOWLIST = new Set<string>([
  '/maintenance',
  '/robots.txt',
  '/sitemap.xml',
  '/llms.txt',
])

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Maintenance mode: when MAINTENANCE_MODE=true env var is set,
  //    rewrite all non-allowlisted requests to /maintenance with a 503.
  if (process.env.MAINTENANCE_MODE === 'true' && !MAINTENANCE_ALLOWLIST.has(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.rewrite(url, { status: 503 })
  }

  // 2. Legacy URL 301 redirects.
  const destination = REDIRECTS[pathname]
  if (destination) {
    const url = request.nextUrl.clone()
    url.pathname = destination
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  // Run on every request EXCEPT Next.js internals, static assets, and API routes.
  // Required so MAINTENANCE_MODE can intercept all visitor traffic.
  matcher: [
    '/((?!_next/|api/|favicon\\.ico|Photos/|fonts/|documents/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|woff|woff2|ttf|pdf)$).*)',
  ],
}

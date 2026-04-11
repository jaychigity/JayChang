import { NextRequest, NextResponse } from 'next/server'

/**
 * 301 redirects for renamed tool pages.
 * Preserves SEO equity and prevents broken links.
 */
const REDIRECTS: Record<string, string> = {
  '/tools/withholding-calculator': '/tools/401k-withholding-calculator',
  '/tools/equity-compensation': '/tools/rsu-equity-compensation-calculator',
  '/tools/retirement-readiness': '/tools/retirement-savings-calculator',
  '/tools/roth-conversion': '/tools/roth-conversion-calculator',
  '/tools/business-exit-scorecard': '/tools/business-exit-planning-calculator',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const destination = REDIRECTS[pathname]
  if (destination) {
    const url = request.nextUrl.clone()
    url.pathname = destination
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/tools/withholding-calculator',
    '/tools/equity-compensation',
    '/tools/retirement-readiness',
    '/tools/roth-conversion',
    '/tools/business-exit-scorecard',
  ],
}

import type { Metadata } from 'next'

const BASE_URL = 'https://www.advisorjay.com'

/**
 * Page-specific OpenGraph image mapping.
 * Falls back to the default Jay Chang headshot.
 */
const OG_IMAGES: Record<string, string> = {
  '/': '/Photos/Jay-Banner.png',
  '/about': '/Photos/Color-Jay-Headshot.png',
  '/contact': '/Photos/Color-Jay-Headshot.png',
  '/scottsdale': '/Photos/scottsdale-professional.png',
  '/california': '/Photos/california-professional.png',
  '/las-vegas': '/Photos/las-vegas-couple-sunset.avif',
  '/semiconductor-wealth-management': '/Photos/Semiconductor.png',
  '/aerospace-defense-wealth-management': '/Photos/Aerospace.png',
  '/physician-wealth-management-phoenix-scottsdale': '/Photos/Medical-1.png',
  '/services': '/Photos/Jay-Planning-Couple.png',
  '/tools': '/Photos/Color-Jay-Headshot.png',
  '/insights': '/Photos/Jay-Intel.png',
  '/investment-philosophy': '/Photos/Investment Philosophy.png',
  '/process': '/Photos/Jay-B&W-Team.png',
}

const DEFAULT_OG_IMAGE = '/Photos/Color-Jay-Headshot.png'

/**
 * Build page-specific OpenGraph metadata.
 * Supply a pathname (e.g. '/about') and an optional custom image path.
 */
export function buildOpenGraph(
  pathname: string,
  overrides?: { title?: string; description?: string; image?: string }
): Metadata['openGraph'] {
  const image = overrides?.image || OG_IMAGES[pathname] || DEFAULT_OG_IMAGE
  return {
    type: 'website',
    siteName: 'Advisor Jay',
    locale: 'en_US',
    title: overrides?.title,
    description: overrides?.description,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: overrides?.title || 'Advisor Jay | Farther Wealth Management',
      },
    ],
  }
}

export { BASE_URL, DEFAULT_OG_IMAGE }

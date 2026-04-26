import { MetadataRoute } from 'next'

const SHARED_DISALLOW = ['/lp/', '/api/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'GPTBot', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'ClaudeBot', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'anthropic-ai', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'PerplexityBot', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'Google-Extended', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'CCBot', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: 'Bingbot', allow: '/', disallow: SHARED_DISALLOW },
      { userAgent: '*', allow: '/', disallow: SHARED_DISALLOW },
    ],
    sitemap: 'https://www.advisorjay.com/sitemap.xml',
  }
}

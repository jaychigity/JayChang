import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RegulatoryFooter from '@/components/RegulatoryFooter'
import { GoogleAnalytics, GoogleTagManager } from '@/components/GoogleAnalytics'
import UTMCapture from '@/components/UTMCapture'
import CookieConsent from '@/components/CookieConsent'

const arizonaText = localFont({
 src: [
 {
 path: '../../public/fonts/ABCArizonaText-Light.woff2',
 weight: '300',
 style: 'normal',
 },
 {
 path: '../../public/fonts/ABCArizonaText-LightItalic.woff2',
 weight: '300',
 style: 'italic',
 },
 ],
 variable: '--font-serif',
 display: 'swap',
})

const fakt = localFont({
 src: [
 {
 path: '../../public/fonts/Fakt-Light.ttf',
 weight: '300',
 style: 'normal',
 },
 {
 path: '../../public/fonts/Fakt-LightItalic.ttf',
 weight: '300',
 style: 'italic',
 },
 {
 path: '../../public/fonts/Fakt-Blond.ttf',
 weight: '400',
 style: 'normal',
 },
 {
 path: '../../public/fonts/Fakt-BlondItalic.ttf',
 weight: '400',
 style: 'italic',
 },
 {
 path: '../../public/fonts/Fakt-Medium.ttf',
 weight: '500',
 style: 'normal',
 },
 {
 path: '../../public/fonts/Fakt-MediumItalic.ttf',
 weight: '500',
 style: 'italic',
 },
 {
 path: '../../public/fonts/Fakt-SemiBold.ttf',
 weight: '600',
 style: 'normal',
 },
 {
 path: '../../public/fonts/Fakt-SemiBoldItalic.ttf',
 weight: '600',
 style: 'italic',
 },
 ],
 variable: '--font-sans',
 display: 'swap',
})

export const metadata: Metadata = {
 metadataBase: new URL('https://www.PWM-Farther.com'),
 title: {
 default: 'Advisor Jay | Farther | Scottsdale, Arizona Financial Advisor',
 template: '%s | Advisor Jay',
 },
 description:
 'Personalized wealth management for families and business owners with $2M-$20M in investable assets. Serving Scottsdale, AZ and clients across Arizona, California, and Nevada. Powered by Farther&apos;s Intelligent Wealth Platform.',
 openGraph: {
 type: 'website',
 siteName: 'Advisor Jay',
 locale: 'en_US',
 images: [
 {
  url: '/Photos/Color-Jay-Headshot.png',
  width: 1200,
  height: 630,
  alt: 'Advisor Jay - Farther Wealth Management',
 },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 },
 robots: {
 index: true,
 follow: true,
 },
}

const organizationJsonLd = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Farther Finance Advisors LLC',
 alternateName: 'Advisor Jay',
 url: 'https://www.PWM-Farther.com',
 logo: 'https://www.PWM-Farther.com/farther-logo.png',
 description:
 'SEC-registered investment adviser providing fiduciary wealth management for families and business owners with $2M-$20M in investable assets. Serving Scottsdale, AZ and clients across Arizona, California, and Nevada.',
 contactPoint: [
 {
 '@type': 'ContactPoint',
 telephone: '+1-480-944-0880',
 contactType: 'customer service',
 email: 'jay.chang@farther.com',
 areaServed: ['US'],
 availableLanguage: ['English'],
 },
 ],
 address: [
 {
 '@type': 'PostalAddress',
 addressLocality: 'Scottsdale',
 addressRegion: 'AZ',
 addressCountry: 'US',
 },
 ],
 sameAs: [
 'https://www.linkedin.com/in/jaychang',
 'https://adviserinfo.sec.gov/firm/summary/302050',
 ],
 foundingDate: '2021',
 numberOfEmployees: {
 '@type': 'QuantitativeValue',
 value: 200,
 unitText: 'platform-wide',
 },
 knowsAbout: [
 'Wealth Management',
 'Financial Planning',
 'Tax Optimization',
 'Estate Planning',
 'Retirement Planning',
 'Investment Management',
 'Alternative Investments',
 'Business Succession Planning',
 ],
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
 <html
 lang="en"
 className={`${arizonaText.variable} ${fakt.variable}`}
 >
 <head>
  <Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
  />
 </head>
 <body className="font-sans bg-ivory text-slate-text">
  <GoogleTagManager />
  <GoogleAnalytics />
  <UTMCapture />
  <a href="#main-content" className="skip-to-content">
  Skip to main content
  </a>
  <Navigation />
  <main id="main-content">{children}</main>
  <Footer />
  <RegulatoryFooter />
  <CookieConsent />
 </body>
 </html>
 )
}

import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
 return (
 <section className="bg-[#F7F4EE] min-h-[60vh] flex items-center justify-center px-[20px]">
 <div className="max-w-[600px] mx-auto text-center">
  <p className="font-sans text-[64px] text-[#1d7682] mb-4">404</p>
  <h1 className="font-serif text-[36px] max-md:text-[28px] font-semibold text-[#333333] leading-tight">
  We couldn&apos;t find that page.
  </h1>
  <p className="font-sans text-body text-[#5b6a71] mt-4 leading-relaxed">
  The page you&apos;re looking for may have been moved or no longer exists.
  Here are some helpful links:
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
  <Link
  href="/"
  className="font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] transition-colors"
  >
  → Homepage
  </Link>
  <Link
  href="/services"
  className="font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] transition-colors"
  >
  → Our Services
  </Link>
  <Link
  href="/insights"
  className="font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] transition-colors"
  >
  → Insights
  </Link>
  <Link
  href="/contact"
  className="font-sans text-[15px] font-semibold text-[#333333] hover:text-[#1d7682] transition-colors"
  >
  → Contact Us
  </Link>
  </div>
  <div className="mt-10">
  <Button href="/schedule-consultation" variant="primary">
  Start a Conversation
  </Button>
  </div>
 </div>
 </section>
 )
}

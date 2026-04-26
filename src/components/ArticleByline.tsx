import Image from 'next/image'
import Link from 'next/link'

interface ArticleBylineProps {
  updatedDate: string
  publishedDate?: string
  variant?: 'light' | 'dark'
  className?: string
}

function formatDate(isoDate: string): string {
  return new Date(isoDate + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleByline({
  updatedDate,
  publishedDate,
  variant = 'light',
  className = '',
}: ArticleBylineProps) {
  const isDark = variant === 'dark'
  const showPublishedSeparately =
    publishedDate && publishedDate !== updatedDate
  const linkClass = isDark
    ? 'text-[#1d7682] hover:text-[#D4B65A] transition-colors'
    : 'text-[#1d7682] hover:underline'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link
        href="/jay-chang"
        className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 block"
        aria-label="About Jay Chang"
      >
        <Image
          src="/Photos/Jay-Office.png"
          alt="Jay Chang, VP, Wealth Advisor at Farther"
          fill
          className="object-cover object-top scale-125"
          sizes="48px"
        />
      </Link>
      <div className="flex flex-col leading-tight">
        <p
          className={`font-sans text-sm font-medium ${
            isDark ? 'text-[#F7F4EE]' : 'text-[#333333]'
          }`}
        >
          By{' '}
          <Link href="/jay-chang" className={linkClass}>
            Jay Chang
          </Link>
          , VP, Wealth Advisor at Farther
        </p>
        <p
          className={`font-sans text-xs mt-1 ${
            isDark ? 'text-[#b6d0ed]' : 'text-[#5b6a71]'
          }`}
        >
          Last updated {formatDate(updatedDate)}
          {showPublishedSeparately
            ? ` · Originally published ${formatDate(publishedDate)}`
            : ''}
        </p>
      </div>
    </div>
  )
}

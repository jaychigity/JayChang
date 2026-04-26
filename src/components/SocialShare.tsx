'use client'

import { Linkedin, Twitter, Mail, Link2 } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = `https://www.advisorjay.com${url}`
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDesc = encodeURIComponent(description || '')

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[#5b6a71]">
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#5b6a71] hover:text-[#1d7682] hover:border-[#1d7682] transition-colors"
      >
        <Linkedin size={16} strokeWidth={1.5} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="w-9 h-9 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#5b6a71] hover:text-[#1d7682] hover:border-[#1d7682] transition-colors"
      >
        <Twitter size={16} strokeWidth={1.5} />
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`}
        aria-label="Share via email"
        className="w-9 h-9 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#5b6a71] hover:text-[#1d7682] hover:border-[#1d7682] transition-colors"
      >
        <Mail size={16} strokeWidth={1.5} />
      </a>
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#5b6a71] hover:text-[#1d7682] hover:border-[#1d7682] transition-colors relative"
      >
        <Link2 size={16} strokeWidth={1.5} />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#333333] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CalculatorPreviewCardProps {
  /**
   * URL slug for the calculator, e.g. "roth-conversion-calculator".
   * Linked as /tools/{slug}.
   */
  slug: string
  /**
   * Eyebrow label above the title, uppercased and tracked.
   * E.g. "CALCULATOR · ROTH STRATEGY".
   */
  eyebrow: string
  /**
   * Title of the calculator. Rendered in serif.
   */
  title: string
  /**
   * One- or two-sentence value prop. What the calculator computes
   * and why it matters at this point in the article.
   */
  description: string
  /**
   * Sample result preview. Shows a realistic output value next to
   * the description so the card reads as a working tool, not a CTA banner.
   * The value is a string so callers can pre-format ($, commas, etc.).
   */
  preview: {
    value: string
    label: string
  }
  /**
   * CTA button label. Falls back to "Open the calculator →".
   */
  ctaLabel?: string
}

/**
 * Inline calculator preview card for use inside articles.
 *
 * Use this where a full inline embed of the calculator would be
 * heavy (bundle weight, layout fit, mobile UX). The card surfaces
 * the value of the calculator at peak topical intent and routes
 * the reader to the full tool with a single click.
 *
 * Place it directly after the article passage where the calculator
 * is most relevant. Example:
 *
 *   <CalculatorPreviewCard
 *     slug="roth-conversion-calculator"
 *     eyebrow="CALCULATOR · ROTH STRATEGY"
 *     title="Roth Conversion Calculator"
 *     description="Run your conversion math: tax cost now, net benefit
 *       over your time horizon, and the break-even tax rate."
 *     preview={{ value: "$186,420", label: "net benefit at 15 years" }}
 *     ctaLabel="Plan your Roth strategy"
 *   />
 */
export default function CalculatorPreviewCard({
  slug,
  eyebrow,
  title,
  description,
  preview,
  ctaLabel = 'Open the calculator',
}: CalculatorPreviewCardProps) {
  return (
    <aside
      className="my-10 not-prose rounded-2xl border border-[#1d7682]/15 bg-[#F7F4EE] overflow-hidden"
      aria-label={`${title} preview`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left column: eyebrow, title, description, CTA */}
        <div className="flex-1 p-6 md:p-8">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#1d7682] mb-3">
            {eyebrow}
          </p>
          <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-[#333333] mb-3">
            {title}
          </h3>
          <div className="h-[2px] w-12 bg-[#1d7682] mb-4" />
          <p className="font-sans text-[15px] leading-relaxed text-[#5b6a71] mb-6 max-w-prose">
            {description}
          </p>
          <Link
            href={`/tools/${slug}`}
            className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-white bg-gradient-to-b from-[#2a9dab] to-[#1d7682] rounded-full px-5 py-3 hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Right column: result preview block */}
        <div className="md:w-[260px] md:flex-shrink-0 bg-white border-t md:border-t-0 md:border-l border-[#1d7682]/15 p-6 md:p-8 flex flex-col justify-center items-center text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6a71] mb-3">
            Sample result
          </p>
          <p className="font-serif text-[34px] md:text-[40px] leading-none text-[#1d7682] tabular-nums mb-2">
            {preview.value}
          </p>
          <p className="font-sans text-[12px] text-[#5b6a71] leading-snug">
            {preview.label}
          </p>
        </div>
      </div>
    </aside>
  )
}

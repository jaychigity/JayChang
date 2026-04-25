import Link from 'next/link'
import { Info } from 'lucide-react'

interface CalculatorDisclaimerProps {
  /**
   * Tool name for personalized CTA copy (e.g., "AT&T pension", "RSU plan")
   * Used in the CTA button: "Talk through your {toolName} numbers with Jay"
   */
  toolName?: string
  /**
   * Optional additional context-specific disclaimer text appended after the standard copy.
   * Use for plan-specific notes (e.g., IRS segment rate caveats, mortality table assumptions).
   */
  additionalContext?: string
  /**
   * Visual variant — "default" for light backgrounds, "dark" for dark sections.
   */
  variant?: 'default' | 'dark'
  /**
   * Override the default consultation link. Defaults to /schedule-consultation.
   */
  ctaHref?: string
}

/**
 * Standard disclaimer for every calculator, scorecard, and assessment tool on the site.
 *
 * Used to communicate that:
 *  1. Results are estimates, not guarantees
 *  2. The tool is educational, not financial advice
 *  3. Real outcomes depend on factors a calculator can't model
 *  4. The next step is a conversation with Jay, not a generic "financial professional"
 *
 * This is a compliance requirement — every interactive tool that produces numbers,
 * projections, or scores must include this component below the results.
 */
export default function CalculatorDisclaimer({
  toolName,
  additionalContext,
  variant = 'default',
  ctaHref = '/schedule-consultation',
}: CalculatorDisclaimerProps) {
  const isDark = variant === 'dark'

  const containerClasses = isDark
    ? 'bg-[#2a2a2a] border border-[#444] text-[#F7F4EE]'
    : 'bg-[#FAFAF8] border border-[#e0e0e0] text-[#5b6a71]'

  const headingClasses = isDark ? 'text-[#F7F4EE]' : 'text-[#333333]'

  const ctaText = toolName
    ? `Talk through your ${toolName} numbers with Jay →`
    : 'Talk through your numbers with Jay →'

  return (
    <div className={`mt-10 rounded-lg p-6 md:p-8 ${containerClasses}`}>
      <div className="flex items-start gap-3 mb-4">
        <Info className="w-5 h-5 mt-1 flex-shrink-0 text-[#1d7682]" aria-hidden="true" />
        <h3 className={`font-serif text-lg font-semibold ${headingClasses}`}>
          This is an estimate, not a number to plan around alone.
        </h3>
      </div>

      <div className="space-y-3 text-sm md:text-base leading-relaxed pl-8">
        <p>
          This calculator is an educational tool to help you think through scenarios.
          The results are illustrative estimates based on the inputs you provided and
          general assumptions. They are <strong>not financial advice</strong>, and the
          numbers shown should not be relied on as exact to your situation.
        </p>

        <p>
          Real outcomes depend on factors a calculator can&apos;t fully model: your
          complete tax picture, plan-specific rules, market performance, IRS rate
          changes, life events, and how all the pieces of your financial life
          interact. Past performance does not guarantee future results.
        </p>

        {additionalContext && (
          <p className="italic opacity-90">{additionalContext}</p>
        )}

        <p>
          Before making any decision based on these numbers, let&apos;s talk. I&apos;ll
          look at your full picture, pressure-test the assumptions, and help you
          understand what these numbers actually mean for you, at no cost.
        </p>
      </div>

      <div className="mt-6 pl-8">
        <Link
          href={ctaHref}
          className="inline-block text-center bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}

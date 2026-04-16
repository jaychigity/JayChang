'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

/**
 * AT&T Pension Plan Selector
 *
 * Helps users figure out which plan they're in before they start entering data.
 * Most AT&T employees don't know off the top of their head whether they're in
 * BCB1, BCB2, MCB, or the Management Cash Balance plan. This selector asks
 * 2 simple questions to recommend the right tab — and defaults to Cash Balance
 * (the most common, broadest applicability) if they pick "I don't know."
 *
 * Maps user selection → calculator tab ID:
 *  - cashBalance: BCB1, BCB2, Management Cash Balance, Don't Know (default)
 *  - pensionBand: Legacy union pension band
 *  - lumpVsAnnuity: Always available
 *  - earlyRetirement: Always available
 */

type EmployeeType = 'union' | 'management' | 'unsure'
type HireEra = 'pre-2002' | '2002-2013' | '2014-plus' | 'unsure'

interface PlanSelectorProps {
  onSelectTab: (tabId: string) => void
}

interface PlanRecommendation {
  planName: string
  tabId: string
  description: string
  confidence: 'high' | 'medium' | 'low'
}

function getRecommendation(employeeType: EmployeeType, hireEra: HireEra): PlanRecommendation {
  // Default fallback — Cash Balance is the most common modern AT&T plan
  const defaultRec: PlanRecommendation = {
    planName: 'Cash Balance (default)',
    tabId: 'cashBalance',
    description:
      "Cash Balance is the most common AT&T pension plan. We'll start here — it works as a reasonable estimate while you confirm your specific plan with NetBenefits.",
    confidence: 'low',
  }

  if (employeeType === 'unsure' || hireEra === 'unsure') {
    return defaultRec
  }

  // Union employees
  if (employeeType === 'union') {
    if (hireEra === 'pre-2002') {
      return {
        planName: 'Pension Band (legacy union)',
        tabId: 'pensionBand',
        description:
          'Long-tenured union employees are typically in a legacy Pension Band program. Verify your band number with your local steward or NetBenefits.',
        confidence: 'medium',
      }
    }
    if (hireEra === '2002-2013') {
      return {
        planName: 'Bargained Cash Balance #1 (BCB1)',
        tabId: 'cashBalance',
        description:
          "BCB1 uses pay credits + interest credits. We'll use the Cash Balance tab — your interest credit rate follows the 30-year Treasury floor.",
        confidence: 'high',
      }
    }
    return {
      planName: 'Bargained Cash Balance #2 (BCB2)',
      tabId: 'cashBalance',
      description:
        "BCB2 (post-2014 union hires) uses a fixed interest credit rate. We'll use the Cash Balance tab — make sure to check the BCB2 box on the form.",
      confidence: 'high',
    }
  }

  // Management employees
  if (hireEra === 'pre-2002') {
    return {
      planName: 'Modified Cash Balance (MCB) + Frozen Account',
      tabId: 'cashBalance',
      description:
        "Pre-2002 management has a frozen MCB account plus the post-2002 Cash Balance program. Check both — and look up your Modified Rule of 75 status in the Early Retirement tab.",
      confidence: 'high',
    }
  }

  return {
    planName: 'Management Cash Balance',
    tabId: 'cashBalance',
    description:
      "Post-2002 management employees use the Cash Balance program with age-graded pay credits. We'll use the Cash Balance tab.",
    confidence: 'high',
  }
}

export default function PlanSelector({ onSelectTab }: PlanSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [employeeType, setEmployeeType] = useState<EmployeeType | null>(null)
  const [hireEra, setHireEra] = useState<HireEra | null>(null)

  const recommendation =
    employeeType && hireEra ? getRecommendation(employeeType, hireEra) : null

  const handleUseDefault = () => {
    setEmployeeType('unsure')
    setHireEra('unsure')
  }

  const handleStart = (tabId: string) => {
    onSelectTab(tabId)
    setIsOpen(false)
  }

  return (
    <div className="mb-[24px] bg-[#F0F7F8] border border-[#1d7682]/30 rounded-[12px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 px-[20px] py-[16px] text-left hover:bg-[#E5F0F2] transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-[#1d7682] flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="font-sans text-[14px] md:text-[15px] font-semibold text-[#333333]">
              Not sure which AT&amp;T pension plan you&apos;re in?
            </p>
            <p className="font-sans text-[12px] md:text-[13px] text-[#5b6a71] mt-[2px]">
              {isOpen ? 'Tap to close' : "Answer 2 quick questions and I'll point you to the right calculator."}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#5b6a71] flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="px-[20px] py-[20px] border-t border-[#1d7682]/20 bg-white">
          {/* Question 1 */}
          <div className="mb-[20px]">
            <p className="font-sans text-[13px] font-medium text-[#333333] mb-[10px]">
              1. Are you a union or management employee?
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {[
                { value: 'union' as const, label: 'Union (CWA / IBEW)' },
                { value: 'management' as const, label: 'Management' },
                { value: 'unsure' as const, label: 'Not sure' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setEmployeeType(opt.value)}
                  className={`px-[14px] py-[8px] rounded-full text-[13px] font-medium transition-all ${
                    employeeType === opt.value
                      ? 'bg-[#1d7682] text-white'
                      : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          {employeeType && employeeType !== 'unsure' && (
            <div className="mb-[20px]">
              <p className="font-sans text-[13px] font-medium text-[#333333] mb-[10px]">
                2. When were you hired by AT&amp;T (or a legacy company that became AT&amp;T)?
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {[
                  { value: 'pre-2002' as const, label: 'Before 2002' },
                  { value: '2002-2013' as const, label: '2002 – 2013' },
                  { value: '2014-plus' as const, label: '2014 or later' },
                  { value: 'unsure' as const, label: 'Not sure' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setHireEra(opt.value)}
                    className={`px-[14px] py-[8px] rounded-full text-[13px] font-medium transition-all ${
                      hireEra === opt.value
                        ? 'bg-[#1d7682] text-white'
                        : 'bg-white text-[#5b6a71] border border-[#E2E8F0] hover:border-[#1d7682]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation or default fallback */}
          {recommendation && (
            <div className="bg-[#FAFAF8] border border-[#E2E8F0] rounded-[8px] p-[16px] mt-[16px]">
              <div className="flex items-start gap-2 mb-[8px]">
                <span className="text-[12px] font-medium text-[#1d7682] uppercase tracking-wider">
                  {recommendation.confidence === 'high'
                    ? 'Recommended for you'
                    : recommendation.confidence === 'medium'
                      ? 'Likely match'
                      : 'Default starting point'}
                </span>
              </div>
              <p className="font-serif text-[16px] font-semibold text-[#333333] mb-[6px]">
                {recommendation.planName}
              </p>
              <p className="font-sans text-[13px] text-[#5b6a71] leading-relaxed mb-[12px]">
                {recommendation.description}
              </p>
              <button
                onClick={() => handleStart(recommendation.tabId)}
                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-white text-[13px] font-semibold px-[16px] py-[8px] rounded-full hover:opacity-90 transition-opacity"
              >
                Start with this calculator →
              </button>
            </div>
          )}

          {/* Quick "I don't know" shortcut */}
          {!recommendation && (
            <div className="pt-[8px] border-t border-[#F1F5F9] mt-[16px]">
              <p className="font-sans text-[12px] text-[#5b6a71] mb-[8px]">
                Don&apos;t want to answer? Skip ahead with a sensible default.
              </p>
              <button
                onClick={handleUseDefault}
                className="font-sans text-[13px] text-[#1d7682] underline hover:opacity-70"
              >
                Use Cash Balance as default →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

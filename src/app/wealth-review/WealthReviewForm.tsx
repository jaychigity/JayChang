'use client'

import { useState, useEffect, FormEvent } from 'react'
import { Lock, AlertCircle, CheckCircle } from 'lucide-react'
import { getUTMData, type UTMData } from '@/lib/utm'
import { trackFormSubmission } from '@/lib/analytics'

interface FormData {
  firstName: string
  email: string
  phone: string
  employer: string
  compensationType: string
  retirementTimeline: string
  biggestQuestion: string
  wasReferred: boolean
  referredBy: string
  company: string // honeypot
}

interface FormErrors {
  firstName?: string
  email?: string
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

const inputBase =
  'border border-[#b6d0ed] bg-[#F7F4EE] rounded-[3px] py-[14px] px-[20px] font-sans text-[16px] text-[#333333] w-full transition-all duration-200 focus:border-[#1d7682] focus:bg-[#FAFAF8] focus:outline-none focus:shadow-[0_0_0_3px_rgba(29,118,130,0.1)]'

const inputError = 'border-[#8B2E2E] bg-[#FFFAF8]'

const selectBase =
  'border border-[#b6d0ed] bg-[#F7F4EE] rounded-[3px] py-[14px] px-[20px] font-sans text-[16px] text-[#333333] w-full transition-all duration-200 focus:border-[#1d7682] focus:bg-[#FAFAF8] focus:outline-none focus:shadow-[0_0_0_3px_rgba(29,118,130,0.1)] appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%2712%27%20height%3D%278%27%20viewBox%3D%270%200%2012%208%27%3E%3Cpath%20d%3D%27M1%201l5%205%205-5%27%20stroke%3D%27%235b6a71%27%20stroke-width%3D%271.5%27%20fill%3D%27none%27/%3E%3C/svg%3E")] bg-no-repeat bg-[center_right_16px]'

export default function WealthReviewForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '',
    employer: '',
    compensationType: '',
    retirementTimeline: '',
    biggestQuestion: '',
    wasReferred: false,
    referredBy: '',
    company: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [utmData, setUtmData] = useState<UTMData>({})

  useEffect(() => {
    setUtmData(getUTMData())
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // Honeypot
    if (formData.company) {
      setIsSubmitted(true)
      return
    }

    setIsSubmitting(true)

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'wealth-review',
          firstName: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          employer: formData.employer,
          compensationType: formData.compensationType,
          retirementTimeline: formData.retirementTimeline,
          biggestQuestion: formData.biggestQuestion,
          referredBy: formData.referredBy || '',
          company: formData.company,
          ...utmData,
          submitted_at: new Date().toISOString(),
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
    } catch {
      // Still show success
    }

    trackFormSubmission('wealth_review_request', '/wealth-review', {
      utm_source: utmData.utm_source || 'direct',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-[580px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[32px] md:p-[64px] shadow-form text-center">
        <div className="mb-[24px]">
          <CheckCircle size={48} className="mx-auto text-[#2E5D4B]" strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] mb-[16px]">
          Thanks, {formData.firstName}.
        </h2>
        <p className="font-sans text-[16px] font-light text-[#5b6a71] leading-relaxed">
          I&rsquo;ve received your information and will be in touch within one business day.
          Looking forward to the conversation.
        </p>
        <p className="font-sans text-[13px] text-[#5b6a71] mt-[24px]">
          &mdash; Jay Chang
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-[580px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[24px] md:p-[48px] shadow-form">
      <form onSubmit={handleSubmit} noValidate>
        {/* First Name */}
        <div className="mb-[20px]">
          <label
            htmlFor="firstName"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            First Name <span className="text-[#8B2E2E]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            aria-invalid={errors.firstName ? 'true' : undefined}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            value={formData.firstName}
            onChange={handleChange}
            className={`${inputBase} ${errors.firstName ? inputError : ''}`}
          />
          {errors.firstName && (
            <p id="firstName-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
              <AlertCircle size={12} className="shrink-0" />
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-[20px]">
          <label
            htmlFor="email"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Email Address <span className="text-[#8B2E2E]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? inputError : ''}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
              <AlertCircle size={12} className="shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-[20px]">
          <label
            htmlFor="phone"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[2px]"
          >
            Phone Number
          </label>
          <p className="font-sans text-[11px] text-[#5b6a71] mb-[8px]">Optional</p>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(480) 944-0880"
            value={formData.phone}
            onChange={(e) => {
              const formatted = formatPhone(e.target.value)
              setFormData((prev) => ({ ...prev, phone: formatted }))
            }}
            className={inputBase}
          />
        </div>

        {/* Who do you work for? */}
        <div className="mb-[20px]">
          <label
            htmlFor="employer"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Who do you work for?
          </label>
          <input
            type="text"
            id="employer"
            name="employer"
            placeholder="Company name or retired"
            value={formData.employer}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Compensation type */}
        <div className="mb-[20px]">
          <label
            htmlFor="compensationType"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Primary compensation type
          </label>
          <select
            id="compensationType"
            name="compensationType"
            value={formData.compensationType}
            onChange={handleChange}
            className={selectBase}
          >
            <option value="">Select one...</option>
            <option value="salary-bonus">Salary + Bonus</option>
            <option value="rsu-equity">RSU / Equity Compensation</option>
            <option value="pension">Pension</option>
            <option value="business-income">Business Income</option>
            <option value="retirement-income">Retirement Income (SS, distributions)</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Retirement timeline */}
        <div className="mb-[20px]">
          <label
            htmlFor="retirementTimeline"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            When are you thinking about retirement?
          </label>
          <select
            id="retirementTimeline"
            name="retirementTimeline"
            value={formData.retirementTimeline}
            onChange={handleChange}
            className={selectBase}
          >
            <option value="">Select one...</option>
            <option value="already-retired">Already retired</option>
            <option value="1-3-years">Within 1-3 years</option>
            <option value="3-5-years">3-5 years</option>
            <option value="5-10-years">5-10 years</option>
            <option value="10-plus-years">10+ years</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        {/* Biggest question */}
        <div className="mb-[20px]">
          <label
            htmlFor="biggestQuestion"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            What&rsquo;s your biggest financial question right now?
          </label>
          <textarea
            id="biggestQuestion"
            name="biggestQuestion"
            rows={3}
            value={formData.biggestQuestion}
            onChange={handleChange}
            className={`${inputBase} resize-none`}
            placeholder="Anything on your mind, no wrong answer here."
          />
        </div>

        {/* Referral Toggle */}
        <div className="mb-[28px]">
          <p className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] mb-[8px]">
            Were you referred by someone?
          </p>
          <div className="flex gap-[8px]">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, wasReferred: true }))}
              className={`px-[24px] py-[10px] rounded-full font-sans text-[13px] font-medium border-2 transition-all duration-200 ${
                formData.wasReferred
                  ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]'
                  : 'border-[#E2E8F0] bg-white text-[#5b6a71] hover:border-[#1d7682]/40'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, wasReferred: false, referredBy: '' }))}
              className={`px-[24px] py-[10px] rounded-full font-sans text-[13px] font-medium border-2 transition-all duration-200 ${
                !formData.wasReferred
                  ? 'border-[#1d7682] bg-[#1d7682]/5 text-[#1d7682]'
                  : 'border-[#E2E8F0] bg-white text-[#5b6a71] hover:border-[#1d7682]/40'
              }`}
            >
              No
            </button>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              formData.wasReferred ? 'grid-rows-[1fr] opacity-100 mt-[12px]' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <label
                htmlFor="referredBy"
                className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
              >
                Who should I thank?
              </label>
              <input
                type="text"
                id="referredBy"
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>
        </div>

        {/* Honeypot */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-[16px] font-semibold py-[18px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? 'Sending...' : 'Send My Information to Jay \u2192'}
        </button>

        {/* Reassurance */}
        <p className="font-sans text-[12px] text-[#5b6a71] text-center mt-[16px]">
          Confidential &middot; I&apos;ll be in touch within one business day
        </p>
      </form>

      {/* Compliance */}
      <p className="font-sans text-xs font-light text-[#5b6a71] text-center mt-[32px] flex items-start justify-center gap-[8px]">
        <Lock size={14} className="shrink-0 mt-[2px]" />
        <span>
          Your information is strictly confidential. Farther Finance, Inc. is a
          registered investment adviser. This form does not constitute a
          solicitation or offer.
        </span>
      </p>
    </div>
  )
}

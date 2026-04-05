'use client'

import { useState, useEffect, useRef, useCallback, FormEvent } from 'react'
import { Lock, AlertCircle } from 'lucide-react'
import { getUTMData, type UTMData } from '@/lib/utm'
import { trackFormSubmission } from '@/lib/analytics'

const TOPICS = [
  'Retirement planning / Am I on track?',
  'Turning savings into income',
  'Investment strategy or portfolio review',
  'Taxes and efficiency',
  'Planning around my company benefits (RSUs, ESPP, pension, 401k)',
  'Stock compensation (RSUs, ESPP, concentrated positions)',
  'Pension review / lump sum vs income decision',
  'Company-specific plan review',
  'Major life change or transition',
  'Estate planning / protecting family',
  'Reducing risk or simplifying finances',
  'Not sure, just want a second opinion',
  'Something else',
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  age: string
  assets: string
  location: string
  topics: string[]
  topicOther: string
  referralSources: string[]
  referralOther: string
  company: string // honeypot field — hidden from real users
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

const ASSET_RANGES = [
  'I prefer not to say',
  '$500,000 – $1,000,000',
  '$1,000,000 – $5,000,000',
  '$5,000,000 – $10,000,000',
  '$10,000,000 – $25,000,000',
  '$25,000,000+',
  'Pending liquidity event (business sale, etc.)',
]

const LOCATIONS = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming', 'Washington D.C.', 'Other',
]

const REFERRAL_SOURCES = [
  'Google Search',
  'Client Referral',
  'Referral',
  'LinkedIn',
  'Webinar',
  'ERG',
  'Event',
  'Other',
]

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

const AGE_RANGES = [
  '18–24', '25–34', '35–44', '45–54', '55–64', '65–74', '75+',
]

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235b6a71' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`

const inputBase =
  'border border-[#b6d0ed] bg-[#F7F4EE] rounded-[3px] py-[14px] px-[20px] font-sans text-body text-[#333333] w-full transition-all duration-200 focus:border-[#1d7682] focus:bg-[#FAFAF8] focus:outline-none focus:shadow-[0_0_0_3px_rgba(29,118,130,0.1)]'

const inputError =
  'border-[#8B2E2E] bg-[#FFFAF8]'

const selectBase = `${inputBase} appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_20px_center]`

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    assets: '',
    location: '',
    topics: [],
    topicOther: '',
    referralSources: [],
    referralOther: '',
    company: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submittingMode, setSubmittingMode] = useState<'meeting' | 'callback' | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const [submitMode, setSubmitMode] = useState<'meeting' | 'callback' | null>(null)
  const [callbackPrefs, setCallbackPrefs] = useState({ timeOfDay: '', days: [] as string[] })
  const [callbackSent, setCallbackSent] = useState(false)
  const [utmData, setUtmData] = useState<UTMData>({})
  const calendarRef = useRef<HTMLDivElement>(null)
  const postSubmitRef = useRef<HTMLDivElement>(null)
  const embedLoaded = useRef(false)

  useEffect(() => {
    setUtmData(getUTMData())
  }, [])

  // Load HubSpot meetings embed script and scroll to calendar when form is submitted
  useEffect(() => {
    if (!isSubmitted || submitMode !== 'meeting' || embedLoaded.current) return
    embedLoaded.current = true

    // Build the embed URL with pre-filled contact data
    const params = new URLSearchParams({
      embed: 'true',
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    })
    const embedUrl = `https://meetings.hubspot.com/jay-chang1?${params.toString()}`

    // Create the HubSpot meetings container
    if (calendarRef.current) {
      const container = document.createElement('div')
      container.className = 'meetings-iframe-container'
      container.setAttribute('data-src', embedUrl)
      calendarRef.current.appendChild(container)

      // Load the HubSpot embed script
      const script = document.createElement('script')
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      script.async = true
      document.body.appendChild(script)

    }

    // Listen for HubSpot booking confirmation via postMessage
    function handleMessage(event: MessageEvent) {
      if (event.data?.meetingBookSucceeded) {
        setIsBooked(true)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [isSubmitted, submitMode, formData])

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(mode: 'meeting' | 'callback') {
    if (!validate()) return

    // Honeypot: if the hidden field was filled, silently discard
    if (formData.company) {
      setSubmitMode(mode)
      setIsSubmitted(true)
      return
    }

    setSubmittingMode(mode)

    // Merge form data with UTM attribution for lead tracking
    const submissionPayload = {
      ...formData,
      ...utmData,
      contactPreference: mode,
      submitted_at: new Date().toISOString(),
      page_url: typeof window !== 'undefined' ? window.location.href : '',
    }

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...submissionPayload, source: 'consultation-form' }),
      })
    } catch {
      // Still show success — don't block the user
    }

    // Fire GA4 conversion event
    trackFormSubmission('consultation_request', window.location.pathname, {
      utm_source: utmData.utm_source || 'direct',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
    })

    setSubmittingMode(null)
    setSubmitMode(mode)
    setIsSubmitted(true)
  }

  // Scroll to top of post-submit content when form submits or state changes
  useEffect(() => {
    if (isSubmitted && postSubmitRef.current) {
      postSubmitRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isSubmitted, submitMode, callbackSent, isBooked])

  if (isSubmitted) {
    // Final thank-you after booking or callback request
    if (isBooked || callbackSent) {
      return (
        <div ref={postSubmitRef} className="max-w-[680px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[64px] shadow-form text-center">
          <div className="mb-[24px]">
            <svg
              className="mx-auto text-[#2E5D4B]"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="font-serif text-h3 md:text-h2 text-[#333333] mb-[16px]">
            {isBooked ? 'Thanks for scheduling a time.' : 'Got it — I\u2019ll give you a call.'}
          </h2>
          <p className="font-sans text-body-lg font-light text-[#5b6a71]">
            {isBooked
              ? <>I&rsquo;m looking forward to our conversation, {formData.firstName}. You&rsquo;ll receive a calendar invite shortly.</>
              : <>I&rsquo;ll reach out at the time you requested, {formData.firstName}. Talk soon.</>
            }
          </p>
        </div>
      )
    }

    // Meeting mode: show HubSpot calendar
    if (submitMode === 'meeting') {
      return (
        <div ref={postSubmitRef} className="max-w-[960px] mx-auto">
          <div className="bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[48px] shadow-form text-center mb-[32px]">
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333]">
              Choose a time that works for you.
            </h2>
          </div>
          <div
            ref={calendarRef}
            className="bg-white rounded-[12px] border border-[#E2E8F0] p-[16px] md:p-[32px] min-h-[600px] overflow-hidden [&_.meetings-iframe-container]:w-full [&_iframe]:w-full [&_iframe]:min-h-[580px] [&_iframe]:border-0"
          />
        </div>
      )
    }

    // Callback mode: show preferred days/time form
    if (submitMode === 'callback') {
      return (
        <div ref={postSubmitRef} className="max-w-[680px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[32px] md:p-[64px] shadow-form">
          <h2 className="font-serif text-[24px] md:text-[28px] text-[#333333] text-center mb-[8px]">
            When&rsquo;s a good time to reach you?
          </h2>
          <p className="font-sans text-[14px] text-[#5b6a71] text-center mb-[32px]">
            I&rsquo;ll call you at the time you prefer, {formData.firstName}.
          </p>

          {/* Time of Day */}
          <div className="mb-[24px]">
            <p className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] mb-[8px]">
              What time of day is best?
            </p>
            <div className="grid grid-cols-3 gap-[8px]">
              {['Morning (8–11 AM)', 'Midday (11 AM–1 PM)', 'Afternoon (1–5 PM)'].map((time) => (
                <label
                  key={time}
                  className={`flex items-center justify-center gap-[8px] px-[12px] py-[12px] rounded-[8px] border-2 cursor-pointer transition-all duration-200 text-center ${
                    callbackPrefs.timeOfDay === time
                      ? 'border-[#1d7682] bg-[#1d7682]/5'
                      : 'border-[#E2E8F0] bg-white hover:border-[#1d7682]/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeOfDay"
                    checked={callbackPrefs.timeOfDay === time}
                    onChange={() => setCallbackPrefs((prev) => ({ ...prev, timeOfDay: time }))}
                    className="sr-only"
                  />
                  <span className="font-sans text-[13px] text-[#333333] font-medium">{time}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Preferred Days */}
          <div className="mb-[24px]">
            <p className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] mb-[8px]">
              Which days work best?
            </p>
            <div className="grid grid-cols-5 gap-[8px]">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                <label
                  key={day}
                  className={`flex items-center justify-center px-[8px] py-[10px] rounded-[8px] border-2 cursor-pointer transition-all duration-200 ${
                    callbackPrefs.days.includes(day)
                      ? 'border-[#1d7682] bg-[#1d7682]/5'
                      : 'border-[#E2E8F0] bg-white hover:border-[#1d7682]/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={callbackPrefs.days.includes(day)}
                    onChange={() => setCallbackPrefs((prev) => ({
                      ...prev,
                      days: prev.days.includes(day)
                        ? prev.days.filter((d) => d !== day)
                        : [...prev.days, day],
                    }))}
                    className="sr-only"
                  />
                  <span className="font-sans text-[13px] text-[#333333] font-medium">{day.slice(0, 3)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit callback request */}
          <button
            type="button"
            disabled={!callbackPrefs.timeOfDay || callbackPrefs.days.length === 0}
            onClick={async () => {
              try {
                await fetch('/api/lead', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    ...formData,
                    ...utmData,
                    contactPreference: 'callback',
                    callbackTimeOfDay: callbackPrefs.timeOfDay,
                    callbackDays: callbackPrefs.days,
                    submitted_at: new Date().toISOString(),
                    source: 'callback-request',
                  }),
                })
              } catch { /* still show success */ }
              setCallbackSent(true)
            }}
            className="w-full bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-base font-semibold py-[18px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            Request a Call
          </button>
        </div>
      )
    }
  }

  return (
    <div className="max-w-[680px] mx-auto bg-[#FAFAF8] border border-[rgba(51,51,51,0.08)] rounded-[8px] p-[32px] md:p-[64px] shadow-form">
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {/* What's on your mind — topic checkboxes */}
        <div className="mb-[24px]">
          <p className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] mb-[2px]">
            What&apos;s on your mind? <span className="font-normal text-[#5b6a71]">(What would you like to talk through together?)</span>
          </p>
          <p className="font-sans text-[12px] text-[#5b6a71] mb-[12px]">Select all that apply.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
            {TOPICS.map((topic) => (
              <label
                key={topic}
                className={`flex items-center gap-[10px] px-[14px] py-[10px] rounded-[6px] border cursor-pointer transition-all duration-200 ${
                  formData.topics.includes(topic)
                    ? 'border-[#1d7682] bg-[#1d7682]/5'
                    : 'border-[#E2E8F0] bg-white hover:border-[#1d7682]/40'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.topics.includes(topic)}
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      topics: prev.topics.includes(topic)
                        ? prev.topics.filter((t) => t !== topic)
                        : [...prev.topics, topic],
                    }))
                  }}
                  className="accent-[#1d7682] w-4 h-4 shrink-0"
                />
                <span className="font-sans text-[13px] text-[#333333]">{topic}</span>
              </label>
            ))}
          </div>
          {formData.topics.includes('Something else') && (
            <input
              type="text"
              placeholder="Tell us more..."
              value={formData.topicOther}
              onChange={(e) => setFormData((prev) => ({ ...prev, topicOther: e.target.value }))}
              className={`${inputBase} mt-[8px]`}
            />
          )}
        </div>

        {/* First Name / Last Name — side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px]">
          {/* First Name */}
          <div className="mb-[24px]">
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

          {/* Last Name */}
          <div className="mb-[24px]">
            <label
              htmlFor="lastName"
              className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
            >
              Last Name <span className="text-[#8B2E2E]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              aria-invalid={errors.lastName ? 'true' : undefined}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              value={formData.lastName}
              onChange={handleChange}
              className={`${inputBase} ${errors.lastName ? inputError : ''}`}
            />
            {errors.lastName && (
              <p id="lastName-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
                <AlertCircle size={12} className="shrink-0" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-[24px]">
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
        <div className="mb-[24px]">
          <label
            htmlFor="phone"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Phone Number <span className="text-[#8B2E2E]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(480) 944-0880"
            aria-invalid={errors.phone ? 'true' : undefined}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            value={formData.phone}
            onChange={(e) => {
              const formatted = formatPhone(e.target.value)
              setFormData((prev) => ({ ...prev, phone: formatted }))
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
            }}
            className={`${inputBase} ${errors.phone ? inputError : ''}`}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="font-sans text-xs text-[#8B2E2E] mt-[6px] flex items-center gap-[4px]">
              <AlertCircle size={12} className="shrink-0" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Age Range */}
        <div className="mb-[24px]">
          <label
            htmlFor="age"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Age Range <span className="font-normal text-[#5b6a71]">(only if you feel it&apos;s applicable)</span>
          </label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select a range</option>
            {AGE_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Financial Snapshot */}
        <div className="mb-[24px]">
          <label
            htmlFor="assets"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[2px]"
          >
            Financial Snapshot — Approximate Investable Assets{' '}
            <span className="font-normal text-[#5b6a71]">(Optional)</span>
          </label>
          <p className="font-sans text-[12px] text-[#5b6a71] mb-[8px]">
            Helpful for context, but feel free to skip if you&apos;d prefer to discuss live.
          </p>
          <select
            id="assets"
            name="assets"
            value={formData.assets}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select a range</option>
            {ASSET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="mb-[24px]">
          <label
            htmlFor="location"
            className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] block mb-[8px]"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={selectBase}
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="">Select your state</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Referral Source */}
        <div className="mb-[24px]">
          <p className="font-sans text-[13px] font-medium text-[#333333] tracking-[0.05em] mb-[8px]">
            How did you hear about us? <span className="font-normal text-[#5b6a71]">(Select all that apply)</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
            {REFERRAL_SOURCES.map((source) => (
              <label
                key={source}
                className={`flex items-center gap-[10px] px-[14px] py-[10px] rounded-[6px] border cursor-pointer transition-all duration-200 ${
                  formData.referralSources.includes(source)
                    ? 'border-[#1d7682] bg-[#1d7682]/5'
                    : 'border-[#E2E8F0] bg-white hover:border-[#1d7682]/40'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.referralSources.includes(source)}
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      referralSources: prev.referralSources.includes(source)
                        ? prev.referralSources.filter((s) => s !== source)
                        : [...prev.referralSources, source],
                    }))
                  }}
                  className="accent-[#1d7682] w-4 h-4 shrink-0"
                />
                <span className="font-sans text-[13px] text-[#333333]">{source}</span>
              </label>
            ))}
          </div>
          {formData.referralSources.includes('Other') && (
            <input
              type="text"
              placeholder="Tell us more..."
              value={formData.referralOther}
              onChange={(e) => setFormData((prev) => ({ ...prev, referralOther: e.target.value }))}
              className={`${inputBase} mt-[8px]`}
            />
          )}
        </div>

        {/* Honeypot — hidden from real users, catches bots */}
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

        {/* Submit Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
          <button
            type="button"
            disabled={submittingMode !== null}
            onClick={() => handleSubmit('meeting')}
            className="bg-gradient-to-b from-[#2a9dab] to-[#1d7682] text-[#F7F4EE] font-sans text-[15px] font-semibold py-[18px] px-[16px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_8px_rgba(29,118,130,0.3)] hover:from-[#238a97] hover:to-[#155f69] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(29,118,130,0.4)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {submittingMode === 'meeting' ? 'Sending...' : 'Schedule a Virtual Meeting'}
          </button>
          <button
            type="button"
            disabled={submittingMode !== null}
            onClick={() => handleSubmit('callback')}
            className="bg-white text-[#1d7682] border-2 border-[#1d7682] font-sans text-[15px] font-semibold py-[18px] px-[16px] rounded-full hover:bg-[#1d7682]/5 hover:-translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {submittingMode === 'callback' ? 'Sending...' : 'Request a Call From Jay'}
          </button>
        </div>
      </form>

      {/* Compliance disclaimer */}
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

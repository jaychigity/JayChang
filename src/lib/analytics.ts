// =============================================================
// Analytics & Conversion Tracking
// All tracking pixels are loaded via env variables. If an ID
// is missing, that pixel simply doesn't load — no errors.
// =============================================================

// --------------- GA4 Events ---------------

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackCTAClick(ctaText: string, ctaLocation: string, page: string) {
  trackEvent('cta_click', { cta_text: ctaText, cta_location: ctaLocation, page })
}

export function trackSectionView(section: string, page: string) {
  trackEvent('section_view', { section, page })
}

export function trackPhoneClick(ctaLocation: string, page: string) {
  trackEvent('phone_click', { cta_location: ctaLocation, page })
}

export function trackEmailClick(ctaLocation: string, page: string) {
  trackEvent('email_click', { cta_location: ctaLocation, page })
}

export function trackFormSubmission(formName: string, page: string, additionalData?: Record<string, string>) {
  // GA4 custom event
  trackEvent('form_submission', {
    form_name: formName,
    page,
    ...additionalData,
  })
  // GA4 conversion event
  trackEvent('generate_lead', {
    form_name: formName,
    page,
  })

  // Google Ads conversion (fires if gtag + conversion ID are present)
  trackGoogleAdsConversion()

  // Meta Pixel lead event
  trackMetaLead(formName)

  // LinkedIn conversion
  trackLinkedInConversion()
}

export function trackScrollDepth(depth: number, page: string) {
  trackEvent('scroll_depth', { depth_percent: depth, page })
}

export function trackPDFDownload(documentName: string, page: string) {
  trackEvent('pdf_download', { document_name: documentName, page })
}

export function trackToolInteraction(toolName: string, action: string, page: string) {
  trackEvent('tool_interaction', { tool_name: toolName, action, page })
}

// --------------- Google Ads Conversions ---------------

const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID

export function trackGoogleAdsConversion(value?: number) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function' && GOOGLE_ADS_CONVERSION_ID) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION_ID,
      ...(value !== undefined && { value, currency: 'USD' }),
    })
  }
}

// --------------- Meta (Facebook) Pixel ---------------

export function trackMetaLead(formName?: string) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: formName || 'form_submission',
    })
  }
}

export function trackMetaSchedule() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Schedule')
  }
}

export function trackMetaCustom(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params)
  }
}

// --------------- LinkedIn Insight Tag ---------------

export function trackLinkedInConversion(conversionId?: string) {
  if (typeof window !== 'undefined' && typeof window.lintrk === 'function') {
    if (conversionId) {
      window.lintrk('track', { conversion_id: conversionId })
    } else {
      // Default conversion — page-level tracking handled by the tag automatically
      window.lintrk('track')
    }
  }
}

// --------------- Type Declarations ---------------

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    lintrk: (...args: unknown[]) => void
  }
}

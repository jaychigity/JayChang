'use client'

import { useEffect } from 'react'

/**
 * Drop this into any landing page to hide the site-wide Navigation,
 * Footer, and RegulatoryFooter.  On unmount the class is removed so
 * client-side navigations back to normal pages restore chrome.
 */
export default function HideChrome() {
  useEffect(() => {
    document.body.classList.add('landing-page')
    return () => document.body.classList.remove('landing-page')
  }, [])
  return null
}

import type { Metadata } from 'next'
import HideChrome from '@/components/HideChrome'

export const metadata: Metadata = {
 title: 'Site Updates In Progress',
 description: 'The Advisor Jay site is briefly offline for updates. Email jay.chang@farther.com to reach Jay directly.',
 robots: { index: false, follow: false },
}

export default function MaintenancePage() {
 return (
  <>
  <HideChrome />
  <main
   style={{
    minHeight: '100vh',
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
   }}
  >
   <div style={{ maxWidth: 560, textAlign: 'center' }}>
    <div
     style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
      marginBottom: 48,
     }}
    >
     <span
      style={{
       fontFamily: 'var(--font-serif), Georgia, serif',
       fontSize: 36,
       fontWeight: 700,
       color: '#F7F4EE',
       letterSpacing: '-0.01em',
       lineHeight: 1,
      }}
     >
      Advisor Jay
     </span>
     <span
      style={{
       fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
       fontSize: 12,
       fontWeight: 400,
       color: 'rgba(247, 244, 238, 0.65)',
       marginTop: 6,
       letterSpacing: '0.02em',
      }}
     >
      powered by{' '}
      <span style={{ color: '#1d7682', fontWeight: 600 }}>Farther</span>
     </span>
    </div>

    <h1
     style={{
      fontFamily: 'var(--font-serif), Georgia, serif',
      fontSize: 36,
      fontWeight: 700,
      color: '#F7F4EE',
      lineHeight: 1.2,
      marginBottom: 20,
     }}
    >
     We&apos;ll be back shortly.
    </h1>

    <p
     style={{
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      fontSize: 17,
      fontWeight: 300,
      color: '#b6d0ed',
      lineHeight: 1.7,
      marginBottom: 32,
     }}
    >
     The site is briefly offline for updates. If you&apos;d like to talk
     in the meantime, the fastest way is email.
    </p>

    <a
     href="mailto:jay.chang@farther.com"
     style={{
      display: 'inline-block',
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      fontSize: 15,
      fontWeight: 500,
      color: '#F7F4EE',
      background: 'linear-gradient(to bottom, #2a9dab, #1d7682)',
      borderRadius: 9999,
      padding: '14px 28px',
      textDecoration: 'none',
      boxShadow:
       'inset 0 1px 1px rgba(255,255,255,0.25), 0 4px 16px rgba(29,118,130,0.3)',
     }}
    >
     Email Jay directly
    </a>

    <p
     style={{
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      fontSize: 13,
      color: 'rgba(247, 244, 238, 0.5)',
      marginTop: 48,
     }}
    >
     jay.chang@farther.com
    </p>
   </div>
  </main>
  </>
 )
}

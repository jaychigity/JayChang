import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const NOTIFY_EMAIL = 'jay.chang@farther.com'

interface LeadPayload {
  source: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  [key: string]: unknown
}

const SOURCE_LABELS: Record<string, string> = {
  'consultation-form': 'Contact / Consultation Form',
  'callback-request': 'Callback Request',
  'business-exit-scorecard': 'Business Exit Scorecard',
  'equity-compensation': 'Equity Compensation Tool',
  'estate-complexity': 'Estate Complexity Assessment',
  'retirement-readiness': 'Retirement Readiness Assessment',
  'ca-nv-az-tax-savings': 'CA/NV/AZ Tax Savings Calculator',
}

// ── Shared email styles ──────────────────────────────────────────────
const S = {
  teal: '#1d7682',
  tealLight: '#2a9dab',
  dark: '#333333',
  gray: '#666666',
  lightGray: '#e5e5e5',
  cream: '#F7F4EE',
  green: '#2E5D4B',
  yellow: '#b8860b',
  red: '#8B2E2E',
  bg: '#fafafa',
}

function pct(value: number, max: number): number {
  return Math.min(Math.round((value / max) * 100), 100)
}

function dollars(n: number): string {
  return '$' + Math.round(n).toLocaleString()
}

function progressBar(value: number, max: number, color: string, label: string, showValue?: string): string {
  const w = pct(value, max)
  return `
    <div style="margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:13px;color:${S.dark};font-weight:500;">${label}</span>
        <span style="font-size:13px;color:${S.gray};font-weight:600;">${showValue || value + '/' + max}</span>
      </div>
      <div style="background:${S.lightGray};border-radius:6px;height:14px;overflow:hidden;">
        <div style="background:${color};height:100%;border-radius:6px;width:${w}%;"></div>
      </div>
    </div>`
}

function scoreCircle(score: number, max: number, color: string): string {
  return `
    <div style="text-align:center;margin:20px 0;">
      <div style="display:inline-block;width:140px;height:140px;border-radius:50%;border:8px solid ${color};position:relative;">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
          <span style="font-size:42px;font-weight:700;color:${color};">${Math.round(score)}</span>
          <span style="font-size:16px;color:${S.gray};">/${max}</span>
        </div>
      </div>
    </div>`
}

function tierBadge(label: string, color: string): string {
  return `<span style="display:inline-block;background:${color};color:white;padding:6px 16px;border-radius:20px;font-size:14px;font-weight:600;margin:8px 0;">${label}</span>`
}

function statCard(label: string, value: string, color: string): string {
  return `
    <td style="padding:8px;width:25%;vertical-align:top;">
      <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:16px;text-align:center;border-top:3px solid ${color};">
        <div style="font-size:22px;font-weight:700;color:${color};margin-bottom:4px;">${value}</div>
        <div style="font-size:11px;color:${S.gray};text-transform:uppercase;letter-spacing:0.05em;">${label}</div>
      </div>
    </td>`
}

// ── Per-tool visual report builders ──────────────────────────────────

function buildExitScorecardReport(data: LeadPayload): string {
  const scores = data.scores as { financial: number; operational: number; tax: number; succession: number; total: number } | undefined
  if (!scores) return ''
  const total = scores.total
  const tier = String(data.tier || '')
  const tierColor = total >= 80 ? S.green : total >= 60 ? S.yellow : S.red

  return `
    <h2 style="font-size:18px;color:${S.teal};margin:24px 0 8px;">Business Exit Readiness Report</h2>
    ${scoreCircle(total, 100, tierColor)}
    <div style="text-align:center;">${tierBadge(tier, tierColor)}</div>
    <p style="text-align:center;font-size:13px;color:${S.gray};margin:4px 0 20px;">Revenue: ${data.revenue || 'Not specified'}</p>

    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:20px;margin:16px 0;">
      <h3 style="font-size:14px;color:${S.dark};margin:0 0 16px;text-transform:uppercase;letter-spacing:0.05em;">Category Breakdown</h3>
      ${progressBar(scores.financial, 25, S.teal, 'Financial Readiness', Math.round(scores.financial) + '/25')}
      ${progressBar(scores.operational, 25, S.tealLight, 'Operational Independence', Math.round(scores.operational) + '/25')}
      ${progressBar(scores.tax, 25, S.green, 'Tax & Legal Structure', Math.round(scores.tax) + '/25')}
      ${progressBar(scores.succession, 25, S.yellow, 'Succession Planning', Math.round(scores.succession) + '/25')}
    </div>

    <div style="background:#f0f7f4;border-left:4px solid ${S.green};padding:16px;border-radius:0 8px 8px 0;margin:16px 0;">
      <strong style="color:${S.green};">Weakest Area:</strong>
      <span style="color:${S.dark};"> ${
        ['Financial', 'Operational', 'Tax & Legal', 'Succession'][
          [scores.financial, scores.operational, scores.tax, scores.succession].indexOf(
            Math.min(scores.financial, scores.operational, scores.tax, scores.succession)
          )
        ]
      } — this is where the conversation should start.</span>
    </div>`
}

function buildEquityCompReport(data: LeadPayload): string {
  const results = data.results as {
    totalValue?: number; spread?: number; estimatedTax?: number;
    potentialSavings?: number; compType?: string; milestonesCount?: number; nextDeadline?: string;
  } | null
  if (!results) return ''

  return `
    <h2 style="font-size:18px;color:${S.teal};margin:24px 0 12px;">Equity Compensation Analysis</h2>
    <table style="width:100%;border-collapse:separate;border-spacing:8px;" cellpadding="0">
      <tr>
        ${statCard('Total Equity Value', dollars(results.totalValue || 0), S.teal)}
        ${statCard('Unrealized Spread', dollars(results.spread || 0), S.tealLight)}
      </tr>
      <tr>
        ${statCard('Estimated Tax', dollars(results.estimatedTax || 0), S.red)}
        ${statCard('Potential Savings', dollars(results.potentialSavings || 0), S.green)}
      </tr>
    </table>

    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:16px;margin:16px 0;">
      <table style="width:100%;font-size:13px;">
        <tr><td style="padding:4px 0;color:${S.gray};">Compensation Type</td><td style="padding:4px 0;font-weight:600;">${results.compType || '—'}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Timeline Events</td><td style="padding:4px 0;font-weight:600;">${results.milestonesCount || 0} milestones</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Next Critical Date</td><td style="padding:4px 0;font-weight:600;color:${S.red};">${results.nextDeadline || 'None identified'}</td></tr>
      </table>
    </div>`
}

function buildEstateReport(data: LeadPayload): string {
  const score = Number(data.score) || 0
  const tier = String(data.tier || '')
  const flags = data.flags as string[] | undefined
  const breakdown = data.breakdown as Array<{ label: string; points: number }> | undefined
  const tierColor = score >= 60 ? S.red : score >= 35 ? S.yellow : S.green

  return `
    <h2 style="font-size:18px;color:${S.teal};margin:24px 0 8px;">Estate Complexity Assessment</h2>
    ${scoreCircle(score, 92, tierColor)}
    <div style="text-align:center;">${tierBadge(tier, tierColor)}</div>

    ${breakdown ? `
    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:20px;margin:16px 0;">
      <h3 style="font-size:14px;color:${S.dark};margin:0 0 16px;text-transform:uppercase;letter-spacing:0.05em;">Complexity Factors</h3>
      ${breakdown.map(b => progressBar(b.points, 20, S.teal, b.label, String(b.points) + ' pts')).join('')}
    </div>` : ''}

    ${flags && flags.length > 0 ? `
    <div style="margin:16px 0;">
      <h3 style="font-size:14px;color:${S.red};margin:0 0 12px;">⚠ Flags Raised</h3>
      ${flags.map(f => `<div style="background:#fff5f5;border-left:4px solid ${S.red};padding:10px 16px;border-radius:0 8px 8px 0;margin-bottom:8px;font-size:13px;color:${S.dark};">${f}</div>`).join('')}
    </div>` : ''}`
}

function buildRetirementReport(data: LeadPayload): string {
  const results = data.results as {
    SCORE?: number; TOTAL_PROJECTED?: number; REQUIRED_NEST_EGG?: number;
    DOLLAR_GAP?: number; savings_rate?: number; YTR?: number;
    MONTHLY_GAP?: number; advisor_impact?: number;
  } | undefined
  const score = Number(data.score) || results?.SCORE || 0
  const status = String(data.status || '')
  const statusColor = score >= 75 ? S.green : score >= 50 ? S.yellow : S.red

  return `
    <h2 style="font-size:18px;color:${S.teal};margin:24px 0 8px;">Retirement Readiness Assessment</h2>
    ${scoreCircle(score, 100, statusColor)}
    <div style="text-align:center;">${tierBadge(status, statusColor)}</div>

    ${results ? `
    <table style="width:100%;border-collapse:separate;border-spacing:8px;margin:16px 0;" cellpadding="0">
      <tr>
        ${statCard('Projected Assets', dollars(results.TOTAL_PROJECTED || 0), S.teal)}
        ${statCard('Required', dollars(results.REQUIRED_NEST_EGG || 0), S.gray)}
      </tr>
      <tr>
        ${statCard('Gap', dollars(Math.abs(results.DOLLAR_GAP || 0)), (results.DOLLAR_GAP || 0) < 0 ? S.red : S.green)}
        ${statCard('Monthly Gap', dollars(Math.abs(results.MONTHLY_GAP || 0)), S.yellow)}
      </tr>
    </table>

    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:16px;margin:16px 0;">
      <table style="width:100%;font-size:13px;">
        <tr><td style="padding:4px 0;color:${S.gray};">Savings Rate</td><td style="padding:4px 0;font-weight:600;">${results.savings_rate ? results.savings_rate + '%' : '—'}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Years to Retirement</td><td style="padding:4px 0;font-weight:600;">${results.YTR || '—'} years</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Advisor Impact</td><td style="padding:4px 0;font-weight:600;color:${S.green};">${results.advisor_impact ? '+' + dollars(results.advisor_impact) : '—'}</td></tr>
      </table>
    </div>` : ''}`
}

function buildTaxSavingsReport(data: LeadPayload): string {
  const savingsNV = Number(data.cumulativeSavingsNV) || 0
  const savingsAZ = Number(data.cumulativeSavingsAZ) || 0
  const filing = String(data.filingStatus || '').toUpperCase()

  return `
    <h2 style="font-size:18px;color:${S.teal};margin:24px 0 12px;">CA vs NV vs AZ Tax Comparison</h2>

    <table style="width:100%;border-collapse:separate;border-spacing:8px;" cellpadding="0">
      <tr>
        <td style="padding:8px;width:50%;vertical-align:top;">
          <div style="background:#f0f7f4;border:2px solid ${S.green};border-radius:8px;padding:20px;text-align:center;">
            <div style="font-size:11px;color:${S.green};text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Move to Nevada</div>
            <div style="font-size:28px;font-weight:700;color:${S.green};">${dollars(savingsNV)}</div>
            <div style="font-size:12px;color:${S.gray};">5-year savings vs CA</div>
          </div>
        </td>
        <td style="padding:8px;width:50%;vertical-align:top;">
          <div style="background:#fdf8ef;border:2px solid ${S.yellow};border-radius:8px;padding:20px;text-align:center;">
            <div style="font-size:11px;color:${S.yellow};text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Move to Arizona</div>
            <div style="font-size:28px;font-weight:700;color:${S.yellow};">${dollars(savingsAZ)}</div>
            <div style="font-size:12px;color:${S.gray};">5-year savings vs CA</div>
          </div>
        </td>
      </tr>
    </table>

    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:16px;margin:16px 0;">
      <table style="width:100%;font-size:13px;">
        <tr><td style="padding:4px 0;color:${S.gray};">Filing Status</td><td style="padding:4px 0;font-weight:600;">${filing === 'MFJ' ? 'Married Filing Jointly' : 'Single'}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">W-2 & Bonus</td><td style="padding:4px 0;font-weight:600;">${dollars(Number(data.w2) || 0)}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Capital Gains</td><td style="padding:4px 0;font-weight:600;">${dollars(Number(data.cg) || 0)}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">RSU/Equity</td><td style="padding:4px 0;font-weight:600;">${dollars(Number(data.rsu) || 0)}</td></tr>
        <tr><td style="padding:4px 0;color:${S.gray};">Real Estate</td><td style="padding:4px 0;font-weight:600;">${dollars(Number(data.re) || 0)}</td></tr>
      </table>
    </div>`
}

function buildConsultationReport(data: LeadPayload): string {
  const callbackDays = data.callbackDays as string[] | undefined
  const callbackTimeOfDay = data.callbackTimeOfDay as string | undefined
  const referredBy = data.referredBy as string | undefined
  const isCallback = data.source === 'callback-request' || data.contactPreference === 'callback'

  let html = ''

  // Callback preferences banner
  if (isCallback && callbackTimeOfDay) {
    html += `
    <div style="background:#fdf8ef;border:2px solid ${S.yellow};border-radius:8px;padding:20px;margin-bottom:20px;text-align:center;">
      <h2 style="font-size:16px;color:${S.yellow};margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">📞 Callback Requested</h2>
      <p style="font-size:15px;color:${S.dark};margin:4px 0;"><strong>Preferred Time:</strong> ${callbackTimeOfDay}</p>
      <p style="font-size:15px;color:${S.dark};margin:4px 0;"><strong>Preferred Days:</strong> ${callbackDays?.join(', ') || '—'}</p>
    </div>`
  }

  // Details table
  const fields: [string, unknown][] = [
    ['Contact Preference', isCallback ? 'Callback' : data.contactPreference === 'meeting' ? 'Virtual Meeting' : data.contactPreference],
    ['Referred by', referredBy],
  ]
  const rows = fields
    .filter(([, v]) => v)
    .map(([label, value]) => `<tr><td style="padding:6px 0;color:${S.gray};width:140px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:${S.dark};font-weight:500;">${value}</td></tr>`)
    .join('')

  if (rows) {
    html += `
    <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:16px;margin-top:16px;">
      <table style="width:100%;font-size:14px;">${rows}</table>
    </div>`
  }

  return html
}

// ── Main email builder ───────────────────────────────────────────────

function buildVisualReport(data: LeadPayload): string {
  switch (data.source) {
    case 'business-exit-scorecard': return buildExitScorecardReport(data)
    case 'equity-compensation': return buildEquityCompReport(data)
    case 'estate-complexity': return buildEstateReport(data)
    case 'retirement-readiness': return buildRetirementReport(data)
    case 'ca-nv-az-tax-savings': return buildTaxSavingsReport(data)
    case 'consultation-form': return buildConsultationReport(data)
    case 'callback-request': return buildConsultationReport(data)
    default: return ''
  }
}

function buildEmailHtml(data: LeadPayload): string {
  const sourceLabel = SOURCE_LABELS[data.source] || data.source || 'Unknown'
  const report = buildVisualReport(data)

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;padding:20px;color:${S.dark};background:#f5f5f5;">
  <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <div style="background:${S.teal};color:${S.cream};padding:24px 28px;">
      <h1 style="margin:0;font-size:22px;font-weight:600;">New Lead from Advisor Jay</h1>
      <p style="margin:8px 0 0;font-size:14px;opacity:0.85;">Source: ${sourceLabel}</p>
    </div>

    <div style="padding:28px;">
      <div style="background:${S.bg};border:1px solid ${S.lightGray};border-radius:8px;padding:20px;margin-bottom:20px;">
        <h2 style="font-size:14px;color:${S.teal};margin:0 0 12px;text-transform:uppercase;letter-spacing:0.05em;">Contact Information</h2>
        <table style="width:100%;font-size:15px;">
          <tr><td style="padding:6px 0;color:${S.gray};width:100px;">Name</td><td style="padding:6px 0;font-weight:600;font-size:17px;">${[data.firstName, data.lastName].filter(Boolean).join(' ') || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:${S.gray};">Email</td><td style="padding:6px 0;"><a href="mailto:${data.email}" style="color:${S.teal};font-weight:500;">${data.email || '—'}</a></td></tr>
          <tr><td style="padding:6px 0;color:${S.gray};">Phone</td><td style="padding:6px 0;"><a href="tel:${data.phone}" style="color:${S.teal};font-weight:500;">${data.phone || '—'}</a></td></tr>${data.referredBy ? `
          <tr><td style="padding:6px 0;color:${S.gray};">Referred by</td><td style="padding:6px 0;font-weight:500;">${data.referredBy}</td></tr>` : ''}
        </table>
      </div>

      ${report}

      <div style="margin-top:28px;padding-top:16px;border-top:1px solid ${S.lightGray};">
        <p style="font-size:11px;color:#999;margin:0;">
          Submitted: ${data.timestamp || new Date().toISOString()}<br>
          Captured automatically from advisorjay.com
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
}

function buildPlainText(data: LeadPayload): string {
  const sourceLabel = SOURCE_LABELS[data.source] || data.source || 'Unknown'
  const lines = [
    `NEW LEAD — ${sourceLabel}`,
    '',
    `Name: ${data.firstName || ''} ${data.lastName || ''}`,
    `Email: ${data.email || '—'}`,
    `Phone: ${data.phone || '—'}`,
    '',
  ]

  const skipFields = ['source', 'timestamp', 'company', 'reportHtml', 'firstName', 'lastName', 'email', 'phone']
  for (const [key, value] of Object.entries(data)) {
    if (skipFields.includes(key)) continue
    const label = key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim()
    const v = value === null || value === undefined ? '—' : typeof value === 'object' ? JSON.stringify(value) : String(value)
    lines.push(`${label}: ${v}`)
  }

  lines.push('', `Submitted: ${data.timestamp || new Date().toISOString()}`)
  return lines.join('\n')
}

// ── Email senders ────────────────────────────────────────────────────

async function sendViaGmail(subject: string, html: string, text: string): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })
  const result = await transporter.sendMail({
    from: `"Advisor Jay Leads" <${process.env.GMAIL_USER}>`,
    to: NOTIFY_EMAIL,
    subject,
    text,
    html,
  })
  return !!result.messageId
}

async function sendViaResend(subject: string, html: string, text: string): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({ from: process.env.GMAIL_USER || 'leads@advisorjay.com', to: NOTIFY_EMAIL, subject, html, text }),
  })
  return res.ok
}

async function sendViaSendGrid(subject: string, html: string, text: string): Promise<boolean> {
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: NOTIFY_EMAIL }] }],
      from: { email: process.env.GMAIL_USER || 'leads@advisorjay.com' },
      subject,
      content: [{ type: 'text/plain', value: text }, { type: 'text/html', value: html }],
    }),
  })
  return res.ok || res.status === 202
}

// ── API handler ──────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const data: LeadPayload = await request.json()

    if (data.company) return NextResponse.json({ ok: true })
    if (!data.email && !data.phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    const sourceLabel = SOURCE_LABELS[data.source] || data.source || 'Website'
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ') || 'Unknown'
    const subject = `New Lead: ${name} — ${sourceLabel}`

    const html = buildEmailHtml(data)
    const text = buildPlainText(data)
    let sent = false

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      sent = await sendViaGmail(subject, html, text)
    } else if (process.env.RESEND_API_KEY) {
      sent = await sendViaResend(subject, html, text)
    } else if (process.env.SENDGRID_API_KEY) {
      sent = await sendViaSendGrid(subject, html, text)
    } else {
      console.log('\n========== NEW LEAD ==========')
      console.log(text)
      console.log('==============================\n')
      sent = true
    }

    if (!sent) console.error('Failed to send lead notification email')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

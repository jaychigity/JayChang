'use client'

import { useState } from 'react'
import Link from 'next/link'

// 2025 IRS Limits
const LIMITS = {
 year: 2025,
 employeeDeferral: 23500,
 catchUp50: 7500,
 catchUp6063: 11250, // SECURE 2.0 enhanced catch-up for ages 60-63
 totalAnnualAdditions: 70000, // 415(c) limit
}

// 2025 Federal Tax Brackets
const TAX_BRACKETS_SINGLE = [
 { min: 0, max: 11925, rate: 0.10 },
 { min: 11925, max: 48475, rate: 0.12 },
 { min: 48475, max: 103350, rate: 0.22 },
 { min: 103350, max: 197300, rate: 0.24 },
 { min: 197300, max: 250525, rate: 0.32 },
 { min: 250525, max: 626350, rate: 0.35 },
 { min: 626350, max: Infinity, rate: 0.37 },
]

const TAX_BRACKETS_MFJ = [
 { min: 0, max: 23850, rate: 0.10 },
 { min: 23850, max: 96950, rate: 0.12 },
 { min: 96950, max: 206700, rate: 0.22 },
 { min: 206700, max: 394600, rate: 0.24 },
 { min: 394600, max: 501050, rate: 0.32 },
 { min: 501050, max: 751600, rate: 0.35 },
 { min: 751600, max: Infinity, rate: 0.37 },
]

function getMarginalRate(income: number, brackets: typeof TAX_BRACKETS_SINGLE) {
 for (let i = brackets.length - 1; i >= 0; i--) {
  if (income > brackets[i].min) return brackets[i].rate
 }
 return brackets[0].rate
}

function formatCurrency(value: number) {
 return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}

function formatPercent(value: number) {
 return `${value.toFixed(1)}%`
}

export default function WithholdingCalculator() {
 const [salary, setSalary] = useState(150000)
 const [salaryInput, setSalaryInput] = useState('150,000')
 const [filingStatus, setFilingStatus] = useState<'single' | 'mfj'>('single')
 const [age, setAge] = useState(35)
 const [employerMatchPercent, setEmployerMatchPercent] = useState(4)
 const [employerMatchCap, setEmployerMatchCap] = useState(6)
 const [payFrequency, setPayFrequency] = useState(26) // bi-weekly

 // Determine catch-up eligibility
 const isCatchUpEligible = age >= 50
 const isEnhancedCatchUp = age >= 60 && age <= 63
 const catchUpAmount = isEnhancedCatchUp
  ? LIMITS.catchUp6063
  : isCatchUpEligible
  ? LIMITS.catchUp50
  : 0

 // Max employee deferral (pre-tax + Roth)
 const maxDeferral = LIMITS.employeeDeferral + catchUpAmount

 // Withholding percentage to max out
 const withholdingPercent = Math.min((maxDeferral / salary) * 100, 100)

 // Per paycheck deferral
 const perPaycheckDeferral = maxDeferral / payFrequency

 // Employer match calculation
 const employerMatchContribution = Math.min(
  (salary * employerMatchPercent) / 100,
  (salary * employerMatchCap) / 100
 )

 // After-tax / spillover (mega backdoor Roth)
 const totalWithEmployerAndEmployee = maxDeferral + employerMatchContribution
 const spilloverRoom = Math.max(LIMITS.totalAnnualAdditions - totalWithEmployerAndEmployee, 0)
 const spilloverPercent = (spilloverRoom / salary) * 100

 // Tax impact
 const brackets = filingStatus === 'single' ? TAX_BRACKETS_SINGLE : TAX_BRACKETS_MFJ
 const marginalRate = getMarginalRate(salary, brackets)
 const taxSavings = maxDeferral * marginalRate

 // Total contributions
 const totalContributions = maxDeferral + employerMatchContribution + spilloverRoom

 const handleSalaryInputChange = (value: string) => {
  setSalaryInput(value)
  const num = parseInt(value.replace(/[^0-9]/g, ''), 10)
  if (!isNaN(num) && num > 0) {
   setSalary(num)
  }
 }

 const handleSalaryBlur = () => {
  setSalaryInput(salary.toLocaleString())
 }

 const payFrequencyLabel: Record<number, string> = {
  12: 'Monthly',
  24: 'Semi-monthly',
  26: 'Bi-weekly',
  52: 'Weekly',
 }

 return (
  <div className="space-y-8">
   {/* Input Section */}
   <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
    <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-6">Your Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {/* Salary */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Annual Gross Salary
      </label>
      <div className="relative">
       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999] text-lg">$</span>
       <input
        type="text"
        value={salaryInput}
        onChange={(e) => handleSalaryInputChange(e.target.value)}
        onBlur={handleSalaryBlur}
        className="w-full pl-8 pr-4 py-3 border border-[#E8E6E1] rounded-lg text-[#333333] text-lg font-semibold focus:outline-none focus:border-[#1d7682] transition-colors"
       />
      </div>
      <input
       type="range"
       min={30000}
       max={1000000}
       step={5000}
       value={salary}
       onChange={(e) => {
        const val = parseInt(e.target.value)
        setSalary(val)
        setSalaryInput(val.toLocaleString())
       }}
       className="w-full mt-3 accent-[#1d7682]"
      />
      <div className="flex justify-between text-[11px] text-[#999] mt-1">
       <span>$30,000</span>
       <span>$1,000,000</span>
      </div>
     </div>

     {/* Age */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Age (end of {LIMITS.year})
      </label>
      <div className="text-lg font-semibold text-[#333333] mb-1">{age}</div>
      <input
       type="range"
       min={20}
       max={75}
       step={1}
       value={age}
       onChange={(e) => setAge(parseInt(e.target.value))}
       className="w-full accent-[#1d7682]"
      />
      <div className="flex justify-between text-[11px] text-[#999] mt-1">
       <span>20</span>
       <span>75</span>
      </div>
      {isCatchUpEligible && (
       <p className="text-[12px] text-[#1d7682] font-semibold mt-2">
        {isEnhancedCatchUp
         ? `Eligible for enhanced catch-up (ages 60-63): ${formatCurrency(LIMITS.catchUp6063)}`
         : `Eligible for catch-up contributions (50+): ${formatCurrency(LIMITS.catchUp50)}`}
       </p>
      )}
     </div>

     {/* Filing Status */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Filing Status
      </label>
      <div className="flex gap-3">
       <button
        onClick={() => setFilingStatus('single')}
        className={`flex-1 py-3 rounded-lg border text-sm font-semibold transition-colors ${
         filingStatus === 'single'
          ? 'bg-[#1d7682] text-white border-[#1d7682]'
          : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#1d7682]'
        }`}
       >
        Single
       </button>
       <button
        onClick={() => setFilingStatus('mfj')}
        className={`flex-1 py-3 rounded-lg border text-sm font-semibold transition-colors ${
         filingStatus === 'mfj'
          ? 'bg-[#1d7682] text-white border-[#1d7682]'
          : 'bg-white text-[#333333] border-[#E8E6E1] hover:border-[#1d7682]'
        }`}
       >
        Married Filing Jointly
       </button>
      </div>
     </div>

     {/* Pay Frequency */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Pay Frequency
      </label>
      <select
       value={payFrequency}
       onChange={(e) => setPayFrequency(parseInt(e.target.value))}
       className="w-full py-3 px-4 border border-[#E8E6E1] rounded-lg text-[#333333] font-semibold focus:outline-none focus:border-[#1d7682] transition-colors"
      >
       <option value={52}>Weekly (52 paychecks)</option>
       <option value={26}>Bi-weekly (26 paychecks)</option>
       <option value={24}>Semi-monthly (24 paychecks)</option>
       <option value={12}>Monthly (12 paychecks)</option>
      </select>
     </div>

     {/* Employer Match % */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Employer Match Rate
      </label>
      <div className="text-lg font-semibold text-[#333333] mb-1">{employerMatchPercent}%</div>
      <input
       type="range"
       min={0}
       max={10}
       step={0.5}
       value={employerMatchPercent}
       onChange={(e) => setEmployerMatchPercent(parseFloat(e.target.value))}
       className="w-full accent-[#1d7682]"
      />
      <div className="flex justify-between text-[11px] text-[#999] mt-1">
       <span>0%</span>
       <span>10%</span>
      </div>
     </div>

     {/* Employer Match Cap */}
     <div>
      <label className="block font-sans text-[13px] font-semibold text-[#333333] mb-2">
       Match Cap (% of salary you must contribute)
      </label>
      <div className="text-lg font-semibold text-[#333333] mb-1">{employerMatchCap}%</div>
      <input
       type="range"
       min={0}
       max={15}
       step={1}
       value={employerMatchCap}
       onChange={(e) => setEmployerMatchCap(parseInt(e.target.value))}
       className="w-full accent-[#1d7682]"
      />
      <div className="flex justify-between text-[11px] text-[#999] mt-1">
       <span>0%</span>
       <span>15%</span>
      </div>
     </div>
    </div>
   </div>

   {/* Results: Pre-Tax / Roth Deferral */}
   <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
    <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Employee Deferral (Pre-Tax / Roth)</h2>
    <p className="text-[14px] text-[#5b6a71] mb-6">{LIMITS.year} elective deferral limit: {formatCurrency(LIMITS.employeeDeferral)}{catchUpAmount > 0 ? ` + ${formatCurrency(catchUpAmount)} catch-up` : ''}</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Set Withholding To</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatPercent(withholdingPercent)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">of gross pay</p>
     </div>

     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Max Annual Deferral</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(maxDeferral)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">
       {LIMITS.employeeDeferral.toLocaleString()} base{catchUpAmount > 0 ? ` + ${catchUpAmount.toLocaleString()} catch-up` : ''}
      </p>
     </div>

     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Per Paycheck</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(perPaycheckDeferral)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">{payFrequencyLabel[payFrequency]} ({payFrequency}/yr)</p>
     </div>
    </div>

    {/* Tax Impact */}
    <div className="mt-6 bg-[#1d7682]/5 rounded-lg p-5">
     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
       <p className="text-[14px] font-semibold text-[#333333]">Estimated Tax Savings from Pre-Tax Deferral</p>
       <p className="text-[13px] text-[#5b6a71]">Based on your {formatPercent(marginalRate * 100)} marginal federal tax bracket</p>
      </div>
      <p className="text-[28px] font-bold text-[#1d7682]">{formatCurrency(taxSavings)}</p>
     </div>
    </div>
   </div>

   {/* Employer Match */}
   <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
    <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">Employer Match</h2>
    <p className="text-[14px] text-[#5b6a71] mb-6">{employerMatchPercent}% match on the first {employerMatchCap}% of your salary</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Annual Employer Match</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(employerMatchContribution)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">Free money from your employer</p>
     </div>

     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">You + Employer Combined</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(maxDeferral + employerMatchContribution)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">Total pre-tax + match</p>
     </div>
    </div>
   </div>

   {/* Spillover / After-Tax (Mega Backdoor Roth) */}
   <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
    <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-2">After-Tax Spillover (Mega Backdoor Roth)</h2>
    <p className="text-[14px] text-[#5b6a71] mb-6">
     The IRS allows total annual additions up to {formatCurrency(LIMITS.totalAnnualAdditions)} ({LIMITS.year} 415(c) limit).
     After your deferral and employer match, the remaining room can be contributed as after-tax dollars and converted to Roth.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Spillover Room</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(spilloverRoom)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">Available for after-tax contributions</p>
     </div>

     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Spillover Withholding</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatPercent(spilloverPercent)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">Additional % of gross pay</p>
     </div>

     <div className="bg-[#F7F4EE] rounded-lg p-5 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1d7682] mb-2">Per Paycheck Spillover</p>
      <p className="text-[36px] font-bold text-[#333333]">{formatCurrency(spilloverRoom / payFrequency)}</p>
      <p className="text-[13px] text-[#5b6a71] mt-1">{payFrequencyLabel[payFrequency]} ({payFrequency}/yr)</p>
     </div>
    </div>

    <div className="mt-6 bg-[#F7F4EE] rounded-lg p-5">
     <p className="text-[13px] text-[#5b6a71]">
      <span className="font-semibold text-[#333333]">Important:</span> Not all employer plans allow after-tax contributions or in-plan Roth conversions. Check with your plan administrator to confirm eligibility for mega backdoor Roth.
     </p>
    </div>
   </div>

   {/* Catch-Up Rules Reference */}
   <div className="bg-white rounded-[12px] border border-[#E8E6E1] p-6 md:p-8">
    <h2 className="font-sans text-[20px] font-bold text-[#333333] mb-4">{LIMITS.year} Catch-Up Contribution Rules</h2>
    <div className="overflow-x-auto">
     <table className="w-full text-left">
      <thead>
       <tr className="border-b border-[#E8E6E1]">
        <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Age Group</th>
        <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Base Deferral</th>
        <th className="py-3 pr-4 text-[13px] font-semibold text-[#333333]">Catch-Up</th>
        <th className="py-3 text-[13px] font-semibold text-[#333333]">Total Deferral</th>
       </tr>
      </thead>
      <tbody className="text-[14px] text-[#333333]">
       <tr className={`border-b border-[#E8E6E1] ${age < 50 ? 'bg-[#1d7682]/5' : ''}`}>
        <td className="py-3 pr-4 font-semibold">Under 50</td>
        <td className="py-3 pr-4">{formatCurrency(LIMITS.employeeDeferral)}</td>
        <td className="py-3 pr-4 text-[#999]">N/A</td>
        <td className="py-3 font-semibold">{formatCurrency(LIMITS.employeeDeferral)}</td>
       </tr>
       <tr className={`border-b border-[#E8E6E1] ${isCatchUpEligible && !isEnhancedCatchUp ? 'bg-[#1d7682]/5' : ''}`}>
        <td className="py-3 pr-4 font-semibold">Ages 50-59 & 64+</td>
        <td className="py-3 pr-4">{formatCurrency(LIMITS.employeeDeferral)}</td>
        <td className="py-3 pr-4">{formatCurrency(LIMITS.catchUp50)}</td>
        <td className="py-3 font-semibold">{formatCurrency(LIMITS.employeeDeferral + LIMITS.catchUp50)}</td>
       </tr>
       <tr className={`${isEnhancedCatchUp ? 'bg-[#1d7682]/5' : ''}`}>
        <td className="py-3 pr-4 font-semibold">Ages 60-63 <span className="text-[#1d7682] text-[11px]">SECURE 2.0</span></td>
        <td className="py-3 pr-4">{formatCurrency(LIMITS.employeeDeferral)}</td>
        <td className="py-3 pr-4">{formatCurrency(LIMITS.catchUp6063)}</td>
        <td className="py-3 font-semibold">{formatCurrency(LIMITS.employeeDeferral + LIMITS.catchUp6063)}</td>
       </tr>
      </tbody>
     </table>
    </div>

    <div className="mt-4 bg-[#F7F4EE] rounded-lg p-5">
     <p className="text-[13px] text-[#5b6a71]">
      <span className="font-semibold text-[#333333]">SECURE 2.0 Note:</span> Starting in 2025, participants ages 60-63 can make an enhanced catch-up contribution of {formatCurrency(LIMITS.catchUp6063)}, which is higher than the standard {formatCurrency(LIMITS.catchUp50)} catch-up. For those earning over $145,000, catch-up contributions must be made on a Roth (after-tax) basis.
     </p>
    </div>
   </div>

   {/* Summary */}
   <div className="bg-[#333333] rounded-[12px] p-6 md:p-8 text-white">
    <h2 className="font-sans text-[20px] font-bold mb-6">Your {LIMITS.year} Total Contribution Summary</h2>
    <div className="space-y-4">
     <div className="flex justify-between items-center py-2 border-b border-white/10">
      <span className="text-[15px] text-gray-300">Employee Deferral (Pre-Tax / Roth)</span>
      <span className="text-[18px] font-bold">{formatCurrency(maxDeferral)}</span>
     </div>
     <div className="flex justify-between items-center py-2 border-b border-white/10">
      <span className="text-[15px] text-gray-300">Employer Match</span>
      <span className="text-[18px] font-bold">{formatCurrency(employerMatchContribution)}</span>
     </div>
     <div className="flex justify-between items-center py-2 border-b border-white/10">
      <span className="text-[15px] text-gray-300">After-Tax Spillover</span>
      <span className="text-[18px] font-bold">{formatCurrency(spilloverRoom)}</span>
     </div>
     <div className="flex justify-between items-center py-3">
      <span className="text-[17px] font-semibold">Total Annual Contributions</span>
      <span className="text-[24px] font-bold text-[#1d7682]">{formatCurrency(totalContributions)}</span>
     </div>
     <div className="flex justify-between items-center py-2 border-t border-white/10">
      <span className="text-[15px] text-gray-300">Combined Withholding Needed</span>
      <span className="text-[18px] font-bold">{formatPercent(withholdingPercent + spilloverPercent)}</span>
     </div>
     <div className="flex justify-between items-center py-2 border-t border-white/10">
      <span className="text-[15px] text-gray-300">Estimated Federal Tax Savings</span>
      <span className="text-[18px] font-bold text-[#1d7682]">{formatCurrency(taxSavings)}</span>
     </div>
    </div>
   </div>

   {/* CTA */}
   <div className="text-center py-4">
    <p className="text-[16px] text-[#333333] mb-4">
     Want help optimizing your 401(k) strategy as part of a comprehensive financial plan?
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
     <Link
      href="/schedule-consultation"
      className="inline-flex items-center justify-center px-8 py-3 bg-[#1d7682] text-white font-semibold rounded-full hover:bg-[#165d66] transition-colors"
     >
      Schedule a Conversation With Jay
     </Link>
     <Link
      href="/tools"
      className="text-[#1d7682] font-semibold hover:underline"
     >
      Explore More Tools
     </Link>
    </div>
   </div>
  </div>
 )
}

import React from 'react';
import type { DocPage } from '../../data/docsData';
import { DocSection } from './layout';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, TrendingUp, ShoppingCart, History, AlertTriangle, CheckCheck } from 'lucide-react';

interface Props { page: DocPage; }

const creditPackages = [
  { credits: '10', label: 'Trial', highlight: false, note: 'Included at registration' },
  { credits: '500', label: 'Starter', highlight: false, note: 'Good for initial campaigns' },
  { credits: '1,100', label: 'Growth', highlight: true, note: 'Most popular package' },
  { credits: '2,750', label: 'Scale', highlight: false, note: 'High-volume messaging' },
  { credits: '6,000', label: 'Enterprise', highlight: false, note: 'Large campaign operations' },
];

const monitorSteps = [
  { title: 'Open SMS Credits', desc: 'Open SMS Credits from the left navigation.' },
  { title: 'Review Balance Card', desc: 'See total available credits including any remaining free trial credits.' },
  { title: 'Analyze Usage Charts', desc: 'Monitor SMS credit consumption for Today, This Week, and This Month.' },
];

const purchaseSteps = [
  { title: 'Navigate to Purchase Area', desc: 'Scroll to the purchase section within SMS Credits.' },
  { title: 'Select Credit Package', desc: 'Choose one of the available credit packages.' },
  { title: 'Open Secure Checkout', desc: 'Click Checkout to open the secure payment gateway.' },
  { title: 'Complete Payment', desc: 'Finish the payment process and wait to be redirected back to NOLA SMS Pro.' },
  { title: 'Verify Wallet Balance', desc: 'Confirm your updated credit balance is reflected on the dashboard.' },
];

const auditSteps = [
  { title: 'Scroll to Credit History', desc: 'Scroll to the Credit History section below the balance card.' },
  { title: 'Review Transactions', desc: 'Check each entry: Timestamp, Credit Adjustment, Reference, and Description.' },
];

export const SmsCreditsContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">



      {/* CREDIT PACKAGES */}
      <section id="credits-packages" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Credit packages</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {creditPackages.map((pkg) => (
            <div
              key={pkg.credits}
              className={`flex-shrink-0 rounded-2xl border px-5 py-4 min-w-[110px] text-center transition-all ${
                pkg.highlight
                  ? 'border-blue-300 bg-gradient-to-b from-blue-50 to-slate-50 dark:border-blue-800/60 dark:from-blue-950/20 dark:to-slate-900 ring-1 ring-blue-200 dark:ring-blue-900/40'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827]'
              }`}
            >
              <p className={`text-[22px] font-black leading-none mb-1 ${pkg.highlight ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                {pkg.credits}
              </p>
              <p className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">{pkg.label}</p>
              {pkg.highlight && (
                <span className="inline-block rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-black text-white uppercase tracking-wide mb-1">Popular</span>
              )}
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">{pkg.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREREQUISITE */}
      <section id="credits-prerequisite">
        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/30">
          <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100/50 dark:border-slate-800 text-slate-600 dark:text-slate-400">
            <UserCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[13.5px] font-black text-slate-900 dark:text-white">Owner account login required</p>
            <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">Active owner account login is required to access billing and credits settings.</p>
          </div>
        </div>
      </section>

      {/* THREE WORKFLOWS */}
      <section id="credits-workflows" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Credit management workflows</h2>
        <div className="grid gap-6 lg:grid-cols-3">

          {/* MONITOR */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827] overflow-hidden shadow-sm">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border-b border-slate-200 px-5 py-4 dark:bg-slate-900/30 dark:border-slate-800">
              <TrendingUp className="h-4 w-4 text-slate-500" />
              <p className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Monitor Balance</p>
            </div>
            <div className="p-5 space-y-4">
              {monitorSteps.map((step, idx) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-black mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">{step.title}</p>
                    <p className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PURCHASE */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827] overflow-hidden shadow-sm">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border-b border-slate-200 px-5 py-4 dark:bg-slate-900/30 dark:border-slate-800">
              <ShoppingCart className="h-4 w-4 text-slate-500" />
              <p className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Purchase Credits</p>
            </div>
            <div className="p-5 space-y-4">
              {purchaseSteps.map((step, idx) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-black mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">{step.title}</p>
                    <p className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AUDIT */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827] overflow-hidden shadow-sm">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border-b border-slate-200 px-5 py-4 dark:bg-slate-900/30 dark:border-slate-800">
              <History className="h-4 w-4 text-slate-500" />
              <p className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Audit Transactions</p>
            </div>
            <div className="p-5 space-y-4">
              {auditSteps.map((step, idx) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-black mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">{step.title}</p>
                    <p className="text-[12px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSUMPTION RULE */}
      <section id="credits-consumption-rule">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/40 px-5 py-4 dark:border-amber-900/40 dark:bg-amber-950/10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="w-full">
              <p className="text-[13.5px] font-black text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-3">Credit consumption rule</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white/70 border border-amber-100 px-4 py-3 dark:bg-amber-950/20 dark:border-amber-900/20">
                  <p className="text-[11px] font-black text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-1">Standard SMS</p>
                  <p className="text-[14px] font-black text-amber-900 dark:text-amber-200">Up to 160 chars = <span className="text-blue-600 dark:text-blue-400">1 credit</span></p>
                </div>
                <div className="rounded-xl bg-white/70 border border-amber-100 px-4 py-3 dark:bg-amber-950/20 dark:border-amber-900/20">
                  <p className="text-[11px] font-black text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-1">Multi-segment or Unicode</p>
                  <p className="text-[14px] font-black text-amber-900 dark:text-amber-200">Additional <span className="text-blue-600 dark:text-blue-400">1 credit per segment</span></p>
                </div>
              </div>
              <p className="text-[12.5px] mt-3 text-amber-700 dark:text-amber-400 leading-relaxed">Emojis, special characters, and long messages split into multiple segments — consuming extra credits per recipient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section id="credits-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            Your SMS credit balance accurately reflects purchases and usage, ensuring uninterrupted outbound messaging.
          </p>
        </div>
      </section>


    </div>
  );
};

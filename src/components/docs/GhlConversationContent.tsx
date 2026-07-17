import React from 'react';
import type { DocPage } from '../../data/docsData';
import { DocSection } from './layout';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, RefreshCw, X, Check, CheckCheck, Lightbulb } from 'lucide-react';

interface Props { page: DocPage; }

const syncSteps = [
  { title: 'Send a Message', desc: 'Compose and dispatch a text segment using NOLA SMS Pro.' },
  { title: 'Open Conversations Tab', desc: 'In the left sidebar of your GoHighLevel dashboard, select the Conversations tab.' },
  { title: 'Locate Recipient Profile', desc: 'Search for the test recipient contact name in the active chat list.' },
  { title: 'Confirm Timeline Appends', desc: 'Confirm the SMS content is appended as an outbound record. A green check icon verifies successful carrier routing.' },
];

export const GhlConversationContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">



      {/* INTRO */}
      <section id="ghl-conversation-intro" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">What this guide covers</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          Synchronize outbound SMS messages and customer replies automatically with GoHighLevel's native conversations timeline to preserve complete audit trails across your team.
        </p>
      </section>

      {/* BEFORE / AFTER COMPARISON */}
      <section id="ghl-conversation-comparison" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Manual tracking vs. native real-time sync</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/20 p-5 dark:border-rose-900/20 dark:bg-rose-950/5">
            <h4 className="mb-3 text-[12px] font-black text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <X className="h-4 w-4" /> Without native sync
            </h4>
            <ul className="space-y-2.5">
              {[
                'Outbox history only exists in the sending app — no visibility for your team.',
                'Copy/paste message bodies into client profiles manually after every send.',
                'Support agents send duplicate replies due to tab blindspots.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-600 dark:text-slate-400">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400 dark:bg-rose-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/20 p-5 dark:border-emerald-900/20 dark:bg-emerald-950/5 shadow-sm">
            <h4 className="mb-3 text-[12px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Check className="h-4 w-4" /> With NOLA SMS Pro sync
            </h4>
            <ul className="space-y-2.5">
              {[
                'Background worker pushes sent messages to HighLevel within seconds.',
                'Messages automatically append to the active contact conversation timeline.',
                'All agents see the exact customer thread — no duplicates, no blindspots.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-800 dark:text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PREREQUISITES */}
      <section id="ghl-conversation-prerequisites" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Prerequisites</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <MessageSquare className="h-4 w-4" />, label: 'GHL Permissions', detail: 'Marketplace scopes must include conversation write and read access.' },
            { icon: <RefreshCw className="h-4 w-4" />, label: 'Active Integration', detail: 'An active location API connection is required for background sync.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/30">
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100/50 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                {item.icon}
              </div>
              <div>
                <p className="text-[13.5px] font-black text-slate-900 dark:text-white">{item.label}</p>
                <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SYNC VERIFICATION STEPS */}
      <section id="ghl-conversation-sync-steps" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Verify sync is working</h2>
        <div className="space-y-4">
          {syncSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800/80 dark:bg-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md group">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 text-[11px] font-black border border-slate-200 dark:border-slate-700 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <p className="text-[15px] font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HEALTH TIPS */}
      <section id="ghl-conversation-health" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Sync health tips</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Deduplication', tip: 'NOLA SMS Pro applies a unique message ID deduplication index to avoid duplicate logs when re-sending a failed message.' },
            { title: 'Sync delay', tip: 'Most timelines update in 2–5 seconds. If logs do not appear, verify your subaccount connection token is not expired in Settings.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] px-5 py-4 shadow-sm">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-[13.5px] font-black text-blue-900 dark:text-white mb-0.5">{item.title}</p>
                <p className="text-[13px] leading-relaxed text-slate-700 dark:text-blue-200">{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS */}
      <section id="ghl-conversation-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            All outgoing text logs synchronize immediately to the central HighLevel outbox, providing your sales and support teams with a single source of truth.
          </p>
        </div>
      </section>


    </div>
  );
};

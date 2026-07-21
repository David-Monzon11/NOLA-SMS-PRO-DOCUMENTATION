import React from 'react';
import type { DocPage } from '../../data/docsData';
import { History, Lightbulb, CheckCheck, Filter, MessageSquare, List, RefreshCw } from 'lucide-react';

interface Props { page: DocPage; }

const statusLegend = [
  {
    badge: 'Sending',
    dot: 'bg-amber-500',
    desc: 'Message is queued on the backend and currently being transmitted to carrier networks. Wait a few moments for verification.',
  },
  {
    badge: 'Sent',
    dot: 'bg-blue-500',
    desc: 'Successfully accepted by carrier networks. Awaiting physical mobile handset confirmation.',
  },
  {
    badge: 'Delivered',
    dot: 'bg-emerald-500',
    desc: 'Handset confirmed. The message has been successfully received on the customer’s phone.',
  },
  {
    badge: 'Failed',
    dot: 'bg-rose-500',
    desc: 'Delivery aborted. Click the message row to inspect the exact failure reason (e.g. invalid number formatting or insufficient credits).',
  },
];

const auditTracks = [
  {
    icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    title: 'Direct Chat Outbox Timeline',
    desc: 'Select any contact in the sidebar. Outbound message bubbles appear chronologically in the chat feed timeline, labeled with active delivery status tags.'
  },
  {
    icon: <List className="h-5 w-5 text-purple-500" />,
    title: 'Bulk Messages Feed',
    desc: 'Expand the Bulk Messages tree in the sidebar. Clicking any campaign loads its summary dashboard in the composer, detailing total, sent, failed, and skipped statistics.'
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-emerald-500" />,
    title: 'Automated Status Synchronization',
    desc: 'Outbox logs sync status receipts automatically in the background. Direct chat feeds support pull-to-refresh to fetch updates instantly.'
  }
];

const auditSteps = [
  { title: 'Locate Conversations', desc: 'Use the left sidebar search or expand the Direct/Bulk Message trees to find a past conversation.' },
  { title: 'Open Thread Details', desc: 'Click the contact name or bulk campaign row to load logs inside the active outbox pane.' },
  { title: 'Check Delivery Receipts', desc: 'Observe the color-coded status badges next to message logs.' },
  { title: 'Troubleshoot Failures', desc: 'For undelivered rows, click the message bubble to open the diagnostic window displaying error responses.' },
];

export const MessageHistoryContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">

      {/* INTRO */}
      <section id="history-intro" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Outbox &amp; message history overview</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          NOLA SMS Pro logs all outbound text campaigns. Rather than hosting history on a detached logs page, message status history is integrated directly inside your active chat timelines and bulk campaign feeds.
        </p>
      </section>

      {/* THREE AUDIT CAPABILITIES */}
      <section id="history-audit-tracks" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">How history is logged</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {auditTracks.map((item) => (
            <div key={item.title} className="premium-card flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  {item.icon}
                </div>
                <h3 className="text-[14px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATUS LEGEND */}
      <section id="history-status-legend" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Delivery status reference</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">Every outbound SMS displays one of four real-time status badges:</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {statusLegend.map((item) => (
            <div key={item.badge} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#111827] shadow-sm flex items-start gap-3">
              <span className={`mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
              <div>
                <p className="text-[13.5px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">{item.badge}</p>
                <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/40 border-l-4 border-l-blue-500 dark:border-l-blue-600 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] p-6 shadow-sm mt-4">
          <div className="flex items-start gap-2.5">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-250">
              Historical logs are cached locally to support fast offline browsing. If outbox updates appear delayed, pull the chat feed down or wait a minute for background tasks to refresh.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIT STEPS */}
      <section id="history-audit-steps" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Auditing past campaigns</h2>
        <div className="space-y-4">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800/80 dark:bg-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md group">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 text-[11px] font-black border border-slate-300 dark:border-slate-700 mt-0.5">
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

      {/* SUCCESS */}
      <section id="history-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            Operators can audit all outbox logs from within GHL synced direct chat panels or bulk message groups, ensuring full visibility over delivery receipts and billing transparency.
          </p>
        </div>
      </section>

    </div>
  );
};

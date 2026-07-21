import React from 'react';
import type { DocPage } from '../../data/docsData';
import { Edit3, BookOpen, Tag, FolderOpen, AlertTriangle, CheckCheck, Play, ArrowUpRight, Smartphone } from 'lucide-react';

interface Props { page: DocPage; }

const createSteps = [
  { n: 1, title: 'Open Templates Panel', desc: 'Select Templates from the home dashboard navigation menu.' },
  { n: 2, title: 'Click Add Template', desc: 'Open the creation modal to create a new custom message layout.' },
  { n: 3, title: 'Set Name & Category', desc: 'Enter a descriptive template title and pick a category (General, Appointments, Transactional, or Marketing).' },
  { n: 4, title: 'Insert Variable Tags', desc: 'Use the Variables helper to insert tags like {{contact.first_name}} or {{company.name}} to personalize your SMS content.' },
  { n: 5, title: 'Preview Phone Rendering', desc: 'Check the real-time phone preview mockup to see how variables resolve using a mock contact (John Santos).' },
  { n: 6, title: 'Save Template', desc: 'Click Save. The template is stored and immediately available inside the outbox composer.' },
];

const quickSendSteps = [
  { n: 1, title: 'Click Quick Send Icon', desc: 'Click the Send (paper airplane) icon next to any template in your list.' },
  { n: 2, title: 'Choose Contact', desc: 'Search for and select a target recipient from your synced list.' },
  { n: 3, title: 'Verify Resolved Content', desc: 'Review the personalized preview. Placeholders are auto-filled.' },
  { n: 4, title: 'Send Instantly', desc: 'Click Send to dispatch the message without opening the full outbox composer.' },
];

const bestPractices = [
  {
    icon: <Tag className="h-4 w-4" />,
    title: 'Placeholders & Interpolation',
    desc: 'Always use standard bracket notation (e.g. {{contact.first_name}}) so the platform can populate custom customer data dynamically.',
  },
  {
    icon: <FolderOpen className="h-4 w-4" />,
    title: 'Use Category Filters',
    desc: 'Organize custom templates by context to help agents find the right reply layout in seconds during live customer interactions.',
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    title: 'Pre-built Blueprints',
    desc: 'Leverage NOLA’s 12 pre-built templates for appointments, review requests, and transactional alerts to start campaigns instantly.',
  },
];

export const MessageTemplatesContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">

      {/* INTRO */}
      <section id="templates-intro" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message templates overview</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          Templates let you build and organize reusable text messages to standardise client interactions, maintain formatting compliance, and eliminate repetitive typing.
        </p>
      </section>

      {/* THREE CAPABILITY COLUMNS */}
      <section id="templates-best-practices" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Key capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {bestPractices.map((item) => (
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

      {/* TWO-TRACK: CREATE + QUICK SEND */}
      <section id="templates-tracks" className="space-y-8">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Template workflows</h2>
        <div className="grid gap-6 lg:grid-cols-2">

          {/* CREATE TRACK */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827] overflow-hidden shadow-sm">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border-b border-slate-200 px-5 py-4 dark:bg-slate-900/30 dark:border-slate-800">
              <Edit3 className="h-4 w-4 text-slate-500" />
              <p className="text-[13.5px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Create a template</p>
            </div>
            <div className="p-5 space-y-4">
              {createSteps.map((step) => (
                <div key={step.n} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-black mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight">{step.title}</p>
                    <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK SEND TRACK */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111827] overflow-hidden shadow-sm">
            <div className="flex items-center gap-2.5 bg-slate-50/50 border-b border-slate-200 px-5 py-4 dark:bg-slate-900/30 dark:border-slate-800">
              <Smartphone className="h-4 w-4 text-slate-500" />
              <p className="text-[13.5px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Quick Send Workflow</p>
            </div>
            <div className="p-5 space-y-4">
              {quickSendSteps.map((step) => (
                <div key={step.n} className="flex gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-black mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight">{step.title}</p>
                    <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3.5 rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3 dark:border-amber-900/40 dark:bg-amber-950/10 my-1">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                <p className="text-[12.5px] leading-relaxed text-amber-800 dark:text-amber-300 font-semibold">
                  Templates must contain variables (e.g. contact name or company) to satisfy pre-flight formatting checks. Generic or blank contents cannot be saved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section id="templates-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            Saved templates appear instantly in your compose outbox dropdown, allowing your team to send consistent, personalized texts in single or bulk compose views.
          </p>
        </div>
      </section>

    </div>
  );
};

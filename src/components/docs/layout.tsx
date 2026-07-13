import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export const DocSection: React.FC<{
  id: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, children, className = '' }) => (
  <section
    id={id}
    className={`doc-section scroll-mt-[304px] lg:scroll-mt-[190px] ${className}`}
  >
    {children}
  </section>
);

export const DocSectionHeading: React.FC<{
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ eyebrow, children, className = '' }) => (
  <div className={`mb-6 ${className}`}>
    {eyebrow && (
      <p className="doc-eyebrow">{eyebrow}</p>
    )}
    <h2 className="doc-section-title">{children}</h2>
  </div>
);

export const DocBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`doc-body ${className}`}>{children}</p>
);

export const SplitLayout: React.FC<{
  children: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  className?: string;
}> = ({ children, visual, reverse = false, className = '' }) => (
  <div
    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''} ${className}`}
  >
    <div className="min-w-0">{children}</div>
    <div className="min-w-0">{visual}</div>
  </div>
);

export const HighlightPills: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-5 flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="badge-accent"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#1F5AAE] dark:bg-[#72A8FF]" />
        {item}
      </li>
    ))}
  </ul>
);

export const StatGrid: React.FC<{
  items: { label: string; value: string }[];
}> = ({ items }) => (
  <dl className="mt-6 grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item.label}
        className="rounded-xl border border-[#D7E7FA] bg-white px-4 py-3 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/3"
      >
        <dt className="doc-eyebrow !mb-0.5">{item.label}</dt>
        <dd className="text-[14px] font-bold text-[#0B2E63] dark:text-white">
          {item.value}
        </dd>
      </div>
    ))}
  </dl>
);

export const InlineCallout: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mt-6 rounded-xl border-l-4 border-[#1F5AAE] bg-gradient-to-r from-[#E8F3FF]/70 to-white/10 px-5 py-4 dark:border-[#72A8FF] dark:from-[#102B4F]/40 shadow-sm shadow-[#184B8F]/3">
    <p className="doc-eyebrow !mb-1.5">{title}</p>
    <p className="doc-body !mb-0 !leading-relaxed text-[13.5px]">{children}</p>
  </div>
);

/* NEW: Reusable Feature Card Component */
export const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  ctaText?: string;
}> = ({ title, description, icon, onClick, ctaText = 'Preview' }) => {
  const CardWrapper = onClick ? 'button' : 'div';
  return (
    <CardWrapper
      {...(onClick ? { type: 'button', onClick } : {})}
      className={`text-left premium-card group flex flex-col h-full w-full ${onClick ? 'cursor-pointer' : ''}`}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#1F5AAE] transition-colors group-hover:bg-[#1F5AAE] group-hover:text-white dark:bg-[#102B4F] dark:text-[#72A8FF] dark:group-hover:bg-[#72A8FF] dark:group-hover:text-[#07111F]">
          {icon}
        </div>
      )}
      <h3 className="text-[15px] font-black text-[#071A33] group-hover:text-[#1F5AAE] dark:text-white dark:group-hover:text-[#72A8FF]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-5 text-[#425B7D] dark:text-slate-350">
        {description}
      </p>
      {onClick && (
        <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#1F5AAE] dark:text-[#72A8FF]">
          {ctaText} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </CardWrapper>
  );
};

/* NEW: Reusable Interactive Comparison Table */
export const ComparisonTable: React.FC<{
  title: string;
  traditionalTitle: string;
  nolaTitle: string;
  traditionalItems: string[];
  nolaItems: string[];
}> = ({ title, traditionalTitle, nolaTitle, traditionalItems, nolaItems }) => (
  <div className="my-6">
    {title && <h3 className="mb-4 text-[14px] font-black text-[#071A33] dark:text-white uppercase tracking-wider">{title}</h3>}
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-rose-100 bg-rose-50/20 p-5 dark:border-rose-950/20 dark:bg-rose-950/5">
        <h4 className="mb-3 text-[13px] font-black text-rose-700 dark:text-rose-455 uppercase tracking-wider flex items-center gap-2">
          <X className="h-4 w-4" /> {traditionalTitle}
        </h4>
        <ul className="space-y-2.5">
          {traditionalItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-600 dark:text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400 dark:bg-rose-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-emerald-150 bg-emerald-50/20 p-5 dark:border-emerald-950/25 dark:bg-emerald-950/5 shadow-sm shadow-[#1F5AAE]/3">
        <h4 className="mb-3 text-[13px] font-black text-emerald-700 dark:text-emerald-450 uppercase tracking-wider flex items-center gap-2">
          <Check className="h-4 w-4" /> {nolaTitle}
        </h4>
        <ul className="space-y-2.5">
          {nolaItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-800 dark:text-slate-300">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* NEW: Workflow Flowchart / Diagram Block */
export const WorkflowDiagram: React.FC<{
  steps: { title: string; desc: string }[];
}> = ({ steps }) => (
  <div className="my-6">
    <div className="relative">
      <div className="absolute left-[15px] top-0 hidden h-full w-0.5 bg-[#D7E7FA] dark:bg-[#183354] lg:block" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-xl border border-[#D7E7FA] bg-white p-4 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/3 transition-colors hover:border-[#4F8EF7]">
            <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5AAE] text-[10px] font-black text-white dark:bg-[#72A8FF] dark:text-[#07111F]">
              {index + 1}
            </span>
            <h4 className="text-[13px] font-black text-[#0B2E63] dark:text-white">{step.title}</h4>
            <p className="mt-1 text-[12px] leading-5 text-[#5D7596] dark:text-slate-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

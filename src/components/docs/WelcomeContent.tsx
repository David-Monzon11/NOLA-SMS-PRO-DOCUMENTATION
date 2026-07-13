import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CreditCard,
  FileText,
  History,
  Lightbulb,
  Settings,
  ShieldCheck,
  Users,
  ArrowRightLeft,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { docsData } from '../../data/docsData';
import type { DocPage } from '../../data/docsData';
import { ScreenshotPlaceholder } from '../ScreenshotPlaceholder';
import {
  DocBody,
  DocSection,
  DocSectionHeading,
  SplitLayout,
  InlineCallout,
  FeatureCard,
  ComparisonTable,
  WorkflowDiagram,
} from './layout';
import { IllustrationFrame } from './IllustrationFrame';

const welcomeFeatureNote = 'You do not need to download a separate desktop or mobile app.';

interface WelcomeFeature {
  title: string;
  description: string;
  docId: string;
  filename: string;
  alt: string;
}

const welcomeFeatures: WelcomeFeature[] = [
  {
    title: 'Zero Data Latency (CRM Sync)',
    description: 'Avoid export delay and syncing failures. Use contact lists natively matching the connected HighLevel CRM sub-account.',
    docId: 'contacts',
    filename: '/images/docs/contacts-list.png',
    alt: 'Contacts database sync illustration.',
  },
  {
    title: 'Consistent Messaging Tone',
    description: 'Ensure support replies are standardized and free of spelling errors by saving and inserting text templates.',
    docId: 'templates',
    filename: '/images/docs/templates-list.png',
    alt: 'Templates list illustration.',
  },
  {
    title: 'Trust & Deliverability Boost',
    description: 'Stop using anonymous numbers. Mask texts with an approved business Sender ID to improve customer open rates.',
    docId: 'sender-id',
    filename: '/images/docs/sender-id-default.png',
    alt: 'Sender ID comparison mockup.',
  },
  {
    title: 'Outage Prevention (Credits Tracking)',
    description: 'Never lose connection with your clients. Monitor live credit balances and submit refill requests dynamically.',
    docId: 'sms-credits',
    filename: '/images/docs/credits-balance.png',
    alt: 'Credits check mockup.',
  },
  {
    title: 'Outbound Gateway Auditing',
    description: 'Check receipt states instantly. Review live logs displaying carrier-level Sending, Sent, or Failed reports.',
    docId: 'message-history',
    filename: '/images/docs/message-history-list.png',
    alt: 'Message history logs illustration.',
  },
  {
    title: 'Billing Access Controls',
    description: 'Limit configurations. Set administrative profile settings, location links, and balance notifications.',
    docId: 'settings',
    filename: '/images/docs/settings-profile.png',
    alt: 'Profile configurations illustration.',
  },
];

const welcomeFeaturesGrid: WelcomeFeature[] = [
  ...welcomeFeatures,
  {
    title: 'Shortcuts Home Dashboard',
    description: 'Monitor active credits, delivery charts, operational alerts, and navigation shortcuts from a single overview.',
    docId: 'dashboard-overview',
    filename: '/images/docs/dashboard-overview-home.png',
    alt: 'Overview dashboard mockup.',
  },
  {
    title: 'Dynamic SMS Composer',
    description: 'Draft custom copy or load dynamic templates to dispatch messages to local receivers securely.',
    docId: 'first-sms-checklist',
    filename: '/images/docs/compose-first-sms.png',
    alt: 'Composer outbox view mockup.',
  },
];

const coreModules = [
  { icon: <Users className="h-5 w-5" />, title: 'Contacts (CRM Sync)', desc: 'Direct mapping of HighLevel contact lists' },
  { icon: <FileText className="h-5 w-5" />, title: 'Templates (Copy Standards)', desc: 'Pre-approved copy drafts with variables' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Sender IDs (Branded Outbox)', desc: 'Custom text headers registered with local carriers' },
  { icon: <CreditCard className="h-5 w-5" />, title: 'SMS Credits (Energy Meter)', desc: 'Outbound credit settling and refill request queue' },
  { icon: <History className="h-5 w-5" />, title: 'Message History (Carrier Logs)', desc: 'Audit trails reporting live receipt reports' },
  { icon: <Settings className="h-5 w-5" />, title: 'Settings (Admin Center)', desc: 'Access bounds, notification rules, and sub-accounts link' },
];

// OVERHAULED: Structured step flow representing the user's daily in-app messaging journey
const messagingJourneySteps = [
  { title: '1. Contact Search', desc: 'Pull verified local mobile profiles directly from CRM.' },
  { title: '2. Content Compose', desc: 'Select copy drafts or interpolate dynamic text fields.' },
  { title: '3. Header Branding', desc: 'Apply approved custom Sender ID masks to outbound slots.' },
  { title: '4. Credit Validation', desc: 'Inspect characters length and settle credit costs automatically.' },
  { title: '5. Delivery Tracking', desc: 'Monitor status returns for receipt confirmation.' },
];

const IntegrationFlow: React.FC = () => (
  <div className="rounded-2xl border border-[#D7E7FA] bg-[#F4F9FF] p-6 dark:border-[#183354] dark:bg-[#0B1627] flex flex-col items-center justify-center gap-4 text-center">
    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
      <div className="rounded-xl border border-[#BCD7F5] bg-white px-4 py-3 dark:border-[#1F3D68] dark:bg-[#07111F] text-xs font-bold text-[#0B2E63] dark:text-white shadow-sm flex flex-col items-center gap-1.5 min-w-[125px]">
        <Smartphone className="h-4 w-4 text-[#1F5AAE] dark:text-[#72A8FF]" />
        <span>HighLevel CRM</span>
        <span className="text-[10px] text-slate-400 font-medium">Sub-Account</span>
      </div>
      <ArrowRightLeft className="h-4 w-4 text-[#8AA3C1]" />
      <div className="rounded-xl border border-blue-400 bg-blue-50/50 px-5 py-4 dark:border-blue-900/40 dark:bg-blue-950/20 text-sm font-black text-[#1F5AAE] dark:text-[#72A8FF] shadow-md shadow-blue-550/5 flex flex-col items-center gap-2 min-w-[170px]">
        <div className="w-8 h-8 rounded-lg bg-[#1F5AAE] flex items-center justify-center text-white font-extrabold text-[12px] dark:bg-[#72A8FF] dark:text-[#07111F]">
          N
        </div>
        <span>NOLA SMS Pro</span>
        <span className="text-[10px] text-blue-700 dark:text-blue-300 font-bold uppercase tracking-wider">Embedded App</span>
      </div>
      <ArrowRightLeft className="h-4 w-4 text-[#8AA3C1]" />
      <div className="rounded-xl border border-emerald-350 bg-white px-4 py-3 dark:border-emerald-900/35 dark:bg-[#07111F] text-xs font-bold text-[#0B2E63] dark:text-white shadow-sm flex flex-col items-center gap-1.5 min-w-[125px]">
        <Terminal className="h-4 w-4 text-emerald-600" />
        <span>Carriers (SMS)</span>
        <span className="text-[10px] text-slate-400 font-medium">Carrier Gateway</span>
      </div>
    </div>
    <p className="text-[12px] text-[#5D7596] dark:text-slate-400 max-w-md leading-relaxed mt-2">
      Direct connection maps your CRM contacts, registers custom Sender IDs, and debits credits, synchronizing outbound message status logs inside your sub-account.
    </p>
  </div>
);

// NEW: ecosystem diagram showing module interaction
const ModuleEcosystem: React.FC = () => (
  <div className="rounded-2xl border border-blue-200/50 bg-[#F4F9FF] p-6 dark:border-blue-900/25 dark:bg-[#0B1627] flex flex-col justify-center gap-4 text-center">
    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">Module Ecosystem Map</span>
    <div className="grid gap-3 grid-cols-2 md:grid-cols-5 text-[11px] font-bold text-slate-800 dark:text-slate-200">
      <div className="rounded-xl bg-white border border-[#D7E7FA] p-3 dark:bg-[#07111F] dark:border-slate-800 flex flex-col items-center gap-1.5 shadow-sm">
        <span className="text-[#1F5AAE] dark:text-[#72A8FF]">1. Contacts</span>
        <span className="text-[9px] text-slate-400 font-medium font-mono">Audience Source</span>
      </div>
      <div className="rounded-xl bg-white border border-[#D7E7FA] p-3 dark:bg-[#07111F] dark:border-slate-800 flex flex-col items-center gap-1.5 shadow-sm">
        <span className="text-[#1F5AAE] dark:text-[#72A8FF]">2. Templates</span>
        <span className="text-[9px] text-slate-400 font-medium font-mono">Consistent Copy</span>
      </div>
      <div className="rounded-xl bg-white border border-[#D7E7FA] p-3 dark:bg-[#07111F] dark:border-slate-800 flex flex-col items-center gap-1.5 shadow-sm">
        <span className="text-[#1F5AAE] dark:text-[#72A8FF]">3. Sender IDs</span>
        <span className="text-[9px] text-slate-400 font-medium font-mono">Branded Mask</span>
      </div>
      <div className="rounded-xl bg-white border border-[#D7E7FA] p-3 dark:bg-[#07111F] dark:border-slate-800 flex flex-col items-center gap-1.5 shadow-sm">
        <span className="text-[#1F5AAE] dark:text-[#72A8FF]">4. SMS Credits</span>
        <span className="text-[9px] text-slate-400 font-medium font-mono">Gateway Fuel</span>
      </div>
      <div className="rounded-xl bg-white border border-[#D7E7FA] p-3 dark:bg-[#07111F] dark:border-slate-800 flex flex-col items-center gap-1.5 shadow-sm col-span-2 md:col-span-1">
        <span className="text-[#1F5AAE] dark:text-[#72A8FF]">5. History</span>
        <span className="text-[9px] text-slate-400 font-medium font-mono">Real-time Logs</span>
      </div>
    </div>
    <p className="text-[11.5px] text-[#5D7596] dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
      Contacts provide local keys $\rightarrow$ Templates apply copy layouts $\rightarrow$ Senders mask outgoing blocks $\rightarrow$ Credits settle carrier routing $\rightarrow$ History logs the final receipt records.
    </p>
  </div>
);

// NEW: problems solved grid
const ProblemsSolved: React.FC = () => (
  <div className="grid gap-3 sm:grid-cols-3">
    <div className="rounded-xl border border-red-100 bg-red-50/5 p-4 dark:border-red-950/20 dark:bg-red-950/5">
      <h4 className="text-[12px] font-black text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5">Tab Fatigue</h4>
      <p className="text-[12px] leading-5 text-[#5D7596] dark:text-slate-400">Eliminates switching between CRM databases, contact spreadsheets, and separate SMS billing portals.</p>
    </div>
    <div className="rounded-xl border border-red-100 bg-red-50/5 p-4 dark:border-red-950/20 dark:bg-red-950/5">
      <h4 className="text-[12px] font-black text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5">Carrier Rejections</h4>
      <p className="text-[12px] leading-5 text-[#5D7596] dark:text-slate-400">Halts address blocks by enforcing compliant local 11-digit prefixes (`09xxxxxxxx`) natively on CRM sync.</p>
    </div>
    <div className="rounded-xl border border-red-100 bg-red-50/5 p-4 dark:border-red-950/20 dark:bg-red-950/5">
      <h4 className="text-[12px] font-black text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5">Anonymity Blocks</h4>
      <p className="text-[12px] leading-5 text-[#5D7596] dark:text-slate-400">Replaces suspicious random number masks with verified, carrier-registered Sender IDs that customers trust.</p>
    </div>
  </div>
);

// NEW: target user profiles panel
const TargetPersonas: React.FC = () => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-6">
    {[
      { role: 'Agencies', desc: 'Deploy secure, local communication spaces across customer sub-accounts.' },
      { role: 'Support Desks', desc: 'Reply to client inquiries instantly directly next to CRM conversation threads.' },
      { role: 'Marketing Ops', desc: 'Schedule consistent promotional announcements using template copies.' },
      { role: 'Sales Teams', desc: 'Accelerate follow-ups with inline contact validation and credit balance indicators.' },
    ].map((item) => (
      <div key={item.role} className="rounded-xl border border-[#D7E7FA] bg-white p-4 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/2">
        <h4 className="text-[13px] font-black text-[#0B2E63] dark:text-white mb-1">{item.role}</h4>
        <p className="text-[12px] leading-5 text-[#5D7596] dark:text-slate-400">{item.desc}</p>
      </div>
    ))}
  </div>
);

const WelcomeFeatureModal: React.FC<{
  activeFeature: WelcomeFeature | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ activeFeature, onClose, onPrevious, onNext }) => {
  useEffect(() => {
    if (!activeFeature) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeFeature, onClose]);

  if (!activeFeature) return null;

  const featurePage = docsData.find((item) => item.id === activeFeature.docId);
  const screenshot = featurePage?.screenshots?.[0] ?? {
    filename: activeFeature.filename,
    alt: activeFeature.alt,
    caption: activeFeature.description,
  };
  const notesAndTips = [
    ...(featurePage?.tips ?? []),
    ...(featurePage?.notes ?? []),
    ...(featurePage?.warnings ?? []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111F]/70 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close" />
      <article className="relative z-10 flex h-[92vh] w-full max-w-[980px] flex-col overflow-hidden rounded-3xl border border-[#D7E7FA] bg-[#F8FBFF] shadow-2xl dark:border-[#183354] dark:bg-[#07111F]">
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 lg:px-10">
          <p className="doc-eyebrow mb-2">Feature Preview</p>
          <h2 className="text-[30px] font-black leading-tight text-[#071A33] dark:text-white md:text-[36px]">
            {activeFeature.title}
          </h2>
          <p className="mt-3 doc-body">{featurePage?.purpose ?? activeFeature.description}</p>
          <div className="mt-6">
            <ScreenshotPlaceholder caption={screenshot.caption} alt={screenshot.alt} filename={screenshot.filename} variant="Feature Preview" mode="large" height="lg" />
          </div>
          {featurePage?.steps && featurePage.steps.length > 0 && (
            <section className="mt-8">
              <h3 className="mb-4 text-[16px] font-black text-[#0B2E63] dark:text-white uppercase tracking-wider">How it works</h3>
              <ol className="grid gap-3 sm:grid-cols-2">
                {featurePage.steps.slice(0, 4).map((step, index) => (
                  <li key={step} className="flex gap-3 rounded-xl border border-[#D7E7FA] bg-white p-4 dark:border-[#183354] dark:bg-[#0B1627]">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#E8F3FF] text-[11px] font-black text-[#1F5AAE] dark:bg-[#102B4F] dark:text-[#9AC3FF]">
                      {index + 1}
                    </span>
                    <p className="text-[13px] leading-relaxed text-[#425B7D] dark:text-slate-300">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          {notesAndTips.length > 0 && (
            <section className="mt-6 rounded-xl border border-[#D7E7FA] bg-white p-5 dark:border-[#183354] dark:bg-[#0B1627]">
              <div className="mb-3 flex items-center gap-2 text-[#1F5AAE] dark:text-[#72A8FF]">
                <Lightbulb className="h-4 w-4" />
                <h3 className="doc-eyebrow !mb-0">System Notes</h3>
              </div>
              <div className="space-y-2 text-[13px] leading-6 text-[#425B7D] dark:text-slate-350">
                {notesAndTips.map((note, index) => (
                  <p key={`${activeFeature.docId}-note-${index}`}>{note}</p>
                ))}
                <p className="text-[11px] font-semibold text-slate-400">{welcomeFeatureNote}</p>
              </div>
            </section>
          )}
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D7E7FA] bg-white px-6 py-4 dark:border-[#183354] dark:bg-[#0B1627] sm:px-8">
          <button type="button" onClick={onPrevious} className="rounded-xl border border-[#BCD7F5] px-4 py-2.5 text-[13px] font-black text-[#1F5AAE] dark:border-[#1F3D68] dark:text-[#72A8FF] hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            Previous
          </button>
          <div className="flex items-center gap-3">
            <button type="button" onClick={onClose} className="rounded-xl border border-[#D7E7FA] px-4 py-2.5 text-[13px] font-black text-[#526A8B] dark:border-[#1F3D68] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              Close
            </button>
            <button type="button" onClick={onNext} className="inline-flex items-center gap-2 rounded-xl bg-[#1F5AAE] px-4 py-2.5 text-[13px] font-black text-white dark:bg-[#72A8FF] dark:text-[#07111F] hover:opacity-90 transition-opacity">
              Next <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export const WelcomeContent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFeature = activeIndex === null ? null : welcomeFeaturesGrid[activeIndex];

  return (
    <div className="space-y-16 pb-8">
      {/* 1. WELCOME & OVERVIEW */}
      <DocSection id="welcome-overview" className="mb-0">
        <DocSectionHeading eyebrow="Product Overview">Introducing NOLA SMS Pro</DocSectionHeading>
        <SplitLayout
          visual={
            <div className="space-y-6">
              <IllustrationFrame
                type="desktop"
                title="Embedded CRM Application Layout"
                caption="Enables customer messaging directly next to CRM conversation histories."
                alt="NOLA SMS Pro dashboard preview"
              />
              <IntegrationFlow />
            </div>
          }
        >
          <DocBody>
            NOLA SMS Pro is a native communication portal designed to embed SMS sending directly into location sub-accounts on HighLevel CRM.
          </DocBody>
          <DocBody>
            By linking directly into your CRM, NOLA maps contact indexes, reusable copywriting layouts, branded sending headers, and carrier tracking logs inside one dashboard, removing operational latency for support, sales, and marketing teams.
          </DocBody>
          
          <h3 className="text-[13px] font-black text-[#0B2E63] dark:text-white uppercase tracking-wider mb-3 mt-6">Core Problems Solved</h3>
          <ProblemsSolved />
        </SplitLayout>
      </DocSection>

      {/* 2. ABOUT NOLA SMS PRO */}
      <DocSection id="welcome-about">
        <DocSectionHeading eyebrow="Design Philosophy">About NOLA SMS Pro</DocSectionHeading>
        <SplitLayout
          reverse
          visual={
            <div className="space-y-4">
              <IllustrationFrame
                type="product"
                title="Direct Location Embedding"
                caption="Provides a unified CRM panel workspace, preventing login hopping."
                alt="NOLA SMS Pro inside HighLevel"
              />
              <ModuleEcosystem />
            </div>
          }
        >
          <DocBody>
            Operating modern messaging workspaces requires administrative controls and data synchronization. We designed NOLA SMS Pro to resolve context dispersion during team outreach.
          </DocBody>
          <DocBody>
            Instead of routing client data through external API nodes, NOLA syncs directly, retaining location security controls and preventing manual export leaks.
          </DocBody>
          <InlineCallout title="Product Philosophy">
            Outreach is a context journey. We focus on administrative control: allowing teams to compose, audit carrier queues, and top up credits inside their workspace.
          </InlineCallout>
          
          <h3 className="text-[13px] font-black text-[#0B2E63] dark:text-white uppercase tracking-wider mb-3 mt-6">Target Operations</h3>
          <TargetPersonas />
        </SplitLayout>
      </DocSection>

      {/* 3. WHAT MAKES US DIFFERENT */}
      <DocSection id="welcome-different">
        <DocSectionHeading eyebrow="Performance Advantages">What Makes NOLA SMS Pro Different</DocSectionHeading>
        <DocBody>
          Traditional tools require manual contact exports, separate logins, and anonymous sending paths. NOLA SMS Pro routes everything through native CRM nodes.
        </DocBody>
        <ComparisonTable
          title="Operational Workflow Comparison"
          traditionalTitle="Standard SMS Tools"
          nolaTitle="NOLA SMS Pro Platform"
          traditionalItems={[
            'Exporting contact records to spreadsheets for external uploading.',
            'Leaving the CRM tab to check credit balances or request renewals.',
            'Navigating external outboxes to review receipt statuses.',
            'Manual prefix conversions leading to carrier routing rejections.'
          ]}
          nolaItems={[
            'Fetching validated CRM contact databases instantly in real-time.',
            'Displaying billing packages and top-up forms inside settings.',
            'Checking real-time carrier delivery receipt reports inside logs.',
            'Automatic formatting of local 11-digit prefixes on synchronization.'
          ]}
        />
      </DocSection>

      {/* 4. CORE MODULES */}
      <DocSection id="welcome-core-modules">
        <DocSectionHeading eyebrow="Ecosystem Modules">Core Modules</DocSectionHeading>
        <DocBody>Our six utility directories link contacts, templates, routing headers, and audit trails to fuel continuous messaging operations.</DocBody>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreModules.map((module) => (
            <div key={module.title} className="flex gap-3 rounded-2xl border border-[#D7E7FA] bg-white p-5 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#1F5AAE] dark:bg-[#102B4F] dark:text-[#72A8FF]">
                {module.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-black text-[#0B2E63] dark:text-white">{module.title}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#5D7596] dark:text-slate-400">{module.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      {/* 5. THE NOLA SMS PRO EXPERIENCE */}
      <DocSection id="welcome-experience">
        <DocSectionHeading eyebrow="In-App Lifecycle">The NOLA SMS Pro Experience</DocSectionHeading>
        <DocBody>Follow the operational workflow representing the daily messaging cycle of a support agent using the product.</DocBody>
        <WorkflowDiagram steps={messagingJourneySteps} />
      </DocSection>

      {/* 6. WHY USE NOLA SMS PRO */}
      <DocSection id="welcome-why">
        <DocSectionHeading eyebrow="ROI & Business Value">Why Use NOLA SMS Pro?</DocSectionHeading>
        <DocBody>
          Explore the business value of native contact syncs, branded routing headers, and outbox validation. Click any feature card below to see an interactive layout mockup.
        </DocBody>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {welcomeFeaturesGrid.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              onClick={() => setActiveIndex(index)}
              ctaText="Interactive Schema"
            />
          ))}
        </div>
      </DocSection>

      <WelcomeFeatureModal
        activeFeature={activeFeature}
        onClose={() => setActiveIndex(null)}
        onPrevious={() => setActiveIndex((c) => (c === null || c === 0 ? welcomeFeaturesGrid.length - 1 : c - 1))}
        onNext={() => setActiveIndex((c) => (c === null || c === welcomeFeaturesGrid.length - 1 ? 0 : c + 1))}
      />
    </div>
  );
};

export function isWelcomePage(page: DocPage) {
  return [
    'welcome-overview',
    'welcome-about',
    'welcome-different',
    'welcome-core-modules',
    'welcome-experience',
    'welcome-why',
    'welcome',
  ].includes(page.id);
}

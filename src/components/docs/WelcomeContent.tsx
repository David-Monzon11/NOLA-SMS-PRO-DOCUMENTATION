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
  StatGrid,
  InlineCallout,
  FeatureCard,
  ComparisonTable,
  WorkflowDiagram,
  HighlightPills,
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
    title: 'HighLevel Contacts',
    description: 'Use contacts from the connected HighLevel sub-account when choosing SMS recipients.',
    docId: 'contacts',
    filename: '/images/docs/contacts-list.png',
    alt: 'Contacts list inside NOLA SMS Pro.',
  },
  {
    title: 'SMS Templates',
    description: 'Save reusable message wording and insert templates when composing customer texts.',
    docId: 'templates',
    filename: '/images/docs/templates-list.png',
    alt: 'Templates list inside NOLA SMS Pro.',
  },
  {
    title: 'Sender IDs',
    description: 'Send with the default NOLASMSPro sender or request an approved custom Sender ID.',
    docId: 'sender-id',
    filename: '/images/docs/sender-id-default.png',
    alt: 'Sender ID screen showing NOLASMSPro as the default sender.',
  },
  {
    title: 'SMS Credits',
    description: 'Check your balance, request more credits, and review recent credit activity.',
    docId: 'sms-credits',
    filename: '/images/docs/credits-balance.png',
    alt: 'SMS credit balance inside NOLA SMS Pro.',
  },
  {
    title: 'Message History',
    description: 'Track each message after sending with clear Sending, Sent, and Failed statuses.',
    docId: 'message-history',
    filename: '/images/docs/message-history-list.png',
    alt: 'Message History list showing message statuses.',
  },
  {
    title: 'Settings',
    description: 'Review profile details, connected location, notifications, Sender IDs, and credits.',
    docId: 'settings',
    filename: '/images/docs/settings-profile.png',
    alt: 'Profile settings in NOLA SMS Pro.',
  },
  {
    title: 'Dashboard Activity',
    description: 'See SMS credits, recent activity, alerts, and shortcuts from the dashboard home.',
    docId: 'dashboard-overview',
    filename: '/images/docs/dashboard-overview-home.png',
    alt: 'NOLA SMS Pro dashboard home showing credits, activity, alerts, and navigation.',
  },
  {
    title: 'SMS Compose',
    description: 'Send individual or bulk SMS from inside the connected HighLevel location.',
    docId: 'first-sms-checklist',
    filename: '/images/docs/compose-first-sms.png',
    alt: 'Compose screen with one SMS message ready to send.',
  },
];

const coreModules = [
  { icon: <Users className="h-5 w-5" />, title: 'Contacts', desc: 'Search and select HighLevel contacts directly' },
  { icon: <FileText className="h-5 w-5" />, title: 'Templates', desc: 'Save and reuse message templates' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Sender IDs', desc: 'Default or approved custom senders' },
  { icon: <CreditCard className="h-5 w-5" />, title: 'SMS Credits', desc: 'Monitor and manage credit balance' },
  { icon: <History className="h-5 w-5" />, title: 'Message History', desc: 'Track delivery statuses in real time' },
  { icon: <Settings className="h-5 w-5" />, title: 'Settings', desc: 'Configure account and preferences' },
];

const workflowSteps = [
  { title: 'Install', desc: 'Add from HighLevel Marketplace' },
  { title: 'Connect', desc: 'Choose your sub-account location' },
  { title: 'Setup', desc: 'Create or sign in to owner account' },
  { title: 'Send', desc: 'Compose and send your first SMS' },
  { title: 'Track', desc: 'Check delivery in Message History' },
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
  const activeFeature = activeIndex === null ? null : welcomeFeatures[activeIndex];

  return (
    <div className="space-y-16 pb-8">
      {/* 1. WELCOME & OVERVIEW */}
      <DocSection id="welcome-overview" className="mb-0">
        <DocSectionHeading eyebrow="Introduction">Welcome to NOLA SMS Pro</DocSectionHeading>
        <SplitLayout
          visual={
            <div className="space-y-6">
              <IllustrationFrame
                type="desktop"
                title="NOLA SMS Pro Dashboard"
                caption="Integrates natively inside the HighLevel CRM navigation menu."
                alt="NOLA SMS Pro dashboard preview"
              />
              <IntegrationFlow />
            </div>
          }
        >
          <DocBody>
            NOLA SMS Pro is a premium, purpose-built SMS communication gateway designed specifically for location dashboards inside HighLevel CRM.
          </DocBody>
          <DocBody>
            Rather than jumping between third-party communication web apps and your CRM, NOLA maps your contacts, billing package logs, reusable messaging structures, and delivery tracking registers into a unified workspace.
          </DocBody>
          <HighlightPills
            items={['HighLevel Integration', 'Philippine Carrier Mapping', 'Custom Sender IDs', 'SMS credit management', 'Real-time Message Tracking']}
          />
          <StatGrid
            items={[
              { label: 'Integration Layer', value: 'HighLevel Sub-Account Native' },
              { label: 'Carrier Network Routing', value: 'Direct Telecom SMS' },
              { label: 'Audience Focus', value: 'Philippine Agencies, Sales, & Support Teams' },
              { label: 'Core Modules', value: 'Contacts, Templates, Sender IDs, Credits, Status History' },
            ]}
          />
        </SplitLayout>
      </DocSection>

      {/* 2. ABOUT NOLA SMS PRO */}
      <DocSection id="welcome-about">
        <DocSectionHeading eyebrow="Core Philosophy">About NOLA SMS Pro</DocSectionHeading>
        <SplitLayout
          reverse
          visual={
            <IllustrationFrame
              type="product"
              title="Native CRM Embedding"
              caption="Runs directly inside the CRM sub-account without external authentication hops."
              alt="NOLA SMS Pro inside HighLevel"
            />
          }
        >
          <DocBody>
            NOLA SMS Pro was engineered to solve the contact-syncing and tab-switching friction faced by support and marketing teams using HighLevel.
          </DocBody>
          <DocBody>
            By linking your client data natively, you remove CSV export errors and maintain complete message logs side-by-side with your client interaction records.
          </DocBody>
          <InlineCallout title="Product Philosophy">
            We focus on workflow consistency: keeping teams within their CRM interface so they can message clients, check credit balances, and apply branding masks inside one window.
          </InlineCallout>
          
          <div className="mt-6 rounded-2xl border border-[#D7E7FA] bg-white p-5 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/3">
            <h3 className="mb-3 text-[14px] font-black text-[#0B2E63] dark:text-white uppercase tracking-wider">Target Workspaces</h3>
            <ul className="space-y-2.5">
              {[
                'CRM agencies deploying local communication workspaces',
                'Philippine businesses requiring reliable carrier routing',
                'Marketing operations executing transactional campaigns',
                'Support desks dispatching real-time notifications',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#425B7D] dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1F5AAE] dark:bg-[#72A8FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SplitLayout>
      </DocSection>

      {/* 3. WHAT MAKES US DIFFERENT */}
      <DocSection id="welcome-different">
        <DocSectionHeading eyebrow="Differentiators">What Makes NOLA SMS Pro Different</DocSectionHeading>
        <DocBody>
          Traditional SMS extensions require complex carrier credentials, third-party authentication pages, and separate contact managers. NOLA SMS Pro consolidates everything into a single layout.
        </DocBody>
        <ComparisonTable
          title="Workflow Comparison"
          traditionalTitle="Traditional SMS Tools"
          nolaTitle="NOLA SMS Pro Experience"
          traditionalItems={[
            'Exporting contact indexes to CSV and loading to external systems',
            'Leaving HighLevel CRM to check credit balance and request top-ups',
            'Manually logging carrier status reports to check delivery',
            'Complex developer setup required to bind APIs to Locations'
          ]}
          nolaItems={[
            'Synchronized fetching of HighLevel location databases directly',
            'Immediate credit balances and top-up forms in your Settings',
            'Granular Sending, Sent, and Failed status trackers in your workspace',
            'One-click Marketplace authorization via OAuth'
          ]}
        />
      </DocSection>

      {/* 4. CORE MODULES */}
      <DocSection id="welcome-core-modules">
        <DocSectionHeading eyebrow="Product Architecture">Core Modules</DocSectionHeading>
        <DocBody>Six integrated utility sets give you complete command of your customer messaging directly from the navigation menu.</DocBody>
        <div className="mb-6">
          <IllustrationFrame type="desktop" title="Unified Feature Panel" caption="Contacts, Templates, Senders, Credits, History, and Settings configured in a single toolbar." />
        </div>
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
        <DocSectionHeading eyebrow="Onboarding Path">The NOLA SMS Pro Experience</DocSectionHeading>
        <DocBody>From marketplace authorization to sending and tracking your first branded SMS, NOLA maintains a clear, guided journey.</DocBody>
        <WorkflowDiagram steps={workflowSteps} />
      </DocSection>

      {/* 6. WHY USE NOLA SMS PRO (WITH ACTIVE MODAL COMPONENT) */}
      <DocSection id="welcome-why">
        <DocSectionHeading eyebrow="Operational Benefits">Why Use NOLA SMS Pro?</DocSectionHeading>
        <DocBody>
          Explore how NOLA SMS Pro transforms local communications with custom sender tags, real-time message tracking, and direct CRM variable queries. Click any module below for a detailed walkthrough and preview.
        </DocBody>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {welcomeFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              onClick={() => setActiveIndex(index)}
              ctaText="Interactive Preview"
            />
          ))}
        </div>
      </DocSection>

      <WelcomeFeatureModal
        activeFeature={activeFeature}
        onClose={() => setActiveIndex(null)}
        onPrevious={() => setActiveIndex((c) => (c === null || c === 0 ? welcomeFeatures.length - 1 : c - 1))}
        onNext={() => setActiveIndex((c) => (c === null || c === welcomeFeatures.length - 1 ? 0 : c + 1))}
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

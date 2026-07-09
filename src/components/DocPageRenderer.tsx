import React, { useEffect, useRef } from 'react';
import type { DocPage } from '../data/docsData';
import { docsData, sidebarStructure } from '../data/docsData';
import { Steps } from './Steps';
import { TipBox, InfoBox, WarningBox } from './Callouts';
import { Accordion } from './Accordion';
import { SenderIdWorkflow, CreditWorkflow } from './Workflow';
import { InteractiveChecklist } from './InteractiveChecklist';
import { TicketForm } from './TicketForm';
import { ScreenshotPlaceholder } from './ScreenshotPlaceholder';
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import { AlertTriangle, Clock, BookOpen, Layers, Settings, ShieldAlert, HelpCircle, LifeBuoy } from 'lucide-react';
import { WelcomePresentation } from './WelcomePresentation';

interface Props {
  page: DocPage;
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  'Welcome': <BookOpen className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
  'Getting Started': <Layers className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
  'Using NOLA SMS Pro': <Settings className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
  'Troubleshooting': <ShieldAlert className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
  'Frequently Asked Questions': <HelpCircle className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
  'Support & Help': <LifeBuoy className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />,
};

// Determine visual preview variant based on page content
function getPreviewVariant(page: DocPage): 'Application Preview' | 'Step Preview' | 'Feature Preview' | 'Result Preview' {
  if (page.id === 'dashboard-overview' || page.id === 'welcome' || page.id === 'what-is-nola') return 'Application Preview';
  if (page.steps && page.steps.length > 0) return 'Step Preview';
  if (page.id === 'features' || page.id === 'benefits') return 'Feature Preview';
  return 'Result Preview';
}

// Section heading used consistently throughout
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-[17px] font-bold text-slate-800 dark:text-slate-100 mb-4 mt-10 first:mt-0">
    {children}
  </h2>
);

export const DocPageRenderer: React.FC<Props> = ({ page: _page }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();

  const activeId = location.pathname.split('/docs/')[1] || '';
  const isScrollingFromClickRef = useRef(false);

  // Scroll target element into view on PUSH/POP route change
  useEffect(() => {
    if (activeId) {
      const el = document.getElementById(activeId);
      if (el) {
        if (navType === 'PUSH' || navType === 'POP') {
          isScrollingFromClickRef.current = true;
          el.scrollIntoView({ behavior: 'smooth' });

          const timer = setTimeout(() => {
            isScrollingFromClickRef.current = false;
          }, 1000);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [activeId, navType]);

  // IntersectionObserver ScrollSpy to update URL dynamically during manual scrolling
  useEffect(() => {
    const sections = sidebarStructure
      .flatMap(sec => sec.items)
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingFromClickRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && id !== activeId) {
            navigate(`/docs/${id}`, { replace: true });
          }
        }
      });
    }, observerOptions);

    sections.forEach(el => observer.observe(el));

    return () => {
      sections.forEach(el => observer.unobserve(el));
    };
  }, [activeId, navigate]);

  const renderPageContent = (p: DocPage) => {
    const previewVariant = getPreviewVariant(p);
    const showPreview = !['faq', 'support', 'troubleshooting'].includes(p.id);

    if (showPreview) {
      return (
        <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Text Guide */}
          <div className="lg:col-span-7 space-y-6">
            {/* ── 1. Page Header ── */}
            <header className="mb-6 pb-5 border-b border-slate-100 dark:border-slate-800/60">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider mb-2">
                <span>{p.section}</span>
                {p.subsection && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">/</span>
                    <span>{p.subsection}</span>
                  </>
                )}
              </div>

              <h3 className="text-[24px] md:text-[28px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                {p.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500">
                <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{p.readingTime}</span>
              </div>

              <p className="mt-3 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                {p.description}
              </p>
            </header>

            {/* ── 2. Purpose ── */}
            {p.purpose && (
              <section className="mb-6">
                <p className="text-[14px] text-slate-655 dark:text-slate-400 leading-relaxed">
                  {p.purpose}
                </p>
              </section>
            )}

            {/* ── 3. Steps / Workflows ── */}
            {p.steps && p.steps.length > 0 && (
              <section className="mb-6">
                <SectionHeading>
                  {p.hasFirstSMSChecklist
                    ? 'Setup Checklist'
                    : p.hasWorkflow
                    ? 'How It Works'
                    : p.hasTicketForm
                    ? 'Submit a Request'
                    : 'Step-by-Step Guide'}
                </SectionHeading>

                {p.hasFirstSMSChecklist ? (
                  <InteractiveChecklist />
                ) : p.hasWorkflow === 'senderId' ? (
                  <SenderIdWorkflow />
                ) : p.hasWorkflow === 'credits' ? (
                  <CreditWorkflow />
                ) : p.hasTicketForm ? (
                  <TicketForm />
                ) : (
                  <Steps items={p.steps} />
                )}
              </section>
            )}

            {/* ── 4. Callouts ── */}
            {(p.tips || p.notes || p.warnings) && (
              <div className="space-y-4">
                {p.tips?.map((tip, idx) => (
                  <TipBox key={idx}>{tip}</TipBox>
                ))}
                {p.notes?.map((note, idx) => (
                  <InfoBox key={idx}>{note}</InfoBox>
                ))}
                {p.warnings?.map((warn, idx) => (
                  <WarningBox key={idx}>{warn}</WarningBox>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Visual Mockup (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-4">
            <ScreenshotPlaceholder
              figure={1}
              caption={`${p.title} — visual overview.`}
              note="Screenshots will be added once the feature is available in the live app."
              variant={previewVariant}
              height="md"
            />
          </div>
        </div>
      );
    }

    return (
      <div key={p.id} className="max-w-3xl space-y-6">
        <header className="mb-6 pb-5 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider mb-2">
            <span>{p.section}</span>
          </div>
          <h3 className="text-[24px] md:text-[28px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            {p.title}
          </h3>
          <p className="mt-3 text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            {p.description}
          </p>
        </header>

        {p.purpose && (
          <section className="mb-6">
            <p className="text-[14px] text-slate-655 dark:text-slate-400 leading-relaxed">
              {p.purpose}
            </p>
          </section>
        )}

        {p.steps && p.steps.length > 0 && (
          <section className="mb-6">
            <SectionHeading>
              {p.hasTicketForm ? 'Submit a Request' : 'Step-by-Step Guide'}
            </SectionHeading>
            {p.hasTicketForm ? <TicketForm /> : <Steps items={p.steps} />}
          </section>
        )}

        {p.commonIssues && p.commonIssues.length > 0 && (
          <section className="mb-6">
            <SectionHeading>Troubleshooting</SectionHeading>
            <div className="space-y-3">
              {p.commonIssues.map((issue, idx) => {
                const colonIdx = issue.indexOf(': ');
                const title = colonIdx > -1 ? issue.slice(0, colonIdx) : issue;
                const desc = colonIdx > -1 ? issue.slice(colonIdx + 2) : '';
                return (
                  <div key={idx} className="flex gap-3 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/10">
                    <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200">{title}</p>
                      {desc && <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{desc}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {p.faqs && p.faqs.length > 0 && (
          <section className="mb-6">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <Accordion items={p.faqs} />
          </section>
        )}

        {(p.tips || p.notes || p.warnings) && (
          <div className="space-y-4">
            {p.tips?.map((tip, idx) => (
              <TipBox key={idx}>{tip}</TipBox>
            ))}
            {p.notes?.map((note, idx) => (
              <InfoBox key={idx}>{note}</InfoBox>
            ))}
            {p.warnings?.map((warn, idx) => (
              <WarningBox key={idx}>{warn}</WarningBox>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-32 pb-32">
      {sidebarStructure.map((section) => (
        <div key={section.title} className="scroll-mt-20">
          {/* Category Header */}
          <div className="pb-4 mb-16 border-b border-slate-100 dark:border-slate-800/60">
            <h2 className="text-xs font-black text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-widest flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                {SECTION_ICONS[section.title]}
              </span>
              {section.title}
            </h2>
          </div>

          {/* Sub-pages stack */}
          <div className="space-y-24">
            {section.items.map(item => {
              if (item.id === 'welcome') {
                return (
                  <section id="welcome" key="welcome" className="scroll-mt-20 space-y-12">
                    <header className="mb-6 pb-5 border-b border-slate-100 dark:border-slate-800/60 max-w-3xl">
                      <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                        Welcome to NOLA SMS Pro
                      </h1>
                      <p className="mt-3 text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                        Learn how NOLA SMS Pro integrates with your HighLevel sub-account to streamline your business texting.
                      </p>
                    </header>
                    <WelcomePresentation />
                  </section>
                );
              }

              const subPage = docsData.find(p => p.id === item.id);
              if (!subPage) return null;

              return (
                <section
                  id={subPage.id}
                  key={subPage.id}
                  className="scroll-mt-20 border-b border-slate-50 dark:border-slate-900/35 pb-20 last:border-b-0 last:pb-0"
                >
                  {renderPageContent(subPage)}
                </section>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

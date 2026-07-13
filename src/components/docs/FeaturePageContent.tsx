import React from 'react';
import type { DocPage, ScreenshotPlan } from '../../data/docsData';
import { InfoBox, WarningBox, TipBox } from '../Callouts';
import { Accordion } from '../Accordion';
import { InteractiveChecklist } from '../InteractiveChecklist';
import { ScreenshotPlaceholder } from '../ScreenshotPlaceholder';
import { DocSection, DocSectionHeading, SplitLayout } from './layout';
import { IllustrationFrame } from './IllustrationFrame';
import { RelatedPages } from './RelatedPages';
import { AlertTriangle, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ScreenshotMode = 'large' | 'medium' | 'comparison';

function getScreenshotMode(page: DocPage, screenshot: ScreenshotPlan, index: number): ScreenshotMode {
  const text = `${page.id} ${screenshot.caption} ${screenshot.alt}`.toLowerCase();
  if (page.id === 'sender-id' && (text.includes('status') || index === 2)) return 'comparison';
  if (text.includes('history') || text.includes('dashboard') || text.includes('contacts list') || text.includes('credits-history')) return 'large';
  if (text.includes('form') || text.includes('settings') || text.includes('account') || text.includes('sender')) return 'medium';
  return index === 0 ? 'large' : 'medium';
}

interface FeaturePageContentProps {
  page: DocPage;
}

export const FeaturePageContent: React.FC<FeaturePageContentProps> = ({ page }) => {
  const primaryScreenshot = page.screenshots?.[0];

  return (
    <div className="space-y-16">
      {/* 1. OVERVIEW */}
      {page.purpose && (
        <DocSection id={`${page.id}-overview`}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#D7E7FA] pb-4 dark:border-[#183354]">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E8F3FF] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#1F5AAE] dark:bg-[#102B4F] dark:text-[#9AC3FF]">
              {page.readingTime}
            </span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {page.section} {page.subsection ? `> ${page.subsection}` : ''}
            </span>
          </div>

          <SplitLayout
            visual={
              primaryScreenshot ? (
                <ScreenshotPlaceholder
                  caption={primaryScreenshot.caption}
                  alt={primaryScreenshot.alt}
                  filename={primaryScreenshot.filename}
                  variant="Application Preview"
                  mode={getScreenshotMode(page, primaryScreenshot, 0)}
                  height="md"
                />
              ) : (
                <IllustrationFrame
                  type="desktop"
                  title={page.title}
                  caption={page.description}
                />
              )
            }
          >
            <div className="flex items-start gap-3 rounded-2xl border-l-4 border-[#1F5AAE] bg-white px-5 py-4 shadow-sm shadow-[#184B8F]/3 dark:border-[#72A8FF] dark:bg-[#0B1627]">
              <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5AAE] dark:text-[#72A8FF]" />
              <div>
                <h3 className="doc-eyebrow !mb-1">Overview</h3>
                <p className="text-[13.5px] leading-relaxed text-[#425B7D] dark:text-slate-300 font-medium">{page.purpose}</p>
              </div>
            </div>
          </SplitLayout>
        </DocSection>
      )}

      {/* 2. WHY IT MATTERS */}
      {page.whyItMatters && (
        <DocSection id={`${page.id}-why-it-matters`}>
          <DocSectionHeading eyebrow="Product Strategy">Why It Matters</DocSectionHeading>
          <div className="rounded-2xl border border-blue-200/50 bg-[#F4F9FF] p-5 dark:border-blue-900/25 dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/2">
            <p className="text-[14px] leading-7 text-[#0B2E63] dark:text-slate-200 font-semibold">
              {page.whyItMatters}
            </p>
          </div>
        </DocSection>
      )}

      {/* 3. ILLUSTRATIONS */}
      {page.screenshots && page.screenshots.length > 1 && (
        <DocSection id={`${page.id}-illustration`}>
          <DocSectionHeading eyebrow="Visual Guide">See it in action</DocSectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {page.screenshots.slice(1).map((screenshot, index) => (
              <ScreenshotPlaceholder
                key={screenshot.filename}
                figure={index + 2}
                caption={screenshot.caption}
                alt={screenshot.alt}
                filename={screenshot.filename}
                variant="Step Preview"
                mode={getScreenshotMode(page, screenshot, index + 1)}
                height="md"
              />
            ))}
          </div>
        </DocSection>
      )}

      {/* 4. HOW IT WORKS */}
      {page.steps && page.steps.length > 0 && (
        <DocSection id={`${page.id}-how-it-works`}>
          <DocSectionHeading eyebrow="Execution Guide">How It Works</DocSectionHeading>
          <div className="space-y-3">
            {page.steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-[#D7E7FA] bg-white p-5 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/3 transition-colors hover:border-[#4F8EF7]"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8F3FF] text-[12px] font-black text-[#1F5AAE] dark:bg-[#102B4F] dark:text-[#9AC3FF]">
                  {index + 1}
                </span>
                <p className="text-[13.5px] leading-6 text-[#425B7D] dark:text-slate-350">{step}</p>
              </div>
            ))}
          </div>
        </DocSection>
      )}

      {/* 5. CAPABILITIES */}
      {page.capabilities && page.capabilities.length > 0 && (
        <DocSection id={`${page.id}-capabilities`}>
          <DocSectionHeading eyebrow="Functional Scope">Key Capabilities</DocSectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-xl border border-[#D7E7FA] bg-[#F8FBFF] px-4 py-3 dark:border-[#183354] dark:bg-[#0B1627] shadow-sm shadow-[#184B8F]/2"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-[13px] font-semibold leading-snug text-[#0B2E63] dark:text-white">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </DocSection>
      )}

      {/* 6. REAL-WORLD USE CASES */}
      {page.useCases && page.useCases.length > 0 && (
        <DocSection id={`${page.id}-use-cases`}>
          <DocSectionHeading eyebrow="Operational ROI">Real-World Use Cases</DocSectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {page.useCases.map((uc, index) => (
              <div
                key={index}
                className="premium-card flex flex-col justify-between"
              >
                <div>
                  <p className="doc-eyebrow mb-2">Scenario {index + 1}: {uc.scenario}</p>
                  <p className="text-[13.5px] leading-relaxed text-[#425B7D] dark:text-slate-350">{uc.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </DocSection>
      )}

      {/* PRACTICE CHECKLIST */}
      {page.hasFirstSMSChecklist && (
        <DocSection id={`${page.id}-practice`}>
          <DocSectionHeading eyebrow="Interactive Practice">Complete your first-send checks</DocSectionHeading>
          <InteractiveChecklist />
        </DocSection>
      )}

      {/* TROUBLESHOOTING COMMON ISSUES */}
      {page.commonIssues && page.commonIssues.length > 0 && (
        <DocSection id={`${page.id}-issues`}>
          <DocSectionHeading eyebrow="Troubleshooting">Common issues & solutions</DocSectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {page.commonIssues.map((issue) => {
              const colonIdx = issue.indexOf(': ');
              const title = colonIdx > -1 ? issue.slice(0, colonIdx) : issue;
              const desc = colonIdx > -1 ? issue.slice(colonIdx + 2) : '';
              return (
                <div
                  key={issue}
                  className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50/30 p-4 dark:border-amber-900/35 dark:bg-amber-950/10"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                  <div>
                    <p className="text-[13.5px] font-black text-[#442B05] dark:text-amber-100">{title}</p>
                    {desc && (
                      <p className="mt-1 text-[12.5px] leading-relaxed text-[#6A5431] dark:text-amber-200/70">{desc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </DocSection>
      )}

      {/* FAQS */}
      {page.faqs && page.faqs.length > 0 && (
        <DocSection id={`${page.id}-faq`}>
          <DocSectionHeading eyebrow="FAQ">Frequently asked questions</DocSectionHeading>
          <Accordion items={page.faqs} />
        </DocSection>
      )}

      {/* 7. BEST PRACTICES (Notes / Warnings / Tips) */}
      {((page.notes && page.notes.length > 0) || (page.warnings && page.warnings.length > 0) || (page.tips && page.tips.length > 0)) && (
        <DocSection id={`${page.id}-best-practices`}>
          <DocSectionHeading eyebrow="Safety & Tips">Best Practices</DocSectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {page.tips?.map((tip, idx) => (
              <TipBox key={`tip-${idx}`} title="Recommendation">{tip}</TipBox>
            ))}
            {page.notes?.map((note, idx) => (
              <InfoBox key={`note-${idx}`} title="System Note">{note}</InfoBox>
            ))}
            {page.warnings?.map((warn, idx) => (
              <WarningBox key={`warning-${idx}`} title="Caution">{warn}</WarningBox>
            ))}
          </div>
        </DocSection>
      )}

      {/* 8. RELATED PAGES & 9. NEXT STEP */}
      <div className="border-t border-[#D7E7FA] pt-8 dark:border-[#183354]">
        {page.nextPageCTA ? (
          <DocSection id={`${page.id}-next-step`} className="!scroll-mt-0">
            <p className="doc-eyebrow mb-3">Next recommended step</p>
            <Link
              to={`/docs/${page.nextPageCTA.id}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#BCD7F5] bg-gradient-to-r from-[#E8F3FF]/70 to-white/10 px-6 py-5 transition-all hover:border-[#4F8EF7] hover:shadow-lg hover:shadow-[#184B8F]/10 dark:border-[#315C8F] dark:from-[#102B4F]/40 dark:to-[#0B1627] dark:hover:border-[#72A8FF]"
            >
              <div>
                <p className="text-[16px] font-black text-[#0B2E63] dark:text-white">
                  {page.nextPageCTA.title}
                </p>
                <p className="mt-1 text-[13px] text-[#5D7596] dark:text-slate-400">
                  {page.nextPageCTA.desc}
                </p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5AAE] text-white transition-transform group-hover:translate-x-0.5 dark:bg-[#72A8FF] dark:text-[#07111F]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </DocSection>
        ) : null}

        <RelatedPages relatedPages={page.relatedPages} currentId={page.id} />
      </div>
    </div>
  );
};

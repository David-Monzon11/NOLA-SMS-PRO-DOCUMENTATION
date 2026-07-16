import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import type { DocPage } from '../data/docsData';
import { docsData, sidebarStructure } from '../data/docsData';
import { WelcomeContent } from './docs/WelcomeContent';
import { FeaturePageContent } from './docs/FeaturePageContent';
import { Pagination } from './Pagination';
import { InstallNolaSmsProContent } from './docs/InstallNolaSmsProContent';
import { CreateOrSignInContent } from './docs/CreateOrSignInContent';
import { ConnectedHighlevelContent } from './docs/ConnectedHighlevelContent';
import { DashboardOverviewContent } from './docs/DashboardOverviewContent';
import { SendFirstSMSContent } from './docs/SendFirstSMSContent';
import { ContactsContent } from './docs/ContactsContent';
import { ComposeSmsContent } from './docs/ComposeSmsContent';
import { MessageTemplatesContent } from './docs/MessageTemplatesContent';
import { SenderIdsContent } from './docs/SenderIdsContent';
import { MessageHistoryContent } from './docs/MessageHistoryContent';
import { SmsCreditsContent } from './docs/SmsCreditsContent';
import { SettingsContent } from './docs/SettingsContent';
import { TroubleshootingContent } from './docs/TroubleshootingContent';
import { SupportHelpContent } from './docs/SupportHelpContent';
import { FAQContent } from './docs/FAQContent';
import {
  ArrowUpRight,
  BookOpen,
  CreditCard,
  FileText,
  HelpCircle,
  History,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Store,
  UserPlus,
  Users,
  Wrench,
  ArrowRightLeft,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface Props {
  page: DocPage;
}

const pageIconMap = {
  overview: Compass,
  'what-is-nola-sms-pro': BookOpen,
  'how-nola-sms-pro-works': Wrench,
  'core-features': LayoutDashboard,
  'send-your-first-sms': Send,
  'install-nola-sms-pro': Store,
  'create-or-sign-in': UserPlus,
  'connect-highlevel': ArrowRightLeft,
  'dashboard-overview': LayoutDashboard,
  contacts: Users,
  'compose-sms': MessageSquare,
  'message-templates': FileText,
  'sender-ids': ShieldCheck,
  'message-history': History,
  'sms-credits': CreditCard,
  settings: Settings,
  troubleshooting: Wrench,
  'support-help': HelpCircle,
  faq: HelpCircle,
} satisfies Record<string, React.ComponentType<{ className?: string }>>;

function getPageIcon(page: DocPage) {
  if (pageIconMap[page.id as keyof typeof pageIconMap]) {
    return pageIconMap[page.id as keyof typeof pageIconMap];
  }
  if (page.section === 'SUPPORT') return ShieldAlert;
  if (page.section === 'SETUP') return Rocket;
  if (page.section === 'MESSAGING') return MessageSquare;
  return BookOpen;
}

function getHeaderPage(activeId: string, fallback: DocPage): DocPage {
  return docsData.find((item) => item.id === activeId) ?? fallback;
}

const StickyPageHeader: React.FC<{ page: DocPage }> = ({ page }) => {
  const Icon = getPageIcon(page);
  const isWelcomeHeader = page.id === 'overview';
  const isWhatIsHeader = page.id === 'what-is-nola-sms-pro';
  const isHowWorksHeader = page.id === 'how-nola-sms-pro-works';
  const isCoreFeaturesHeader = page.id === 'core-features';

  const renderOverviewBadges = ({
    primary,
    primaryIcon,
    secondary,
    secondaryIcon,
  }: {
    primary: string;
    primaryIcon: React.ReactNode;
    secondary: string;
    secondaryIcon: React.ReactNode;
  }) => (
    <div className="mb-5 flex flex-wrap items-center gap-2.5">
      <span className="inline-flex min-h-7 items-center gap-1.5 rounded-full border border-white/55 bg-white/75 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#0B2E63] shadow-sm shadow-blue-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-blue-100">
        {primaryIcon}
        {primary}
      </span>
      <span className="inline-flex min-h-7 items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm shadow-emerald-900/5 backdrop-blur-md dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-100">
        {secondaryIcon}
        {secondary}
      </span>
    </div>
  );
  // Helper to render overview-style hero banners without background images
  const renderOverviewBanner = ({
    badge1,
    badge1Icon,
    badge2,
    badge2Icon,
    headline,
    headlineAccent,
    subtext,
    id,
  }: {
    badge1: string;
    badge1Icon: React.ReactNode;
    badge2: string;
    badge2Icon: React.ReactNode;
    headline: string;
    headlineAccent?: string;
    subtext: string;
    id: string;
  }) => (
    <header id={id} className="mb-8">
      <div
        className="relative overflow-hidden rounded-[20px] min-h-[160px] bg-gradient-to-br from-[#bae6fd] via-[#93c5fd] to-[#3b82f6] dark:from-[#0F172A] dark:to-[#1E293B]"
      >
        {/* Soft background glow decoration */}
        <div className="absolute top-[-50%] right-[-10%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[80px] dark:bg-blue-500/10" />
        <div className="absolute bottom-[-50%] left-[-10%] h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[80px] dark:bg-emerald-500/5" />
        
        <div className="relative z-10 flex h-full flex-col justify-center px-8 py-8 sm:px-10 sm:py-10">
          {renderOverviewBadges({
            primary: badge1,
            primaryIcon: badge1Icon,
            secondary: badge2,
            secondaryIcon: badge2Icon,
          })}
          <h1 className="text-[26px] font-black leading-[1.1] tracking-tight text-[#0a1e3d] dark:text-white sm:text-[32px]">
            {headline} {headlineAccent && <span className="text-blue-800 dark:text-blue-300">{headlineAccent}</span>}
          </h1>
          <p className="mt-3 max-w-[760px] text-[13px] font-semibold leading-6 text-[#1e3a5f] dark:text-slate-200 sm:text-[13.5px]">
            {subtext}
          </p>
        </div>
      </div>
    </header>
  );

  if (isWelcomeHeader) {
    return (
      <header id="about-heading" className="mb-8">
        <div
          className="relative overflow-hidden rounded-[20px] min-h-[280px] lg:min-h-[320px]"
          style={{
            backgroundImage: 'url(/hero-banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Desktop theme-adaptive overlay: rich deep blue in light mode */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#bae6fd] via-[#93c5fd]/95 to-transparent dark:from-[#0a1223] dark:via-[#0a1223]/95 dark:to-transparent" />
          
          {/* Mobile theme-adaptive overlay: rich deep blue in light mode */}
          <div className="pointer-events-none absolute inset-0 lg:hidden bg-gradient-to-b from-[#bae6fd]/30 to-[#93c5fd]/90 dark:from-transparent dark:to-[#0a1223]/95" />
          
          <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:max-w-[55%] lg:py-16 xl:max-w-[50%]">
            {renderOverviewBadges({
              primary: 'Overview',
              primaryIcon: <Compass className="h-3 w-3" />,
              secondary: 'HighLevel native',
              secondaryIcon: <CheckCircle2 className="h-3 w-3" />,
            })}
            <h1 className="text-[26px] font-black leading-[1.1] tracking-tight text-[#0a1e3d] dark:text-white sm:text-[32px]">
              Welcome to <span className="text-blue-800 dark:text-blue-200">NOLA SMS Pro</span>
            </h1>
            <p className="mt-5 max-w-[420px] text-[13px] font-semibold leading-7 text-[#1e3a5f] dark:text-slate-200 sm:text-[14px]">
              Install the app, connect your HighLevel sub-account, send your first SMS, and track delivery — all from one embedded workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/docs/install-nola-sms-pro"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-bold text-white shadow-xl transition-all hover:brightness-110 active:scale-[0.97]"
                style={{ background: 'linear-gradient(135deg, #1a6fcc, #1252a3)' }}
              >
                <Rocket className="h-3.5 w-3.5" />
                Quick start
              </Link>
              <Link
                to="/docs/what-is-nola-sms-pro"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200/60 bg-white/90 px-5 py-2.5 text-[13px] font-bold text-blue-700 backdrop-blur-sm transition-all hover:bg-blue-50/80 active:scale-[0.97] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/18 dark:hover:border-white/30"
              >
                What is NOLA SMS Pro?
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  if (isWhatIsHeader) {
    return renderOverviewBanner({
      id: 'what-is-nola-sms-pro-what-is-this',
      badge1: 'Intro',
      badge1Icon: <BookOpen className="h-3 w-3" />,
      badge2: 'HighLevel Native',
      badge2Icon: <CheckCircle2 className="h-3 w-3" />,
      headline: 'What is',
      headlineAccent: 'NOLA SMS Pro?',
      subtext: 'A native SMS platform embedded directly inside your HighLevel sub-account — contacts, compose, templates, sender IDs, credits, and message logs all in one workspace.',
    });
  }

  if (isHowWorksHeader) {
    return renderOverviewBanner({
      id: 'how-nola-sms-pro-works-what-is-this',
      badge1: 'Under the Hood',
      badge1Icon: <Wrench className="h-3 w-3" />,
      badge2: 'PH Carrier Gateway',
      badge2Icon: <CheckCircle2 className="h-3 w-3" />,
      headline: 'How NOLA SMS Pro',
      headlineAccent: 'Works',
      subtext: 'Your message travels from the Compose panel through a Semaphore carrier gateway, is validated, credit-deducted, and delivered directly to Globe, Smart, or DITO subscribers in the Philippines.',
    });
  }

  if (isCoreFeaturesHeader) {
    return renderOverviewBanner({
      id: 'core-features-what-is-this',
      badge1: 'Feature Map',
      badge1Icon: <LayoutDashboard className="h-3 w-3" />,
      badge2: '6 Modules',
      badge2Icon: <CheckCircle2 className="h-3 w-3" />,
      headline: 'Core',
      headlineAccent: 'Features',
      subtext: 'Six focused modules — Contacts, Compose, Templates, Sender IDs, Credits Wallet, and Message History — give you complete control over your Philippine SMS outreach from within HighLevel.',
    });
  }

  return (
    <header className="mb-7">
      <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-[#111827] dark:shadow-none">
        <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-[#334155] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#CBD5E1]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#334155] dark:text-[#CBD5E1]">
                  {page.section}
                </p>
                {page.subsection && (
                  <p className="mt-1 truncate text-[12px] font-semibold text-slate-400 dark:text-slate-500">
                    {page.subsection}
                  </p>
                )}
              </div>
            </div>
            <h1 className="max-w-[780px] text-[30px] font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-[38px] dark:text-white">
              {page.title}
            </h1>
            <p className="mt-4 max-w-[760px] text-[14px] font-medium leading-7 text-[#475569] sm:text-[15px] dark:text-slate-350">
              {page.description}
            </p>
          </div>

          <div className="hidden border-l border-slate-100 bg-[#F8FAFC] p-5 dark:border-slate-800 dark:bg-[#020617] lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-4 h-28 overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]">
                <img
                  src="/illustration.jpg"
                  alt=""
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Reading path
              </p>
              <p className="mt-2 text-[13px] font-semibold leading-5 text-[#475569] dark:text-slate-300">
                Use the section list to move through setup, messaging, account, and support guides without leaving this page shell.
              </p>
            </div>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-black text-[#334155] transition-colors hover:text-[#1E293B] dark:text-[#CBD5E1]"
            >
              Top of guide
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export const DocPageRenderer: React.FC<Props> = ({ page }) => {
  const location = useLocation();
  const activeId = location.pathname.split('/docs/')[1] || 'overview';

  const headerPage = getHeaderPage(activeId, page);
  const isWelcome = activeId === 'overview';
  const isInstallPage = activeId === 'install-nola-sms-pro';
  const isCreateOrSignInPage = activeId === 'create-or-sign-in';
  const isConnectedHighlevelPage = activeId === 'connect-highlevel';
  const isDashboardOverviewPage = activeId === 'dashboard-overview';
  const isSendFirstSMSPage = activeId === 'send-your-first-sms';
  const isContactsPage = activeId === 'contacts';
  const isComposeSmsPage = activeId === 'compose-sms';
  const isMessageTemplatesPage = activeId === 'message-templates';
  const isSenderIdsPage = activeId === 'sender-ids';
  const isMessageHistoryPage = activeId === 'message-history';
  const isSmsCreditsPage = activeId === 'sms-credits';
  const isSettingsPage = activeId === 'settings';
  const isTroubleshootingPage = activeId === 'troubleshooting';
  const isSupportHelpPage = activeId === 'support-help';
  const isFaqPage = activeId === 'faq';
  
  
  
  // Resolve current active section to determine whether to render tabs
  const activeSection = sidebarStructure.find((sec) =>
    sec.items.some((item) => item.id === activeId)
  );
  const showTabs = activeSection && !isWelcome && (activeSection.title === 'OVERVIEW' || activeSection.title === 'MESSAGING');
  
  // Non-overview/messaging pages in SETUP, ACCOUNT, SUPPORT that don't have contents populated yet
  const isBlankPage = !showTabs && !isInstallPage && !isCreateOrSignInPage && !isConnectedHighlevelPage && !isDashboardOverviewPage && !isSendFirstSMSPage && !isSmsCreditsPage && !isSettingsPage && !isTroubleshootingPage && !isSupportHelpPage && !isFaqPage && ['SETUP', 'ACCOUNT', 'SUPPORT'].includes(page.section);

  return (
    <div className="mx-auto w-full max-w-[980px] pb-16" aria-label={`Documentation guide focused on ${page.title}`}>
      <StickyPageHeader page={headerPage} />
      
      {showTabs && activeSection ? (
        <div className="space-y-6">
          {/* Tab Content Panel — inner tab nav removed; sidebar + pagination handle navigation */}
          <div>
            {isWelcome ? (
              <WelcomeContent />
            ) : isContactsPage ? (
              <ContactsContent page={page} />
            ) : isComposeSmsPage ? (
              <ComposeSmsContent page={page} />
            ) : isMessageTemplatesPage ? (
              <MessageTemplatesContent page={page} />
            ) : isSenderIdsPage ? (
              <SenderIdsContent page={page} />
            ) : isMessageHistoryPage ? (
              <MessageHistoryContent page={page} />
            ) : (
              <FeaturePageContent page={page} />
            )}
            <Pagination currentId={page.id} />
          </div>
        </div>
      ) : isInstallPage ? (
        <div className="pt-6">
          <InstallNolaSmsProContent page={page} />
        </div>
      ) : isCreateOrSignInPage ? (
        <div className="pt-6">
          <CreateOrSignInContent page={page} />
        </div>
      ) : isConnectedHighlevelPage ? (
        <div className="pt-6">
          <ConnectedHighlevelContent page={page} />
        </div>
      ) : isDashboardOverviewPage ? (
        <div className="pt-6">
          <DashboardOverviewContent page={page} />
        </div>
      ) : isSendFirstSMSPage ? (
        <div className="pt-6">
          <SendFirstSMSContent page={page} />
        </div>
      ) : isSmsCreditsPage ? (
        <div className="pt-6">
          <SmsCreditsContent page={page} />
        </div>
      ) : isSettingsPage ? (
        <div className="pt-6">
          <SettingsContent page={page} />
        </div>
      ) : isTroubleshootingPage ? (
        <div className="pt-6">
          <TroubleshootingContent page={page} />
        </div>
      ) : isSupportHelpPage ? (
        <div className="pt-6">
          <SupportHelpContent page={page} />
        </div>
      ) : isFaqPage ? (
        <div className="pt-6">
          <FAQContent page={page} />
        </div>
      ) : isBlankPage ? (
        null
      ) : (
        <div className="pt-6">
          {isWelcome ? (
            <WelcomeContent />
          ) : isContactsPage ? (
            <ContactsContent page={page} />
          ) : isComposeSmsPage ? (
            <ComposeSmsContent page={page} />
          ) : isMessageTemplatesPage ? (
            <MessageTemplatesContent page={page} />
          ) : isSenderIdsPage ? (
            <SenderIdsContent page={page} />
          ) : isMessageHistoryPage ? (
            <MessageHistoryContent page={page} />
          ) : isSmsCreditsPage ? (
            <SmsCreditsContent page={page} />
          ) : isSettingsPage ? (
            <SettingsContent page={page} />
          ) : isTroubleshootingPage ? (
            <TroubleshootingContent page={page} />
          ) : isSupportHelpPage ? (
            <SupportHelpContent page={page} />
          ) : isFaqPage ? (
            <FAQContent page={page} />
          ) : (
            <FeaturePageContent page={page} />
          )}
          <Pagination currentId={page.id} />
        </div>
      )}
    </div>
  );
};

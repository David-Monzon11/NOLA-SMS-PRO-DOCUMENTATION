import React, { useState, useCallback, useEffect } from 'react';
import type { DocPage } from '../../data/docsData';
import {
  Home,
  Users,
  Send,
  FolderOpen,
  Settings,
  Gift,
  CreditCard,
  RefreshCw,
  FileText,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  RotateCcw,
  X,
  Maximize2,
} from 'lucide-react';

// Import images directly
import DashboardImg from '../../assets/Dashboard Overview/Dashboard.png';
import ContactsImg from '../../assets/Dashboard Overview/Contacts.png';
import NewMessageImg from '../../assets/Dashboard Overview/New Message.png';
import TemplatesImg from '../../assets/Dashboard Overview/Message Templates.png';
import DirectBulkImg from '../../assets/Dashboard Overview/Direct & Bulk Messages.png';
import SettingsAccountImg from '../../assets/Dashboard Overview/Settings - Account.png';
import SettingsSenderIdImg from '../../assets/Dashboard Overview/Settings - Sender ID.png';
import SettingsNotificationImg from '../../assets/Dashboard Overview/Settings - Notification.png';
import SettingsCreditsImg from '../../assets/Dashboard Overview/Settings - Credits.png';

interface Props {
  page: DocPage;
}

/* ─── Image Lightbox ───────────────────────────────────── */
interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/80 hover:text-white text-[12px] font-semibold transition-colors"
        >
          <X className="h-4 w-4" />
          Close
        </button>
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block max-h-[85vh] object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
};

/* ─── Interactive Settings Tabs Component ──────────────── */
const SettingsTabViewer: React.FC = () => {
  const tabs = [
    { key: 'account', label: 'Account', img: SettingsAccountImg, desc: 'Profile and GoHighLevel sub-account status connection.' },
    { key: 'sender-id', label: 'Sender IDs', img: SettingsSenderIdImg, desc: 'Manage your active, pending, and approved Sender ID masks.' },
    { key: 'notifications', label: 'Notifications', img: SettingsNotificationImg, desc: 'Set up low balance alerts and email notifications.' },
    { key: 'credits', label: 'Credits', img: SettingsCreditsImg, desc: 'Check credit balance, select top-up packages, and view transaction history.' },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="space-y-4 w-full">
      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(idx)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-black tracking-wide transition-all ${idx === activeTab
              ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screen Frame */}
      <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070d18] shadow-sm">
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
              Settings &gt; {tabs[activeTab].label}
            </span>
          </div>
          <button
            onClick={() => setLightbox(tabs[activeTab].img)}
            className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.12em] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            aria-label="View full size"
          >
            <Maximize2 className="h-3 w-3" />
            Full size
          </button>
        </div>

        {/* Tab Screenshot — clickable */}
        <button
          className="block w-full cursor-zoom-in focus:outline-none"
          onClick={() => setLightbox(tabs[activeTab].img)}
          aria-label={`View Settings - ${tabs[activeTab].label} full size`}
        >
          <img
            src={tabs[activeTab].img}
            alt={`Settings - ${tabs[activeTab].label}`}
            className="w-full h-auto block"
          />
        </button>
      </div>
      <p className="text-[12.5px] italic text-slate-500 dark:text-slate-400 text-center leading-relaxed">
        {tabs[activeTab].desc}
      </p>

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox
          src={lightbox}
          alt={`Settings - ${tabs[activeTab].label}`}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

/* ─── Standard Screenshot Card Frame ───────────────────── */
interface ScreenFrameProps {
  src: string;
  alt: string;
  title: string;
}

const ScreenFrame: React.FC<ScreenFrameProps> = ({ src, alt, title }) => {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070d18] shadow-sm w-full">
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
              {title}
            </span>
          </div>
          <button
            onClick={() => setLightbox(true)}
            className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.12em] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            aria-label="View full size"
          >
            <Maximize2 className="h-3 w-3" />
            Full size
          </button>
        </div>

        {/* Screenshot — clickable */}
        <button
          className="block w-full cursor-zoom-in focus:outline-none"
          onClick={() => setLightbox(true)}
          aria-label={`View ${alt} full size`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
          />
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox
          src={src}
          alt={alt}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
};

/* ─── Main Component ───────────────────────────────────── */
export const DashboardOverviewContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">

      {/* INTRO */}
      <section id="dashboard-key-objective" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">What this guide covers</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          Understand the layout of your workspace, monitor essential operational alerts, and navigate each menu panel to run your messaging campaigns.
        </p>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          The dashboard acts as your central command center, offering immediate visibility into your remaining credit balances, outbound SMS volume statistics, and active Sender ID masks, ensuring you can manage day-to-day operations at a glance.
        </p>
      </section>

      {/* PREREQUISITES */}
      <section id="dashboard-prerequisites" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Prerequisites</h2>
        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/30 max-w-[640px]">
          <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[13.5px] font-semibold leading-relaxed text-slate-800 dark:text-slate-200 mt-1">
              Successfully completed the Marketplace installation and connected your GoHighLevel account.
            </p>
          </div>
        </div>
      </section>

      {/* MUST-KNOW HIGHLIGHTS */}
      <section id="dashboard-highlights" className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Must-know workspace features</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: 10 Free Trial Credits */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <Gift className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                10 Free Trial Credits
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Upon completing registration, every new location receives 10 free trial credits to test the platform and confirm delivery status.
              </p>
            </div>
          </div>

          {/* Card 2: Active SMS Credit Balance */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <CreditCard className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Active SMS Balance
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Your available SMS credits are displayed on the Home dashboard. Outbound messaging is automatically blocked when your balance reaches zero.
              </p>
            </div>
          </div>

          {/* Card 3: Real-time GHL Sync */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <RefreshCw className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Real-time GHL Sync
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Contacts managed in GoHighLevel are synchronized automatically with NOLA SMS Pro. Manual CSV exports are not required.
              </p>
            </div>
          </div>

          {/* Card 4: Segment Length Constraints */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <FileText className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Length Constraints
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                A standard SMS contains up to 160 characters. Special characters (such as emojis) switch encoding to Unicode, reducing segments to 70 characters.
              </p>
            </div>
          </div>

          {/* Card 5: Sending Identity */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <ShieldCheck className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Sending Identity
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Messages are sent using the default sender identity <code className="text-[12px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">NOLASMSPro</code> unless an approved custom Sender ID has been configured and selected explicitly.
              </p>
            </div>
          </div>

          {/* Card 6: Automatic Fail Refunds */}
          <div className="premium-card flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <RotateCcw className="h-5 w-5 text-rose-500" />
              </div>
              <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Automatic Refunds
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                SMS credits are only consumed for successfully dispatched carrier handoffs. Your balance is automatically refunded and logged if a message fails or is rejected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU BREAKDOWN */}
      <section id="menu-breakdown" className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Workspace Breakdown</h2>
        <div className="space-y-8">
          {[
            {
              title: 'Home',
              icon: Home,
              color: 'text-blue-500',
              badge: 'Home Dashboard',
              label: 'Sidebar Panel',
              items: [
                'View your current SMS credit balance, including remaining trial credits.',
                'Monitor daily and monthly messaging statistics — Sent Today, Credits Used This Month, and Latest Activity.',
                'Review low-credit threshold warnings.',
                'Access quick actions to start a new chat, manage contacts, or go to account settings.',
                'Browse recent activity to see the latest incoming and outgoing conversations.',
              ],
              renderImage: () => (
                <ScreenFrame
                  src={DashboardImg}
                  alt="Home Dashboard Overview"
                  title="Home Dashboard"
                />
              )
            },
            {
              title: 'Contacts',
              icon: Users,
              color: 'text-emerald-500',
              badge: 'Contacts',
              label: 'Sidebar Panel',
              items: [
                'Browse, search, and filter synchronized GoHighLevel contacts in real time.',
                'Create new contacts using valid 11-digit Philippine mobile numbers.',
                'Select contacts individually or in bulk using the Select All toggle.',
                'Launch individual outbound conversations directly from contact rows.',
              ],
              renderImage: () => (
                <ScreenFrame
                  src={ContactsImg}
                  alt="Contacts Panel"
                  title="Contacts"
                />
              )
            },
            {
              title: 'Templates',
              icon: FolderOpen,
              color: 'text-amber-500',
              badge: 'Templates',
              label: 'Sidebar Panel',
              items: [
                'Create, organize, and manage reusable standard SMS layouts.',
                'Filter templates by category: Appointments, Marketing, Transactional, and General.',
                'Use dynamic merge values like {{contact.first_name}} and {{company.name}} that resolve automatically on dispatch.',
                'Load pre-built system templates or create your own custom entries.',
              ],
              renderImage: () => (
                <ScreenFrame
                  src={TemplatesImg}
                  alt="Message Templates Panel"
                  title="Templates"
                />
              )
            },
            {
              title: '+ New Message',
              icon: Send,
              color: 'text-purple-500',
              badge: 'New Message',
              label: 'Sidebar Button',
              items: [
                'Accessible via the blue "+ New Message" button pinned at the top of the sidebar.',
                'Toggle between Single and Bulk message modes.',
                'Search or enter a recipient phone number, and select your Sender ID from the FROM field.',
                'Write your message copy with live character and credit estimates.',
                'Load a saved template, insert custom values, or apply tags before sending.',
              ],
              renderImage: () => (
                <ScreenFrame
                  src={NewMessageImg}
                  alt="New Message Composition"
                  title="New Message"
                />
              )
            },
            {
              title: 'Messages',
              icon: MessageSquare,
              color: 'text-indigo-500',
              badge: 'Direct & Bulk Messages',
              label: 'Sidebar Section',
              items: [
                'Listed in the sidebar under the MESSAGES section, below the main menu items.',
                'Direct Messages shows individual one-on-one conversation threads with contacts.',
                'Bulk Messages displays outbound campaigns sent to multiple recipients.',
                'Each conversation thread shows the contact name, last message preview, and timestamp.',
              ],
              renderImage: () => (
                <ScreenFrame
                  src={DirectBulkImg}
                  alt="Direct & Bulk Messages"
                  title="Messages — Direct & Bulk"
                />
              )
            },
            {
              title: 'Settings',
              icon: Settings,
              color: 'text-slate-500',
              badge: 'Settings',
              label: 'Sidebar Panel',
              items: [
                'Account tab — manage profile name, email address, phone number, and GoHighLevel workspace connection.',
                'Sender IDs tab — view, request, and manage approved sender ID masks used for outbound messages.',
                'Notifications tab — configure low-balance email alerts and set the credit threshold trigger level.',
                'Credits tab — monitor your SMS credit balance, choose a top-up package, and review recent transactions.',
              ],
              renderImage: () => <SettingsTabViewer />
            }
          ].map((menu, idx) => {
            const Icon = menu.icon;
            return (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111827] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm shadow-[#0F172A]/2 space-y-5">

                {/* Screenshot on top */}
                <div className="w-full">
                  {menu.renderImage()}
                </div>

                {/* Header: icon + badge */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                    <Icon className={`h-5 w-5 ${menu.color}`} />
                  </div>
                  <h4 className="text-[16px] font-black text-slate-900 dark:text-white leading-tight">
                    {menu.badge}
                  </h4>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {menu.items.map((item, subIdx) => (
                    <li key={subIdx} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>
      </section>

      {/* SUCCESS OUTCOME */}
      <section id="dashboard-expected-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="text-[13.5px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wide mb-0.5">Expected Outcome</p>
            <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
              With a clear understanding of the dashboard highlights and sidebar panel functionalities, you can confidently manage contacts, templates, SMS credits, and outbound messaging from the NOLA SMS Pro workspace.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import type { DocPage } from '../../data/docsData';
import {
  CreditCard,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  CheckCheck,
  UserPlus,
  PlusCircle,
  Search,
  Shield,
  FileText,
  Hash,
  Send,
  Play,
  ClipboardList,
  Maximize2,
  X
} from 'lucide-react';

// Import images directly
import AddContactBtnImg from '../../assets/Send Your First SMS/Add Contact Button.png';
import AddContactModalImg from '../../assets/Send Your First SMS/Add Contact Modal.png';
import NewMessageBtnImg from '../../assets/Send Your First SMS/New Message Button.png';
import ToImg from '../../assets/Send Your First SMS/TO.png';
import FromImg from '../../assets/Send Your First SMS/FROM.png';
import TestMsgImg from '../../assets/Send Your First SMS/Test Message.png';
import CharCountImg from '../../assets/Send Your First SMS/Character Count.png';
import SendBtnImg from '../../assets/Send Your First SMS/Send Button.png';
import SendingImg from '../../assets/Send Your First SMS/Sending.png';
import SentImg from '../../assets/Send Your First SMS/Sent.png';
import AuditImg from '../../assets/Send Your First SMS/Audit.png';

interface Props { page: DocPage; }

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

/* ─── Standard Screenshot Card Frame ───────────────────── */
interface ScreenFrameProps {
  src: string;
  alt: string;
  title: string;
  onOpenLightbox: (src: string) => void;
}

const ScreenFrame: React.FC<ScreenFrameProps> = ({ src, alt, title, onOpenLightbox }) => {
  return (
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
          onClick={() => onOpenLightbox(src)}
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
        onClick={() => onOpenLightbox(src)}
        aria-label={`View ${alt} full size`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
        />
      </button>
    </div>
  );
};

/* ─── Step 1 Tabbed Image Viewer ────────────────────────── */
const Step1ImageViewer: React.FC<{ onOpenLightbox: (src: string) => void }> = ({ onOpenLightbox }) => {
  const tabs = [
    { label: 'Add Contact Button', img: AddContactBtnImg },
    { label: 'Add Contact Modal', img: AddContactModalImg },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3 w-full">
      <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 w-fit">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-black tracking-wide transition-all ${
              idx === active
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ScreenFrame
        src={tabs[active].img}
        alt={tabs[active].label}
        title={tabs[active].label}
        onOpenLightbox={onOpenLightbox}
      />
    </div>
  );
};

/* ─── Step 9 Tabbed Image Viewer ────────────────────────── */
const Step9ImageViewer: React.FC<{ onOpenLightbox: (src: string) => void }> = ({ onOpenLightbox }) => {
  const tabs = [
    { label: 'Outbox Thread status', img: SentImg },
    { label: 'Outbox Logs Audit', img: AuditImg },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3 w-full">
      <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 w-fit">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-black tracking-wide transition-all ${
              idx === active
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ScreenFrame
        src={tabs[active].img}
        alt={tabs[active].label}
        title={tabs[active].label}
        onOpenLightbox={onOpenLightbox}
      />
    </div>
  );
};

const deliveryStatuses = [
  { label: 'Sending', color: 'amber', dot: 'bg-amber-500', desc: 'Message is queued and in transit to the gateway.' },
  { label: 'Sent / Success', color: 'emerald', dot: 'bg-emerald-500', desc: 'Successfully accepted by the carrier aggregator for handset delivery.' },
  { label: 'Failed', color: 'rose', dot: 'bg-rose-500', desc: 'Delivery aborted. Check credits balance or error reasons under Settings > Credits.' },
];

export const SendFirstSMSContent: React.FC<Props> = ({ page }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  const steps = [
    {
      title: 'Create or Select a Test Contact',
      icon: UserPlus,
      color: 'text-emerald-500',
      desc: 'Navigate to Contacts from the sidebar. If no contacts are synced yet from HighLevel, click Add Contact. Save a test contact with your own mobile number using a valid Philippine format (09XXXXXXXXX).',
      renderImage: () => <Step1ImageViewer onOpenLightbox={openLightbox} />
    },
    {
      title: 'Open the Composer',
      icon: PlusCircle,
      color: 'text-blue-500',
      desc: 'Click the blue "+ New Message" button pinned at the top of your left sidebar.',
      renderImage: () => <ScreenFrame src={NewMessageBtnImg} alt="New Message Button" title="New Message Button" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Select your Recipient',
      icon: Search,
      color: 'text-purple-500',
      desc: 'In the "TO" input field, type your test contact\'s name or phone number and select them from the search results.',
      renderImage: () => <ScreenFrame src={ToImg} alt="TO Recipient" title="TO Input Field" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Select Sender ID',
      icon: Shield,
      color: 'text-teal-500',
      desc: 'Check the "FROM" field. Keep the default system sender mask NOLASMSPro selected (or choose your approved custom Sender ID).',
      renderImage: () => <ScreenFrame src={FromImg} alt="FROM Sender ID" title="FROM Dropdown" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Compose a Natural Test Message',
      icon: FileText,
      color: 'text-amber-500',
      desc: 'Type a complete sentence (e.g. "Hi, this is Norwin from NOLA Car Rental. Just verifying that our text notification line is active. Have a great day!"). Alphanumeric Sender IDs support outbound routing only; do not reply.',
      renderImage: () => <ScreenFrame src={TestMsgImg} alt="Test Message text" title="Message Box" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Check Characters & Credit Cost',
      icon: Hash,
      color: 'text-indigo-500',
      desc: 'Look at the estimator in the composer toolbar. Standard Latin characters allow up to 160 characters per segment. Adding emojis or special characters switches to Unicode, which reduces the limit to 70 characters.',
      renderImage: () => <ScreenFrame src={CharCountImg} alt="Character Count toolbar" title="Characters & Credits Count" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Click Send',
      icon: Send,
      color: 'text-blue-600',
      desc: 'Click the Send button. The composer immediately dispatches the message and shifts your view to the active chat conversation thread.',
      renderImage: () => <ScreenFrame src={SendBtnImg} alt="Send Button" title="Send SMS" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Verify Handset Delivery',
      icon: Play,
      color: 'text-rose-500',
      desc: 'Wait a few seconds and confirm the SMS arrives successfully on your physical test mobile handset.',
      renderImage: () => <ScreenFrame src={SendingImg} alt="Sending status animation" title="In-flight dispatch" onOpenLightbox={openLightbox} />
    },
    {
      title: 'Audit Delivery Status',
      icon: ClipboardList,
      color: 'text-slate-500',
      desc: 'Check the status tag under the chat bubble in your active thread. Alternatively, check your transaction history under Settings > Credits for a detailed breakdown.',
      renderImage: () => <Step9ImageViewer onOpenLightbox={openLightbox} />
    }
  ];

  return (
    <div className="w-full space-y-12 pb-10">

      {/* PRE-FLIGHT CHECKLIST */}
      <section id="send-preflight" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Pre-flight checklist</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          Before launching campaign-level outreach, we recommend dispatching a single test SMS to a mobile device you control. This allows you to verify credits debiting, carrier aggregator speed, and GoHighLevel\'s native conversations sync under real conditions.
        </p>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          Please confirm that you have completed all of the following prerequisites before proceeding with your first test flight:
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/30 space-y-3">
          {[
            { icon: <CreditCard className="h-4 w-4" />, label: 'Available SMS credits', sub: 'New accounts receive 10 free trial credits upon registration' },
            { icon: <Smartphone className="h-4 w-4" />, label: 'Test contact with valid PH number', sub: 'Format: 09XXXXXXXXX, 9XXXXXXXXX, or 639XXXXXXXXX' },
            { icon: <CheckCircle2 className="h-4 w-4" />, label: 'Active HighLevel connection', sub: 'API connected status with verified subaccount location ID' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                {item.icon}
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight">{item.label}</p>
                <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTBOUND WARNING */}
      <section id="send-oneway-note">
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/40 border-l-4 border-l-blue-500 dark:border-l-blue-600 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-blue-600 dark:text-blue-400 font-bold text-[15px] flex-shrink-0">ℹ</span>
            <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-200">
              <strong>One-way messaging:</strong> Alphanumeric Sender IDs like NOLASMSPro support outbound routing only. Recipients cannot reply. Verify physical delivery directly by checking your handset.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="send-steps" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Sending steps</h2>
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111827] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm shadow-[#0F172A]/2 space-y-5">
                
                {/* Screenshot on top */}
                <div className="w-full">
                  {step.renderImage()}
                </div>

                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                  <h4 className="text-[16px] font-black text-slate-900 dark:text-white leading-tight">
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium pl-1">
                  {step.desc}
                </p>

                {/* Combined Segment Reference inside Step 6 */}
                {idx === 5 && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/30 p-5 dark:border-slate-800 dark:bg-slate-900/10 space-y-3">
                    <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">Character segment reference</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { enc: 'GSM (Standard Latin)', chars: '160 chars = 1 credit', note: 'Letters, numbers, basic punctuation' },
                        { enc: 'Unicode (Emoji/Accented)', chars: '70 chars = 1 credit', note: 'Emojis reduce maximum segment limit' },
                      ].map((row) => (
                        <div key={row.enc} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#111827] shadow-sm">
                          <p className="text-[13px] font-black text-slate-900 dark:text-white leading-tight">{row.enc}</p>
                          <p className="text-[12.5px] font-bold text-blue-600 dark:text-blue-400 mt-1">{row.chars}</p>
                          <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-0.5">{row.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </section>

      {/* SPAM WARNING */}
      <section id="send-spam-warning">
        <div className="flex items-start gap-3.5 rounded-xl border border-amber-200 bg-amber-50/40 px-5 py-4 dark:border-amber-900/40 dark:bg-amber-950/10">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <p className="text-[13.5px] font-black text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-1">Avoid generic test keywords</p>
            <p className="text-[13px] leading-relaxed text-amber-700 dark:text-amber-400 font-medium">
              Carrier spam filters may block messages containing only "test", "sms", or "hello". Always send a natural, complete sentence. If delivery fails, do not click Send repeatedly — verify your credit balance, recipient format, or check logs.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY STATUS LEGEND */}
      <section id="send-status-legend" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Delivery status legend</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {deliveryStatuses.map((status) => (
            <div key={status.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#111827]">
              <span className={`mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0 ${status.dot}`} />
              <div>
                <p className="text-[13.5px] font-black text-slate-900 dark:text-white leading-tight">{status.label}</p>
                <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5">{status.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS */}
      <section id="send-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="text-[13.5px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wide mb-0.5">Expected outcome</p>
            <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
              Once your test SMS is received and active thread status shows Sent, your setup is complete and you\'re ready for normal messaging operations.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <ImageLightbox
          src={lightboxSrc}
          alt="Full size screenshot"
          onClose={closeLightbox}
        />
      )}

    </div>
  );
};

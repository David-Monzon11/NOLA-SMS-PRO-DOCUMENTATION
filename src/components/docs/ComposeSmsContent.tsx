import React, { useState, useEffect } from 'react';
import type { DocPage } from '../../data/docsData';
import {
  Users,
  ArrowRightLeft,
  FileText,
  Hash,
  Send,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  CheckCheck,
  Maximize2,
  X,
  Code
} from 'lucide-react';

// Import images directly from assets
import SelectRecipientsImg from '../../assets/Compose SMS/Select Recipient(s).png';
import ChooseComposeModeImg from '../../assets/Compose SMS/Choose Compose Mode.png';
import PersonalizeImg from '../../assets/Compose SMS/Personalize Your Message.png';
import VerifyCostImg from '../../assets/Compose SMS/Verify Cost & Segments.png';
import SendConfirmImg from '../../assets/Compose SMS/Send & Confirm.png';

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
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/80 hover:text-white text-[12px] font-semibold transition-colors"
        >
          <X className="h-4 w-4" />
          Close
        </button>
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
      <button
        className="block w-full cursor-zoom-in focus:outline-none"
        onClick={() => onOpenLightbox(src)}
        aria-label={`View ${alt} full size`}
      >
        <img src={src} alt={alt} className="w-full h-auto block" />
      </button>
    </div>
  );
};

export const ComposeSmsContent: React.FC<Props> = ({ page }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  const steps = [
    {
      title: 'Select Recipient(s)',
      icon: Users,
      color: 'text-blue-500',
      img: SelectRecipientsImg,
      imgTitle: 'Select Recipient(s)',
      desc: 'Click the recipient search field at the top of the Compose pane. Type a contact name or phone number and select from the results. You can add multiple recipients to automatically activate Bulk mode.',
    },
    {
      title: 'Choose Compose Mode',
      icon: ArrowRightLeft,
      color: 'text-purple-500',
      img: ChooseComposeModeImg,
      imgTitle: 'Choose Compose Mode',
      desc: 'Single mode opens a direct one-on-one chat thread with the selected contact. Bulk mode sends one message to multiple recipients simultaneously, each dispatched as an individual SMS.',
      note: 'The composer automatically switches to Bulk mode when you add a second recipient. You can also toggle manually.',
    },
    {
      title: 'Personalize Your Message',
      icon: FileText,
      color: 'text-amber-500',
      img: PersonalizeImg,
      imgTitle: 'Personalize Your Message',
      desc: 'Type your message in the text area. Click the Variables button in the toolbar to insert GHL merge fields — such as {{contact.first_name}}, {{contact.name}}, {{contact.phone}}, or {{company.name}} — that auto-fill per recipient on send. You can also click the Templates icon to load a pre-built message directly into the field.',
    },
    {
      title: 'Verify Cost & Segments',
      icon: Hash,
      color: 'text-indigo-500',
      img: VerifyCostImg,
      imgTitle: 'Verify Cost & Segments',
      desc: 'The segment counter at the bottom of the compose area calculates credit cost in real time. Standard GSM-7 Latin characters allow 160 characters per segment (1 credit). Adding emojis, accented letters, or special symbols switches encoding to Unicode, reducing the limit to 70 characters per segment.',
      extra: [
        { enc: 'GSM-7 (Standard)', chars: '160 chars = 1 credit', note: 'Plain letters, numbers, punctuation' },
        { enc: 'Unicode (Emoji / Special)', chars: '70 chars = 1 credit', note: 'Emojis reduce per-segment character limit' },
      ],
    },
    {
      title: 'Send & Confirm',
      icon: Send,
      color: 'text-emerald-500',
      img: SendConfirmImg,
      imgTitle: 'Send & Confirm',
      desc: 'Click Send. For single messages, the outbox is dispatched immediately and the chat thread updates. For bulk sends with multiple recipients, a confirmation sheet slides up showing the unique recipient count, duplicate exclusions, total segments, and estimated credit cost — click Confirm to dispatch.',
    },
  ];

  const prerequisites = [
    { icon: <Users className="h-4 w-4" />, label: 'Synced or manual contacts', sub: 'Contacts imported from GHL or added manually in the Contacts panel.' },
    { icon: <CreditCard className="h-4 w-4" />, label: 'SMS Credits available', sub: 'Credits are deducted per segment, per unique recipient.' },
    { icon: <ShieldCheck className="h-4 w-4" />, label: 'Active Sender ID', sub: 'NOLASMSPro is the default. Custom IDs must be approved in Settings › Sender IDs.' },
  ];

  return (
    <div className="w-full space-y-12 pb-10">

      {/* OVERVIEW */}
      <section id="compose-overview" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Compose SMS overview</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          The Compose pane is the core workspace for sending SMS inside NOLA SMS Pro. It supports both direct one-on-one threads and bulk campaigns, with live segment estimation, variable personalization, and a built-in confirmation sheet for bulk dispatches.
        </p>

        {/* PRE-FLIGHT CHECKLIST */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {[
            { icon: <Users className="h-5 w-5 text-blue-500" />, label: 'Synced or manual contacts', sub: 'Contacts imported from GHL or added manually in the Contacts panel.' },
            { icon: <CreditCard className="h-5 w-5 text-amber-500" />, label: 'SMS Credits available', sub: 'Credits are deducted per segment, per unique recipient.' },
            { icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />, label: 'Active Sender ID', sub: 'NOLASMSPro is default. Custom IDs must be approved in Settings › Sender IDs.' },
          ].map((item) => (
            <div key={item.label} className="premium-card flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  {item.label}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONE-WAY NOTE */}
      <section id="compose-oneway-note">
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/40 border-l-4 border-l-blue-500 dark:border-l-blue-600 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-blue-600 dark:text-blue-400 font-bold text-[15px] flex-shrink-0">ℹ</span>
            <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-200">
              <strong>One-way messaging:</strong> Alphanumeric Sender IDs like NOLASMSPro support outbound routing only. Recipients cannot reply to your messages directly on their handsets.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="compose-steps" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Compose &amp; send workflow</h2>
        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111827] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm shadow-[#0F172A]/2 space-y-5"
              >
                {/* Screenshot on top */}
                <div className="w-full">
                  <ScreenFrame
                    src={step.img}
                    alt={step.title}
                    title={step.imgTitle}
                    onOpenLightbox={openLightbox}
                  />
                </div>

                {/* Header: Icon + Step + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                  <h4 className="text-[16px] font-black text-slate-900 dark:text-white leading-tight">
                    Step {idx + 1}: {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium pl-1">
                  {step.desc}
                </p>

                {/* Inline note (optional) */}
                {'note' in step && step.note && (
                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3 dark:border-amber-900/40 dark:bg-amber-950/10">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                    <p className="text-[12.5px] leading-relaxed text-amber-800 dark:text-amber-300 font-semibold">{step.note}</p>
                  </div>
                )}

                {/* Segment reference table (Step 4 only) */}
                {'extra' in step && step.extra && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/30 p-5 dark:border-slate-800 dark:bg-slate-900/10 space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-3.5 w-3.5 text-slate-400" />
                      <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">Character segment reference</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {step.extra.map((row) => (
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

      {/* SUCCESS */}
      <section id="compose-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <div>
            <p className="text-[13.5px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wide mb-0.5">Expected outcome</p>
            <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
              Outbound messages are queued immediately, SMS credits are deducted per unique recipient per segment, and delivery status updates appear in real time inside the active chat thread.
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

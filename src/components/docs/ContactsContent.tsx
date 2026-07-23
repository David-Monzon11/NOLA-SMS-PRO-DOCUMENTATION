import React, { useState, useEffect } from 'react';
import type { DocPage } from '../../data/docsData';
import {
  Search,
  UserPlus,
  RefreshCw,
  Store,
  AlertTriangle,
  Lightbulb,
  CheckCheck,
  Compass,
  UserCheck,
  User,
  Smartphone,
  Check,
  Maximize2,
  X,
  LayoutDashboard
} from 'lucide-react';

// ─── Asset imports (Vite resolves, hashes, and bundles these correctly) ───────
import OpenContactsMenuImg from '../../assets/Contacts/Open Contacts Menu.png';
import SearchContactsImg from '../../assets/Contacts/Search Contacts.png';
import SelectRecipientImg from '../../assets/Contacts/Select Recipient.png';
import ClickAddContactImg from '../../assets/Contacts/Click Add Contact.png';
import EnterNameImg from '../../assets/Contacts/Enter Name.png';
import EnterPhoneNumberImg from '../../assets/Contacts/Enter Phone Number.png';
import SaveContactImg from '../../assets/Contacts/Save Contact.png';

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

export const ContactsContent: React.FC<Props> = ({ page }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  const lookupSteps = [
    {
      n: 1,
      title: 'Open Contacts Menu',
      desc: 'Click Contacts from the left navigation panel inside NOLA SMS Pro.',
      img: OpenContactsMenuImg,
      alt: 'Open Contacts Menu',
      icon: LayoutDashboard,
      color: 'text-blue-500',
    },
    {
      n: 2,
      title: 'Search Contacts',
      desc: 'Use the search bar at the top of the contacts list to find a contact by name or phone number.',
      img: SearchContactsImg,
      alt: 'Search Contacts',
      icon: Search,
      color: 'text-purple-500',
    },
    {
      n: 3,
      title: 'Select Recipient',
      desc: 'Click on a contact from the results to open their profile and start messaging.',
      img: SelectRecipientImg,
      alt: 'Select Recipient',
      icon: UserCheck,
      color: 'text-emerald-500',
    },
  ];

  const addSteps = [
    {
      n: 1,
      title: 'Click Add Contact',
      desc: 'In the Contacts panel, click the Add Contact button to open the creation form.',
      img: ClickAddContactImg,
      alt: 'Click Add Contact',
      icon: UserPlus,
      color: 'text-blue-500',
    },
    {
      n: 2,
      title: 'Enter Name',
      desc: "Enter the contact's first and last name in the provided fields.",
      img: EnterNameImg,
      alt: 'Enter Name',
      icon: User,
      color: 'text-indigo-500',
    },
    {
      n: 3,
      title: 'Enter Phone Number',
      desc: 'Enter a valid Philippine mobile number using the format 09XXXXXXXXX. No hyphens or country codes.',
      img: EnterPhoneNumberImg,
      alt: 'Enter Phone Number',
      icon: Smartphone,
      color: 'text-teal-500',
    },
    {
      n: 4,
      title: 'Save Contact',
      desc: 'Click Save to create the contact. It will sync automatically to your GoHighLevel CRM.',
      img: SaveContactImg,
      alt: 'Save Contact',
      icon: Check,
      color: 'text-emerald-500',
    },
  ];

  const validationRules = [
    { field: 'Phone format', rule: '09XXXXXXXXX', note: 'No country code prefix, no hyphens or spaces' },
    { field: 'Hyphens', rule: 'Not allowed', note: 'e.g. 0912-345-6789 will fail validation' },
    { field: 'Country code', rule: 'Not allowed', note: 'e.g. +639... will fail validation' },
    { field: 'Digits', rule: '11 digits required', note: 'Must start with 09' },
  ];

  return (
    <div className="w-full space-y-12 pb-10">

      {/* FEATURE OVERVIEW */}
      <section id="contacts-overview" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Contacts module overview</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          The Contacts panel displays a real-time list of customer records synced directly from your HighLevel sub-account location. This allows you to select recipients instantly without manual database exports.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <RefreshCw className="h-5 w-5 text-emerald-500" />, label: 'Auto-sync', desc: 'Contacts sync automatically from your active HighLevel location.' },
            { icon: <Search className="h-5 w-5 text-blue-500" />, label: 'Searchable', desc: 'Find any contact by name or phone number instantly.' },
            { icon: <UserPlus className="h-5 w-5 text-purple-500" />, label: 'Addable', desc: 'Create new contacts directly and sync back to your CRM.' },
          ].map((cap) => (
            <div key={cap.label} className="premium-card flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  {cap.icon}
                </div>
                <h3 className="text-[15px] font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">{cap.label}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREREQUISITES */}
      <section id="contacts-prerequisites" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Prerequisites</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Store className="h-4 w-4" />, label: 'Marketplace Install', detail: 'Successful installation and authorization of the NOLA SMS Pro app.' },
            { icon: <RefreshCw className="h-4 w-4" />, label: 'Active Integration', detail: 'Active HighLevel sub-account with API Connected status in Settings.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/30">
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100/50 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                {item.icon}
              </div>
              <div>
                <p className="text-[13.5px] font-black text-slate-900 dark:text-white">{item.label}</p>
                <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-TRACK WORKFLOWS — Exact styling matching send-your-first-sms */}
      <section id="contacts-workflows" className="space-y-12">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Contact workflows</h2>

        {/* LOOK UP */}
        <div className="space-y-6">
          {/* Section banner */}
          <div className="flex items-center gap-4 rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-gradient-to-r from-blue-50 to-sky-50/60 dark:from-blue-950/30 dark:to-slate-900/40 px-5 py-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800/50">
              <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 dark:text-blue-400 mb-0.5">Workflow A</span>
              <h3 className="text-[17px] font-black text-slate-900 dark:text-white leading-tight">Look up a contact</h3>
            </div>
          </div>
          <div className="space-y-8">
            {lookupSteps.map((step, idx) => {
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
                      alt={step.alt}
                      title={step.title}
                      onOpenLightbox={openLightbox}
                    />
                  </div>

                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                    <h4 className="text-[16px] font-black text-slate-900 dark:text-white leading-tight">
                      Step {step.n}: {step.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium pl-1">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          <span className="flex-shrink-0 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            or
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* ADD NEW */}
        <div className="space-y-6">
          {/* Section banner */}
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-r from-emerald-50 to-teal-50/60 dark:from-emerald-950/30 dark:to-slate-900/40 px-5 py-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800/50">
              <UserPlus className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.15em] text-emerald-500 dark:text-emerald-400 mb-0.5">Workflow B</span>
              <h3 className="text-[17px] font-black text-slate-900 dark:text-white leading-tight">Add a new contact</h3>
            </div>
          </div>
          <div className="space-y-8">
            {addSteps.map((step, idx) => {
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
                      alt={step.alt}
                      title={step.title}
                      onOpenLightbox={openLightbox}
                    />
                  </div>

                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50">
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                    <h4 className="text-[16px] font-black text-slate-900 dark:text-white leading-tight">
                      Step {step.n}: {step.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-400 font-medium pl-1">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* VALIDATION REFERENCE TABLE */}
      <section id="contacts-validation" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Phone number validation rules</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800">
                <th className="px-5 py-3.5 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Field</th>
                <th className="px-5 py-3.5 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Rule</th>
                <th className="px-5 py-3.5 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider hidden sm:table-cell">Note</th>
              </tr>
            </thead>
            <tbody>
              {validationRules.map((row, idx) => (
                <tr key={row.field} className={`border-b border-slate-100 dark:border-slate-900/50 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0c1220]/20' : 'bg-slate-50/20 dark:bg-slate-900/20'}`}>
                  <td className="px-5 py-3.5 text-[13.5px] font-bold text-slate-900 dark:text-white">{row.field}</td>
                  <td className="px-5 py-3.5 text-[13px] font-mono font-semibold text-blue-600 dark:text-blue-400">{row.rule}</td>
                  <td className="px-5 py-3.5 text-[12.5px] text-slate-500 dark:text-slate-400 hidden sm:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/40 border-l-4 border-l-blue-500 dark:border-l-blue-600 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] p-6 shadow-sm space-y-3 mt-4">
          <div className="flex items-start gap-2.5">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-250">
              Contacts sync automatically using the active location ID. Modify a contact in GoHighLevel and the update will reflect in NOLA SMS Pro within seconds.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
            <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-250">
              Ensure GHL Marketplace scopes include <code className="text-[12px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-slate-200">contacts.readonly</code> for real-time contact retrieval.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section id="contacts-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            Synchronized contacts are immediately available for searching, viewing, and selecting when composing new SMS messages.
          </p>
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

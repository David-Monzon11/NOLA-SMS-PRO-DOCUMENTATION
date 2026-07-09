import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, MessageSquare, ShieldCheck, CreditCard, BarChart3, 
  Smartphone, CheckCircle, ArrowRight, Sparkles, AlertCircle,
  Search, Users, Plus, FileText, Send, CheckCircle2, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation wrapper for sections
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export const WelcomePresentation: React.FC = () => {
  return (
    <div className="w-full space-y-20 pb-16">
      
      {/* ── 1. Hero / Introduction ── */}
      <ScrollReveal>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#1F5AAE] to-[#4F8EF7] text-white p-8 md:p-12 shadow-2xl">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Guide</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
              Streamline Business Texting Inside GoHighLevel
            </h2>
            
            <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl">
              NOLA SMS Pro embeds directly into your workspace. Send texts, request alphanumeric Sender IDs, 
              manage templates, and monitor credits in real time without leaving your CRM.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-2xl md:text-3xl font-black block">98%</span>
                <span className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">SMS Open Rate</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-2xl md:text-3xl font-black block">3 Min</span>
                <span className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">Average Read Time</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-2xl md:text-3xl font-black block">100%</span>
                <span className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">Embedded UI</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-2xl md:text-3xl font-black block">Direct</span>
                <span className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">Carrier Routes</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 2. What is NOLA SMS Pro Section ── */}
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider block">Overview</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Native Communications Integration
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              Unlike traditional external messaging aggregators, NOLA SMS Pro exists entirely within GoHighLevel.
              It eliminates friction by syncing directly with your active location resources.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Zero Contact Synchronization Overhead</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Write and search names directly from your contact database. No importing, CSV formatting, or duplicate registers.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Carrier-Approved Branding</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Avoid standard filter blocks. Submit custom company names to carriers directly inside the application interface.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Browser Interface Placeholder Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0C0F1A] shadow-xl p-4 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/60 px-4 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="h-4 w-44 bg-slate-200/60 dark:bg-slate-800 rounded-md ml-3 text-[9px] text-slate-400 dark:text-slate-500 flex items-center px-2 font-mono truncate">
                  app.gohighlevel.com/location/nola-sms-pro
                </div>
              </div>
              <div className="mt-8 flex gap-3 h-full pt-1">
                {/* Mimic GoHighLevel Sidebar */}
                <div className="w-20 border-r border-slate-100 dark:border-slate-800/60 pr-2 space-y-2 pt-2">
                  <div className="h-2 w-14 bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-2 w-12 bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-5 w-16 bg-[#1F5AAE]/10 dark:bg-[#4F8EF7]/10 border border-[#1F5AAE]/20 dark:border-[#4F8EF7]/20 rounded-md flex items-center justify-center">
                    <span className="text-[7px] font-bold text-[#1F5AAE] dark:text-[#4F8EF7] tracking-tight">NOLA SMS</span>
                  </div>
                  <div className="h-2 w-11 bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-2 w-15 bg-slate-100 dark:bg-slate-800 rounded" />
                </div>
                {/* Content Workspace Mimic */}
                <div className="flex-1 pt-2 space-y-3 pr-2">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-[#1F5AAE] dark:bg-[#4F8EF7] rounded-md" />
                    <div className="h-4 w-12 bg-slate-100 dark:bg-slate-800 rounded-md" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-xl p-2 space-y-1">
                      <div className="h-1.5 w-8 bg-slate-200 dark:bg-slate-800 rounded" />
                      <div className="h-3 w-12 bg-[#1F5AAE]/60 dark:bg-[#4F8EF7]/60 rounded" />
                    </div>
                    <div className="h-10 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-xl p-2 space-y-1">
                      <div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
                      <div className="h-3 w-16 bg-slate-300 dark:bg-slate-700 rounded" />
                    </div>
                  </div>
                  <div className="h-24 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-xl p-3 space-y-2">
                    <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-1.5 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
                    <div className="h-4 w-14 bg-[#1f5aae] rounded ml-auto" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0C0F1A] via-transparent to-transparent flex items-end justify-center pb-6">
                <div className="px-3 py-1.5 bg-[#DCEEFF] dark:bg-[#1f5aae]/40 border border-[#4F8EF7]/20 text-[#1F5AAE] dark:text-[#4F8EF7] text-[10px] font-bold uppercase tracking-wider rounded-xl backdrop-blur-md shadow-md">
                  GHL Integrated Workspace
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 3. Key Features with Interactive Mimics ── */}
      <div className="space-y-10">
        <ScrollReveal>
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider block">Features & Layouts</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Instructional Layouts
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Visual instruction placeholders representing how the actual workspaces behave inside NOLA SMS Pro.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: Contacts Integration */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">1. Contacts & Local Formatting</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-450 leading-relaxed">
                    Always format mobile numbers using the 11-digit format starting with <strong className="text-blue-500 dark:text-blue-400">09</strong> (e.g. 09171234567).
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container (Image container mimic) */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-3 shadow-md relative overflow-hidden h-48 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Contacts Workspace</span>
                  <button className="h-5 px-2 bg-blue-500 text-white rounded text-[9px] font-bold flex items-center gap-1">
                    <Plus className="h-2.5 w-2.5" /> Add Contact
                  </button>
                </div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2 h-3 w-3 text-slate-400" />
                  <input 
                    type="text" 
                    readOnly
                    placeholder="Search contact database..." 
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg py-1.5 pl-8 pr-3 text-[10px] outline-none text-slate-400"
                  />
                </div>
                <div className="space-y-1.5 overflow-y-auto flex-1">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Juan dela Cruz</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">09171234567</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 opacity-60">
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Maria Clara</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-850 px-1.5 py-0.5 rounded">09187654321</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2: Sender ID Registration */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">2. Sender ID & Approvals</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-450 leading-relaxed">
                    Custom Sender IDs replace default numbers. Submit requests and track carrier approvals.
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-2 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sender ID Request Form</span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wide bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded-full">Requires Approval</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-0.5">Alphanumeric Sender ID (Max 11 chars)</label>
                    <input 
                      type="text" 
                      readOnly
                      value="NOLASMS"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg py-1 px-2.5 text-[10px] font-bold font-mono outline-none text-[#1F5AAE] dark:text-[#4F8EF7]"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-0.5">Purpose & Description</label>
                    <div className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg py-1 px-2.5 text-[9px] text-slate-500 select-none">
                      Clinic appointment reminders for Santos Dental.
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[9px] text-slate-400">Carrier registration: <strong>2-3 days</strong></span>
                  <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">Status: Approved</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3: Template Library */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">3. SMS Templates Manager</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-455 leading-relaxed">
                    Create reusable template categories (Appointments, Promos) for standard automated templates.
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-2.5 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Save Template</span>
                  <span className="text-[8px] font-bold text-slate-500">Category: Alerts</span>
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-[9px] font-bold text-slate-400 block">Template Name:</span>
                  <div className="text-[10px] font-semibold text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded p-1.5">
                    Appointment Booking Alert
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 block mt-1">Message Body:</span>
                  <div className="text-[10px] text-slate-550 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded p-2 leading-relaxed font-mono">
                    Hi Santos Dental patient, your booking schedule is confirmed on date.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4: Individual & Bulk Sends */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">4. Compose (Individual & Bulk)</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-455 leading-relaxed">
                    Broadcast texts to multiple selected CRM contacts. Built-in character length segmentation guides.
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-2.5 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Compose Box</span>
                  <div className="flex gap-1">
                    <span className="text-[8px] font-extrabold uppercase bg-blue-50 text-[#1F5AAE] px-1 rounded">Individual</span>
                    <span className="text-[8px] font-extrabold uppercase bg-[#1F5AAE] text-white px-1 rounded">Bulk</span>
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-slate-400">Selected Recipients:</span>
                    <strong className="text-slate-700 dark:text-slate-350">145 contacts</strong>
                  </div>
                  <div className="h-14 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded p-1.5 text-[9px] text-slate-500 leading-normal font-mono select-none">
                    Welcome to NOLA SMS Pro! Please read details...
                  </div>
                  <div className="flex justify-between items-center text-[9px] pt-1">
                    <span className="text-slate-400">Total Characters: <strong>49/160</strong></span>
                    <span className="text-slate-400">Estimated Cost: <strong className="text-blue-500">145 Credits</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 5: Credits Monitoring */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">5. Live Credit Ledger</h4>
                  <p className="text-xs text-slate-450 dark:text-slate-455 leading-relaxed">
                    Check remaining allocations, review refill receipts, and set custom low-balance alerts.
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-2.5 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Credits Status</span>
                  <button className="h-5 px-2 border border-slate-200 hover:border-slate-300 dark:border-slate-800 rounded text-[9px] font-bold text-slate-500 flex items-center gap-1">
                    <RefreshCw className="h-2.5 w-2.5" /> Sync
                  </button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wide block">Credits Balance</span>
                    <span className="text-2xl font-black text-slate-800 dark:text-white">4,850</span>
                  </div>
                  <button className="h-7 px-3 bg-[#1F5AAE] text-white rounded-lg text-[10px] font-bold hover:bg-[#174d99] transition-colors">
                    Request Refill
                  </button>
                </div>
                <div className="text-[9px] border-t border-slate-100 dark:border-slate-800/60 pt-2 flex justify-between text-slate-500">
                  <span>Last refill: <strong>+1,000 Credits</strong></span>
                  <span>July 9, 2026</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 6: Analytics & Status */}
          <ScrollReveal>
            <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">6. Message History & Logs</h4>
                  <p className="text-xs text-slate-455 dark:text-slate-450 leading-relaxed">
                    Trace sending progression (Sent, Failed, Delivering) along with specific network failure statements.
                  </p>
                </div>
              </div>

              {/* Placeholder Instruction Container */}
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#090C15] p-4 space-y-3 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Message Logs</span>
                  <span className="text-[8px] text-slate-400">Total Sent: 1,402</span>
                </div>
                <div className="space-y-1.5 flex-1 pt-1">
                  <div className="flex items-center justify-between text-[9px] p-1 border-b border-slate-50 dark:border-slate-900">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">09171234567</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400 font-mono">1 segment</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600 font-bold">Sent</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[9px] p-1 border-b border-slate-50 dark:border-slate-900">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">09187654321</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400 font-mono">2 segments</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-600 font-bold">Failed</span>
                    </div>
                  </div>
                </div>
                <p className="text-[8px] text-slate-450 dark:text-slate-500 italic text-center">
                  Hover over Failed badges to display carrier rejection error reasons.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ── 4. Strategic Benefits ── */}
      <ScrollReveal>
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider block">Benefits</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Businesses Choose NOLA
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0C0F1A] flex gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Engage Customers Immediately</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  SMS enjoys response ratios 5x higher than typical emails. Connect with customer mobile contacts within 3 minutes of dispatcher queues.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0C0F1A] flex gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">No Application Switching</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Send texts, submit brand names, and manage credits directly on the location side panel without leaving GHL dashboard panels.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0C0F1A] flex gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Alphanumeric Identification</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Avoid anonymous and suspicious number listings. Alphanumeric IDs represent your brand name directly in carrier text lines.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0C0F1A] flex gap-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Clear Transaction History</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Maintain precise control of SMS expenses with transaction records, notification settings, and low-balance warnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 5. System Requirements ── */}
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Requirements Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider block">Compatibility</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                System Requirements
              </h3>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Verify your workspace properties before proceeding to the Marketplace installation menu.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/30">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Modern Browser Support</span>
                </div>
                <span className="text-[10px] text-slate-450 dark:text-slate-500 font-medium">Chrome, Safari, Firefox, Edge</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/30">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Active GoHighLevel Sub-Account</span>
                </div>
                <span className="text-[10px] text-slate-450 dark:text-slate-500 font-medium">Valid login credentials</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/30">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Marketplace Install Rights</span>
                </div>
                <span className="text-[10px] text-slate-455 dark:text-slate-500 font-medium">Administrator profile role</span>
              </div>
            </div>
            
            <div className="p-4 rounded-2xl border border-amber-100 dark:border-amber-950/20 bg-amber-50/40 dark:bg-amber-950/5 flex gap-3.5">
              <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Critical Check: Enable Pop-ups</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Stripe checkout portals and billing ledgers open in auxiliary pop-up windows. Ensure your web browser has exceptions active for GoHighLevel checkout tabs.
                </p>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1F5AAE]/5 to-[#4F8EF7]/5 dark:from-[#1F5AAE]/10 dark:to-[#4F8EF7]/5 border border-[#1F5AAE]/10 dark:border-[#4F8EF7]/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-black text-slate-800 dark:text-white leading-tight">Ready to Begin?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Step through standard marketplace authentication and login setups in the Quick Start guidelines.
              </p>
            </div>
            
            <Link
              to="/docs/quick-start"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1F5AAE] hover:bg-[#174d99] text-white text-xs font-bold rounded-xl transition-all duration-150 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 group"
            >
              <span>Go to Quick Start Guide</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};

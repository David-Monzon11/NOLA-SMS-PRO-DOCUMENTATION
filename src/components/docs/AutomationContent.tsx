import React from 'react';
import type { DocPage } from '../../data/docsData';
import { DocSection } from './layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Play, Variable, Lightbulb, CheckCheck } from 'lucide-react';

interface Props { page: DocPage; }

const steps = [
  { title: 'Create a New GHL Workflow', desc: 'Log in to GoHighLevel, navigate to the Automation tab in the left sidebar, and click "Create Workflow". Select "Start from scratch".' },
  { title: 'Configure Workflow Trigger', desc: 'Click "Add New Workflow Trigger". Select your desired trigger event, such as Customer Booked Appointment, Contact Tag Applied, or Pipeline Stage Changed.' },
  { title: 'Add NOLA SMS Action Node', desc: 'Click the "+" icon in the workflow builder. Search for "NOLA SMS Pro" at the bottom of the actions menu and select it.' },
  { title: 'Map Recipient Details', desc: 'In the custom action settings panel, map the phone number field to {{contact.phone}}. Select your approved Sender ID from the identity list.' },
  { title: 'Draft Message Payload', desc: 'Type your message text. Insert contact personalization fields dynamically (e.g. {{contact.first_name}}). Click Save.' },
  { title: 'Publish and Test', desc: 'Toggle status from Draft to Publish in the top bar. Run a test contact through your trigger steps to verify delivery.' },
];

const variables = [
  { variable: '{{contact.phone}}', use: 'Recipient phone number — required for delivery' },
  { variable: '{{contact.first_name}}', use: "Contact's first name for personalization" },
  { variable: '{{contact.last_name}}', use: "Contact's last name" },
  { variable: '{{contact.email}}', use: "Contact's email address" },
  { variable: '{{appointment.time}}', use: 'Appointment time for booking reminders' },
];

export const AutomationContent: React.FC<Props> = ({ page }) => {
  return (
    <div className="w-full space-y-12 pb-10">



      {/* ARCHITECTURE OVERVIEW */}
      <section id="automation-architecture" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">How workflow automation works</h2>
        <p className="text-[14.5px] leading-7 text-slate-700 dark:text-slate-300">
          NOLA SMS Pro integrates natively as a custom action node inside GoHighLevel Workflow Builder. When a trigger fires, NOLA resolves the contact variables, selects the Sender ID, debits credits, and dispatches the SMS automatically.
        </p>
        {/* Flow diagram */}
        <div className="flex items-center gap-2 flex-wrap rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#111827] shadow-sm overflow-x-auto">
          {[
            { icon: <Zap className="h-4 w-4" />, label: 'GHL Trigger', sub: 'Appointment, tag, stage' },
            { arrow: true },
            { icon: <Play className="h-4 w-4" />, label: 'NOLA SMS Action', sub: 'Custom workflow node' },
            { arrow: true },
            { icon: <Variable className="h-4 w-4" />, label: 'Variable Resolve', sub: 'Contact fields, sender ID' },
            { arrow: true },
            { emoji: '📨', label: 'SMS Delivered', sub: 'Carrier dispatch' },
          ].map((node, idx) => {
            if ('arrow' in node) {
              return <ArrowRight key={idx} className="h-4 w-4 text-slate-400 dark:text-slate-600 flex-shrink-0" />;
            }
            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30 px-3 py-3 min-w-[96px] text-center">
                <div className="text-slate-600 dark:text-slate-400">
                  {'icon' in node ? node.icon : <span className="text-[18px]">{node.emoji}</span>}
                </div>
                <p className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">{node.label}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500">{node.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PREREQUISITES */}
      <section id="automation-prerequisites" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Prerequisites</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Zap className="h-4 w-4" />, label: 'Workflow Access', detail: 'Administrator permissions to create and publish automation workflows in your GoHighLevel sub-account.' },
            { icon: <Play className="h-4 w-4" />, label: 'Setup Verified', detail: 'A test send has completed and your account has active SMS credits available.' },
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

      {/* WORKFLOW STEPS */}
      <section id="automation-steps" className="space-y-5">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Workflow setup steps</h2>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800/80 dark:bg-[#111827] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md group">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 text-[11px] font-black border border-slate-200 dark:border-slate-700 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <p className="text-[15px] font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VARIABLE REFERENCE TABLE */}
      <section id="automation-variables" className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Contact variable reference</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800">
                <th className="px-5 py-3.5 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Variable</th>
                <th className="px-5 py-3.5 text-[11px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Use</th>
              </tr>
            </thead>
            <tbody>
              {variables.map((row, idx) => (
                <tr key={row.variable} className={`border-b border-slate-100 dark:border-slate-900/50 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0c1220]/20' : 'bg-slate-50/20 dark:bg-slate-900/20'}`}>
                  <td className="px-5 py-3.5 font-mono text-[12.5px] font-semibold text-blue-600 dark:text-blue-400">{row.variable}</td>
                  <td className="px-5 py-3.5 text-[13px] text-slate-500 dark:text-slate-400">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section id="automation-best-practices" className="space-y-3">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Best practices</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { tip: 'Avoid sending identical bulk triggers to large lists simultaneously without consulting volume limit packages to prevent gateway spikes.' },
            { tip: 'Test custom field formats (appointment dates, billing links) in GHL before publishing to prevent blank values from breaking SMS layouts.' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-2xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-50 to-sky-50/60 dark:from-[#060E1E] dark:to-[#0A1628] px-5 py-4 shadow-sm">
              <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <p className="text-[13.5px] leading-relaxed text-slate-700 dark:text-blue-200">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS */}
      <section id="automation-outcome">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 dark:border-emerald-800/40 dark:bg-emerald-900/10">
          <CheckCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-[13.5px] leading-relaxed text-emerald-700 dark:text-emerald-400 font-medium">
            When the workflow trigger event occurs, NOLA SMS Pro executes the custom action node, formats text variables, debits credits, and dispatches the SMS automatically.
          </p>
        </div>
      </section>


    </div>
  );
};

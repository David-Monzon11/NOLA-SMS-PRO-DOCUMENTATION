import React from 'react';
import { CreditCard, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import { ScreenshotPlaceholder } from './ScreenshotPlaceholder';
import { defaultSmsReminder } from '../data/docsData';
import { InfoBox } from './Callouts';

const setupSteps = [
  'Install NOLA SMS Pro from the HighLevel Marketplace.',
  'Select the correct sub-account/location.',
  'Create or sign in to the NOLA account.',
  'Confirm the dashboard, credits, and Sender ID before sending.'
];

const checks = [
  {
    icon: <MapPin className="h-4 w-4" />,
    title: 'Correct Location',
    text: 'The connected location should match the HighLevel sub-account where you installed the app.'
  },
  {
    icon: <CreditCard className="h-4 w-4" />,
    title: 'SMS Credits',
    text: 'Messages only send when credits are available.'
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: 'Sender ID',
    text: 'Use NOLASMSPro first. Custom Sender IDs must be approved before they appear in Compose.'
  },
  {
    icon: <MessageSquare className="h-4 w-4" />,
    title: 'Message History',
    text: 'After sending, check whether the message is Sending, Sent, or Failed.'
  }
];

export const WelcomePresentation: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-7 pb-12">
      <header className="border-b border-slate-100 pb-5 dark:border-slate-800/60">
        <h1 className="text-[30px] md:text-[42px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
          Welcome to NOLA SMS Pro
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
          NOLA SMS Pro runs inside your HighLevel sub-account after installation. Use these guides to install the app, confirm setup, send your first SMS, and check the message status.
        </p>
      </header>

      <div className="max-w-3xl space-y-6">
        <section>
          <h2 className="text-[17px] font-bold text-slate-800 dark:text-slate-100 mb-3">
            First-Time Setup Flow
          </h2>
          <ol className="space-y-3">
            {setupSteps.map((step, idx) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#DCEEFF] text-[12px] font-bold text-[#1F5AAE] dark:bg-[#1F5AAE]/20 dark:text-[#4F8EF7]">
                  {idx + 1}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <ScreenshotPlaceholder
        figure={1}
        caption="NOLA SMS Pro runs inside your HighLevel sub-account after installation."
        alt="NOLA SMS Pro opened inside the HighLevel sub-account menu."
        filename="/images/docs/welcome-nola-inside-highlevel.png"
        variant="Application Preview"
        height="md"
      />

      <div className="max-w-3xl space-y-6">
        <InfoBox>{defaultSmsReminder}</InfoBox>

        <section>
          <h2 className="text-[17px] font-bold text-slate-800 dark:text-slate-100 mb-3">
            Before You Send
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checks.map((check) => (
              <div key={check.title} className="p-4 rounded-lg border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/30">
                <div className="flex items-center gap-2 text-[#1F5AAE] dark:text-[#4F8EF7]">
                  {check.icon}
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {check.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

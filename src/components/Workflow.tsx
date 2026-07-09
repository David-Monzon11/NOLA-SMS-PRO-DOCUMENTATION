import React, { useState } from 'react';
import { Send, FileCheck, ShieldAlert, CheckCircle2, RefreshCw, Landmark, HelpCircle } from 'lucide-react';

interface StepDetail {
  title: string;
  actor: 'User' | 'Admin' | 'Carrier';
  desc: string;
  icon: React.ReactNode;
}

export const SenderIdWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepDetail[] = [
    {
      title: 'Request Sender ID',
      actor: 'User',
      desc: 'Fill out the Custom Sender ID request in Settings > Sender IDs. Specify your preferred 3-11 character name, business purpose, and provide a realistic message template.',
      icon: <Send className="h-5 w-5" />
    },
    {
      title: 'Submitted',
      actor: 'User',
      desc: 'The request is recorded in the NOLA system and queued for immediate administrative screening.',
      icon: <FileCheck className="h-5 w-5" />
    },
    {
      title: 'Admin Review',
      actor: 'Admin',
      desc: 'Your agency administrator or system operator checks the name against carrier naming guidelines to prevent rejection.',
      icon: <ShieldAlert className="h-5 w-5" />
    },
    {
      title: 'Pending Carrier',
      actor: 'Carrier',
      desc: 'Once approved by the administrator, the name is submitted to local telecommunication networks. Carrier provisioning usually takes 2-3 business days.',
      icon: <RefreshCw className="h-5 w-5 animate-spin-slow" />
    },
    {
      title: 'Approved',
      actor: 'Carrier',
      desc: 'Local carriers activate the Sender ID for NOLA SMS Pro routing. The system status updates automatically from Pending to Approved.',
      icon: <CheckCircle2 className="h-5 w-5" />
    },
    {
      title: 'Ready to Use',
      actor: 'User',
      desc: 'The approved Sender ID immediately appears as an option in your Compose dropdown, replacing the default "NOLASMSPro" handle.',
      icon: <Landmark className="h-5 w-5" />
    }
  ];

  return (
    <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Interactive Sender ID Workflow</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Click any step in the flow to learn who handles it and what occurs at that stage.</p>

      {/* Workflow Stepper Grid */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block z-0" />

        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const actorColor = 
            step.actor === 'User' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
            step.actor === 'Admin' ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800' :
            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`relative z-10 flex flex-col items-center p-3 rounded-xl border transition-all duration-200 w-full md:w-32 ${
                isActive 
                  ? 'bg-slate-50 dark:bg-slate-900 border-brand-primary dark:border-brand-secondary shadow-md scale-105' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className={`p-2 rounded-lg border mb-2 ${actorColor}`}>
                {step.icon}
              </div>
              <span className="text-xs font-bold text-center leading-tight text-slate-800 dark:text-slate-200">{step.title}</span>
              <span className={`mt-1.5 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-md border ${
                step.actor === 'User' ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30' :
                step.actor === 'Admin' ? 'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/20 dark:text-violet-400 dark:border-violet-900/30' :
                'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30'
              }`}>
                {step.actor}
              </span>
            </button>
          );
        })}
      </div>

      {/* Details Box */}
      <div className="p-4 rounded-xl border border-brand-accent bg-brand-accent/5 dark:border-brand-primary/10 dark:bg-brand-primary/5 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-5 w-5 text-brand-primary dark:text-brand-secondary" />
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-brand-secondary">
            Step {activeStep + 1} Details — Action by {steps[activeStep].actor}
          </span>
        </div>
        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">{steps[activeStep].title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{steps[activeStep].desc}</p>
      </div>
    </div>
  );
};

export const CreditWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepDetail[] = [
    {
      title: 'Request SMS Credits',
      actor: 'User',
      desc: 'On the Settings > Credits tab, click the "Request Credits" button. Enter the amount of credits required along with an explanatory note detailing your current messaging campaign.',
      icon: <Send className="h-5 w-5" />
    },
    {
      title: 'Admin Review',
      actor: 'Admin',
      desc: 'Your agency administrator is notified of the request in their portal. They review the credit availability, transaction history, and sub-account guidelines.',
      icon: <ShieldAlert className="h-5 w-5" />
    },
    {
      title: 'Credits Added',
      actor: 'Admin',
      desc: 'Upon approval, the administrator allocates the approved credit allotment to your sub-account balance. Your balance updates instantly without requiring service re-logins.',
      icon: <CheckCircle2 className="h-5 w-5" />
    }
  ];

  return (
    <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Interactive Credit Refill Workflow</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Click any step in the flow to learn who handles it and what occurs at that stage.</p>

      {/* Stepper Grid */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block z-0" />

        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const actorColor = 
            step.actor === 'User' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800' :
            'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800';

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`relative z-10 flex flex-col items-center p-3 rounded-xl border transition-all duration-200 w-full md:w-48 ${
                isActive 
                  ? 'bg-slate-50 dark:bg-slate-900 border-brand-primary dark:border-brand-secondary shadow-md scale-105' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className={`p-2 rounded-lg border mb-2 ${actorColor}`}>
                {step.icon}
              </div>
              <span className="text-xs font-bold text-center leading-tight text-slate-800 dark:text-slate-200">{step.title}</span>
              <span className={`mt-1.5 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-md border ${
                step.actor === 'User' ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30' :
                'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/20 dark:text-violet-400 dark:border-violet-900/30'
              }`}>
                {step.actor}
              </span>
            </button>
          );
        })}
      </div>

      {/* Details Box */}
      <div className="p-4 rounded-xl border border-brand-accent bg-brand-accent/5 dark:border-brand-primary/10 dark:bg-brand-primary/5 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-5 w-5 text-brand-primary dark:text-brand-secondary" />
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-brand-secondary">
            Step {activeStep + 1} Details — Action by {steps[activeStep].actor}
          </span>
        </div>
        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">{steps[activeStep].title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{steps[activeStep].desc}</p>
      </div>
    </div>
  );
};

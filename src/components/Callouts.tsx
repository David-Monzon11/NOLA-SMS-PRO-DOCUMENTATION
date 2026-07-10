import React from 'react';
import { Lightbulb, Info, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
}

const base = 'my-5 flex gap-3 border-l-4 px-4 py-3.5 text-sm leading-relaxed';

export const TipBox: React.FC<CalloutProps> = ({ children, title = 'Tip' }) => (
  <div className={`${base} border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/25`}>
    <Lightbulb className="h-4 w-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
    <div className="text-emerald-800 dark:text-emerald-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-emerald-700 dark:text-emerald-300">{title}</span>
      {children}
    </div>
  </div>
);

export const InfoBox: React.FC<CalloutProps> = ({ children, title = 'Note' }) => (
  <div className={`${base} border-[#1F5AAE] bg-[#E8F3FF] dark:border-[#72A8FF] dark:bg-[#102B4F]/70`}>
    <Info className="h-4 w-4 text-[#1F5AAE] dark:text-[#72A8FF] flex-shrink-0 mt-0.5" />
    <div className="text-[#123C76] dark:text-blue-100 min-w-0">
      <span className="font-semibold block mb-0.5 text-[#0B4EA2] dark:text-[#9AC3FF]">{title}</span>
      {children}
    </div>
  </div>
);

export const WarningBox: React.FC<CalloutProps> = ({ children, title = 'Warning' }) => (
  <div className={`${base} border-amber-500 bg-amber-50/80 dark:bg-amber-950/25`}>
    <AlertTriangle className="h-4 w-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
    <div className="text-amber-800 dark:text-amber-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-amber-700 dark:text-amber-300">{title}</span>
      {children}
    </div>
  </div>
);

export const SuccessBox: React.FC<CalloutProps> = ({ children, title = 'Success' }) => (
  <div className={`${base} border-[#1F5AAE] bg-[#E8F3FF] dark:border-[#72A8FF] dark:bg-[#102B4F]/70`}>
    <CheckCircle2 className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7] flex-shrink-0 mt-0.5" />
    <div className="text-[#0F3470] dark:text-blue-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-[#1F5AAE] dark:text-[#4F8EF7]">{title}</span>
      {children}
    </div>
  </div>
);

export const ErrorBox: React.FC<CalloutProps> = ({ children, title = 'Error' }) => (
  <div className={`${base} border-red-500 bg-red-50/80 dark:bg-red-950/25`}>
    <XCircle className="h-4 w-4 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
    <div className="text-red-800 dark:text-red-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-red-700 dark:text-red-300">{title}</span>
      {children}
    </div>
  </div>
);

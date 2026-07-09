import React from 'react';
import { Lightbulb, Info, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  title?: string;
}

const base = 'my-5 flex gap-3 rounded-xl px-4 py-3.5 text-sm leading-relaxed';

export const TipBox: React.FC<CalloutProps> = ({ children, title = 'Tip' }) => (
  <div className={`${base} bg-emerald-50 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/40`}>
    <Lightbulb className="h-4 w-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
    <div className="text-emerald-800 dark:text-emerald-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-emerald-700 dark:text-emerald-300">{title}</span>
      {children}
    </div>
  </div>
);

export const InfoBox: React.FC<CalloutProps> = ({ children, title = 'Note' }) => (
  <div className={`${base} bg-blue-50 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/40`}>
    <Info className="h-4 w-4 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
    <div className="text-blue-800 dark:text-blue-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-blue-700 dark:text-blue-300">{title}</span>
      {children}
    </div>
  </div>
);

export const WarningBox: React.FC<CalloutProps> = ({ children, title = 'Warning' }) => (
  <div className={`${base} bg-amber-50 border border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/40`}>
    <AlertTriangle className="h-4 w-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
    <div className="text-amber-800 dark:text-amber-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-amber-700 dark:text-amber-300">{title}</span>
      {children}
    </div>
  </div>
);

export const SuccessBox: React.FC<CalloutProps> = ({ children, title = 'Success' }) => (
  <div className={`${base} bg-[#DCEEFF]/60 border border-[#4F8EF7]/20 dark:bg-[#1F5AAE]/10 dark:border-[#4F8EF7]/25`}>
    <CheckCircle2 className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7] flex-shrink-0 mt-0.5" />
    <div className="text-[#0F3470] dark:text-blue-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-[#1F5AAE] dark:text-[#4F8EF7]">{title}</span>
      {children}
    </div>
  </div>
);

export const ErrorBox: React.FC<CalloutProps> = ({ children, title = 'Error' }) => (
  <div className={`${base} bg-red-50 border border-red-100 dark:bg-red-950/20 dark:border-red-900/40`}>
    <XCircle className="h-4 w-4 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
    <div className="text-red-800 dark:text-red-200 min-w-0">
      <span className="font-semibold block mb-0.5 text-red-700 dark:text-red-300">{title}</span>
      {children}
    </div>
  </div>
);

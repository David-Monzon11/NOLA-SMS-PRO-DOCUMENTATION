import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, CheckCircle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  desc: string;
}

export const InteractiveChecklist: React.FC = () => {
  const items: ChecklistItem[] = [
    {
      id: 'location',
      label: 'Verify connected location',
      desc: 'Check that Settings > Account displays the correct HighLevel sub-account name.'
    },
    {
      id: 'credits',
      label: 'Confirm credit balance',
      desc: 'Verify that your starting SMS credit balance is greater than zero.'
    },
    {
      id: 'sender',
      label: 'Confirm default sender',
      desc: 'Verify that NOLASMSPro appears in the compose sender list.'
    },
    {
      id: 'contact',
      label: 'Add a test contact',
      desc: 'Add a contact with a valid local phone number (formatted as 09XXXXXXXXX).'
    },
    {
      id: 'template',
      label: 'Create a test template',
      desc: 'Save a reusable message template with standard, natural text.'
    },
    {
      id: 'send',
      label: 'Send a single SMS',
      desc: 'Type a message or insert your template in Compose and hit Send once.'
    },
    {
      id: 'history',
      label: 'Verify delivery status',
      desc: 'Open Message History and confirm the status updates to Sent.'
    }
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('first_sms_checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('first_sms_checklist', JSON.stringify(checked));
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = items.filter((item) => checked[item.id]).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);
  const isFinished = completedCount === items.length;

  const resetChecklist = () => {
    setChecked({});
  };

  return (
    <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">First SMS Checklist</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Complete these configuration checks before sending large-scale campaigns.</p>
        </div>
        <button
          onClick={resetChecklist}
          className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors uppercase tracking-wider self-start sm:self-center"
        >
          Reset List
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          <span>Progress</span>
          <span>{completedCount} of {items.length} completed ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-primary dark:bg-brand-secondary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-4">
        {items.map((item) => {
          const isItemChecked = !!checked[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-4 w-full p-3 rounded-xl border text-left transition-all duration-200 ${
                isItemChecked
                  ? 'border-brand-primary/20 bg-brand-accent/10 dark:border-brand-secondary/20 dark:bg-brand-primary/5 text-slate-800 dark:text-slate-200'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isItemChecked ? (
                  <CheckSquare className="h-5 w-5 text-brand-primary dark:text-brand-secondary" />
                ) : (
                  <Square className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className={`text-sm font-bold block ${isItemChecked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                  {item.label}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-450 block mt-0.5">
                  {item.desc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Success Banner when all completed */}
      {isFinished && (
        <div className="mt-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/35 dark:bg-emerald-950/20 text-slate-800 dark:text-slate-200 flex items-start gap-3 transition-all duration-200 animate-pulse">
          <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-350 uppercase tracking-wider mb-0.5">Checklist Completed!</h4>
            <p className="text-xs text-emerald-700 dark:text-slate-300 leading-relaxed">Excellent. Your workspace configuration is fully verified and you are now ready to write custom templates and send live SMS campaigns.</p>
          </div>
        </div>
      )}
    </div>
  );
};

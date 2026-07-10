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
      desc: 'Check that Settings shows the correct HighLevel sub-account/location.'
    },
    {
      id: 'credits',
      label: 'Confirm credit balance',
      desc: 'Make sure SMS credits are available before you send.'
    },
    {
      id: 'sender',
      label: 'Confirm default sender',
      desc: 'Use NOLASMSPro for your first send unless an approved custom Sender ID is ready.'
    },
    {
      id: 'contact',
      label: 'Choose a valid contact',
      desc: 'Use a valid local mobile number formatted as 09XXXXXXXXX.'
    },
    {
      id: 'message',
      label: 'Write a natural message',
      desc: 'Avoid one-word messages like test. Use a short sentence a real customer might receive.'
    },
    {
      id: 'send',
      label: 'Send a single SMS',
      desc: 'Click Send once, then wait for the app to process the message.'
    },
    {
      id: 'history',
      label: 'Check Message History',
      desc: 'Confirm whether the status is Sending, Sent, or Failed.'
    }
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('first_sms_checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
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
    <div className="my-8 rounded-lg border border-[#D7E7FA] bg-white p-6 shadow-sm shadow-[#184B8F]/5 transition-colors duration-200 dark:border-[#183354] dark:bg-[#0B1627]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Send Your First SMS</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Complete these checks before sending your first message.</p>
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
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#E8F3FF] dark:bg-[#07111F]">
          <div 
            className="h-full bg-[#1F5AAE] transition-all duration-300 dark:bg-[#72A8FF]"
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
              className={`flex w-full items-start gap-4 rounded-lg border p-3 text-left transition-all duration-200 ${
                isItemChecked
                  ? 'border-[#9BC4F5] bg-[#E8F3FF] text-[#0B2E63] dark:border-[#315C8F] dark:bg-[#102B4F] dark:text-slate-200'
                  : 'border-[#D7E7FA] bg-white text-[#425B7D] hover:border-[#9BC4F5] dark:border-[#183354] dark:bg-[#07111F] dark:text-slate-400 dark:hover:border-[#315C8F]'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isItemChecked ? (
                  <CheckSquare className="h-5 w-5 text-[#1F5AAE] dark:text-[#72A8FF]" />
                ) : (
                  <Square className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className={`text-sm font-bold block ${isItemChecked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs text-[#6681A4] dark:text-slate-400">
                  {item.desc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Success Banner when all completed */}
      {isFinished && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-4 text-slate-800 transition-all duration-200 dark:border-emerald-900/35 dark:bg-emerald-950/20 dark:text-slate-200">
          <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-350 uppercase tracking-wider mb-0.5">Checklist Complete</h4>
            <p className="text-xs text-emerald-700 dark:text-slate-300 leading-relaxed">Your first send is ready. After sending, keep Message History open until the status is clear.</p>
          </div>
        </div>
      )}
    </div>
  );
};

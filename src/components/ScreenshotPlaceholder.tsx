import React from 'react';
import { ImageIcon, Monitor, CheckCircle2, Clock3, XCircle } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  figure?: number;
  caption: string;
  note?: string;
  filename?: string;
  alt?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'Application Preview' | 'Step Preview' | 'Feature Preview' | 'Result Preview';
  mode?: 'large' | 'medium' | 'comparison';
}

const heightMap: Record<NonNullable<ScreenshotPlaceholderProps['height']>, string> = {
  sm: 'min-h-[250px]',
  md: 'min-h-[340px]',
  lg: 'min-h-[430px]',
  xl: 'min-h-[520px]',
};

const ratioMap: Record<NonNullable<ScreenshotPlaceholderProps['mode']>, string> = {
  large: 'aspect-[16/9]',
  medium: 'aspect-[4/3]',
  comparison: 'min-h-[320px]',
};

const statusCards = [
  { label: 'Approved', icon: <CheckCircle2 className="h-4 w-4" />, className: 'text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/25 dark:border-emerald-900/40' },
  { label: 'Pending', icon: <Clock3 className="h-4 w-4" />, className: 'text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/25 dark:border-amber-900/40' },
  { label: 'Rejected', icon: <XCircle className="h-4 w-4" />, className: 'text-rose-600 bg-rose-50 border-rose-100 dark:bg-rose-950/25 dark:border-rose-900/40' },
];

const AppMockup: React.FC<{ mode: NonNullable<ScreenshotPlaceholderProps['mode']> }> = ({ mode }) => {
  if (mode === 'comparison') {
    return (
      <div className="grid h-full gap-3 p-3 sm:grid-cols-3 sm:p-4">
        {statusCards.map((card) => (
          <div key={card.label} className={`flex min-h-[170px] flex-col rounded-lg border p-4 ${card.className}`}>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold">
              {card.icon}
              {card.label}
            </div>
            <div className="space-y-2">
              <div className="h-2.5 rounded bg-current opacity-20" />
              <div className="h-2.5 w-4/5 rounded bg-current opacity-15" />
              <div className="h-2.5 w-3/5 rounded bg-current opacity-15" />
            </div>
            <div className="mt-auto rounded-md border border-current/15 bg-white/65 px-3 py-2 text-[11px] font-semibold dark:bg-slate-950/35">
              Sender ID state
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid min-h-0 flex-1 grid-cols-[64px_1fr] sm:grid-cols-[108px_1fr]">
      <div className="border-r border-[#D7E7FA] bg-[#F4F9FF] p-2 sm:p-3 dark:border-[#183354] dark:bg-[#0B1627]">
        <div className="mb-4 h-3 w-12 rounded bg-[#1F5AAE]/25 dark:bg-[#72A8FF]/25" />
        <div className="space-y-2">
          <div className="h-2 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
          <div className="h-2 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
          <div className="h-7 rounded bg-[#1F5AAE]/14 ring-1 ring-[#9BC4F5]/70 dark:bg-[#102B4F] dark:ring-[#315C8F]" />
          <div className="h-2 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
          <div className="hidden h-2 rounded bg-[#CFE2F7] sm:block dark:bg-[#1B2E4A]" />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="h-3 w-36 rounded bg-[#9CB5D4] dark:bg-[#315C8F]" />
            <div className="mt-2 h-2 w-56 max-w-full rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
          </div>
          <div className="h-8 w-16 flex-shrink-0 rounded-md bg-[#1F5AAE] dark:bg-[#72A8FF] sm:w-24" />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <div className="rounded-lg border border-[#D7E7FA] bg-[#F8FBFF] p-3 dark:border-[#183354] dark:bg-[#07111F]">
            <div className="h-2 w-12 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
            <div className="mt-3 h-4 w-20 rounded bg-[#1F5AAE]/20 dark:bg-[#72A8FF]/20" />
          </div>
          <div className="rounded-lg border border-[#D7E7FA] bg-[#F8FBFF] p-3 dark:border-[#183354] dark:bg-[#07111F]">
            <div className="h-2 w-10 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
            <div className="mt-3 h-4 w-16 rounded bg-emerald-300/50 dark:bg-emerald-500/25" />
          </div>
          <div className="hidden rounded-lg border border-[#D7E7FA] bg-[#F8FBFF] p-3 sm:block dark:border-[#183354] dark:bg-[#07111F]">
            <div className="h-2 w-14 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
            <div className="mt-3 h-4 w-20 rounded bg-amber-300/50 dark:bg-amber-500/25" />
          </div>
        </div>

        <div className="min-h-0 flex-1 rounded-lg border border-dashed border-[#4F8EF7]/55 bg-[#E8F3FF]/80 p-4 dark:bg-[#102B4F]/55">
          <div className="flex h-full min-h-28 flex-col items-center justify-center text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#9CB5D4] shadow-sm dark:bg-[#07111F] dark:text-[#315C8F]">
              <ImageIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-black text-[#0B2E63] dark:text-slate-100">
              Screenshot Coming Soon
            </p>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-[#5D7596] dark:text-slate-400">
              A polished product screenshot will appear here for this exact step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ScreenshotPlaceholder: React.FC<ScreenshotPlaceholderProps> = ({
  figure,
  caption,
  note,
  alt,
  height = 'md',
  variant = 'Application Preview',
  mode = 'large',
}) => {
  return (
    <figure
      className="group overflow-hidden rounded-lg border border-[#BCD7F5] bg-white shadow-sm shadow-[#184B8F]/8 dark:border-[#1F3D68] dark:bg-[#07111F] dark:shadow-none"
      role="img"
      aria-label={alt ?? caption}
    >
      <div className="flex items-center justify-between gap-3 border-b border-[#D7E7FA] bg-[#F8FBFF] px-4 py-3 dark:border-[#183354] dark:bg-[#0B1627]">
        <div className="flex min-w-0 items-center gap-2">
          <Monitor className="h-4 w-4 flex-shrink-0 text-[#1F5AAE] dark:text-[#72A8FF]" />
          <span className="truncate text-[11px] font-black uppercase tracking-[0.16em] text-[#526A8B] dark:text-slate-400">
            What you should see
          </span>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <span className="hidden text-[10px] font-black uppercase tracking-[0.16em] text-[#7B93B1] dark:text-slate-500 sm:inline">
            {variant}
          </span>
          {figure !== undefined && (
            <span className="rounded-md bg-[#E8F3FF] px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#1F5AAE] dark:bg-[#102B4F] dark:text-[#9AC3FF]">
              {figure}
            </span>
          )}
        </div>
      </div>

      <div className={`screenshot-frame flex ${heightMap[height]} ${ratioMap[mode]} p-4 sm:p-5`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,243,255,0.95),rgba(255,255,255,0.55))] dark:bg-[linear-gradient(135deg,rgba(7,17,31,0.96),rgba(16,43,79,0.5))]" />
        <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col overflow-hidden rounded-lg border border-white/85 bg-white shadow-lg shadow-[#184B8F]/12 dark:border-[#25476F] dark:bg-[#07111F] dark:shadow-none">
          <div className="flex h-8 flex-shrink-0 items-center gap-1.5 border-b border-[#D7E7FA] bg-[#F8FBFF] px-3 dark:border-[#183354] dark:bg-[#0B1627]">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-2 h-3 w-28 rounded bg-[#CFE2F7] dark:bg-[#1B2E4A]" />
          </div>
          <AppMockup mode={mode} />
        </div>
      </div>

      <figcaption className="border-t border-[#D7E7FA] px-4 py-3 dark:border-[#183354]">
        <p className="text-[13px] font-semibold leading-snug text-[#425B7D] dark:text-slate-300">
          {caption}
        </p>
        {note && (
          <p className="mt-1 text-[12px] text-[#7B93B1] dark:text-slate-500">
            {note}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

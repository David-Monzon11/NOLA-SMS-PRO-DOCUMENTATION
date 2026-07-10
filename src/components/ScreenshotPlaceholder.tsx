import React from 'react';
import { ImageIcon, Monitor } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  /** Figure number, e.g. 1, 2, 3 */
  figure?: number;
  /** Caption shown below the image area */
  caption: string;
  /** Optional note below caption */
  note?: string;
  /** Planned screenshot path */
  filename?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Visual height - default is 'md' */
  height?: 'sm' | 'md' | 'lg' | 'xl';
  /** Variant label shown inside placeholder */
  variant?: 'Application Preview' | 'Step Preview' | 'Feature Preview' | 'Result Preview';
}

const heightMap: Record<string, string> = {
  sm: 'min-h-44',
  md: 'min-h-64',
  lg: 'min-h-80',
  xl: 'min-h-96',
};

export const ScreenshotPlaceholder: React.FC<ScreenshotPlaceholderProps> = ({
  figure,
  caption,
  note,
  alt,
  height = 'md',
  variant = 'Application Preview',
}) => {
  return (
    <figure className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/30 dark:shadow-none" role="img" aria-label={alt ?? caption}>
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-[#1F5AAE] dark:text-[#4F8EF7]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              What you should see
            </span>
          </div>
        </div>
        {figure !== undefined && (
          <span className="rounded-md bg-[#DCEEFF] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1F5AAE] dark:bg-[#1F5AAE]/20 dark:text-[#4F8EF7]">
            {figure}
          </span>
        )}
      </div>

      <div className={`screenshot-frame ${heightMap[height]} flex p-4 sm:p-5`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,142,247,0.12),transparent_34%),linear-gradient(135deg,rgba(220,238,255,0.72),rgba(248,250,252,0.35))] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,142,247,0.16),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.85),rgba(2,6,23,0.35))]" />

        <div className="relative mx-auto flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-white/80 bg-white shadow-lg shadow-slate-300/20 dark:border-slate-700/70 dark:bg-slate-950 dark:shadow-none">
          <div className="flex h-8 flex-shrink-0 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 dark:border-slate-800 dark:bg-slate-900">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-2 h-3 w-28 rounded bg-slate-200/80 dark:bg-slate-800" />
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-[56px_1fr] gap-0 sm:grid-cols-[78px_1fr]">
            <div className="border-r border-slate-100 bg-slate-50/60 p-2 sm:p-3 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="mb-4 h-3 w-10 rounded bg-[#1F5AAE]/20 dark:bg-[#4F8EF7]/20" />
              <div className="space-y-2">
                <div className="h-2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-2 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-5 rounded bg-[#DCEEFF] dark:bg-[#1F5AAE]/30" />
                <div className="h-2 rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3 p-3 sm:p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="h-3 w-28 rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="mt-2 h-2 w-44 rounded bg-slate-200 dark:bg-slate-800" />
                </div>
                <div className="h-7 w-14 flex-shrink-0 rounded bg-[#1F5AAE] sm:w-20 dark:bg-[#4F8EF7]" />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="h-12 rounded border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900" />
                <div className="h-12 rounded border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900" />
                <div className="hidden h-12 rounded border border-slate-100 bg-slate-50 sm:block dark:border-slate-800 dark:bg-slate-900" />
              </div>
              <div className="flex-1 rounded border border-dashed border-[#4F8EF7]/45 bg-[#DCEEFF]/25 p-4 dark:bg-[#1F5AAE]/10">
                <div className="flex h-full min-h-24 flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-300 shadow-sm dark:bg-slate-900 dark:text-slate-600">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                    Screenshot coming soon
                  </p>
                  <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    This image will show the exact screen you should see at this step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[13px] font-medium leading-snug text-slate-600 dark:text-slate-300">
            {caption}
          </p>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {variant}
          </span>
        </div>
        {note && (
          <p className="mt-1 text-[12px] text-slate-400 dark:text-slate-500">
            {note}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

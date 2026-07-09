import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  /** Figure number, e.g. 1, 2, 3 */
  figure?: number;
  /** Caption shown below the image area */
  caption: string;
  /** Optional note below caption */
  note?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Visual height - default is 'md' */
  height?: 'sm' | 'md' | 'lg' | 'xl';
  /** Variant label shown inside placeholder */
  variant?: 'Application Preview' | 'Step Preview' | 'Feature Preview' | 'Result Preview';
}

const heightMap: Record<string, string> = {
  sm: 'h-44',
  md: 'h-64',
  lg: 'h-80',
  xl: 'h-96',
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
    <figure className="my-8 group" role="img" aria-label={alt ?? caption}>
      {/* Image area */}
      <div className={`screenshot-frame ${heightMap[height]} flex flex-col items-center justify-center gap-3 transition-colors duration-200`}>
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#1F5AAE 1px, transparent 1px), linear-gradient(90deg, #1F5AAE 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Center icon + label */}
        <div className="relative flex flex-col items-center gap-2 text-slate-300 dark:text-slate-600">
          <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm">
            <ImageIcon className="w-6 h-6 text-slate-300 dark:text-slate-600" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 dark:text-slate-600">
            {variant}
          </span>
        </div>
      </div>

      {/* Caption row */}
      <figcaption className="mt-3 space-y-1">
        <div className="flex items-start gap-2">
          {figure !== undefined && (
            <span className="text-[11px] font-bold text-[#1F5AAE] dark:text-[#4F8EF7] uppercase tracking-wider flex-shrink-0 mt-px">
              Figure {figure}.
            </span>
          )}
          <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-snug">
            {caption}
          </p>
        </div>
        {note && (
          <p className="text-[12px] text-slate-400 dark:text-slate-500 italic pl-0">
            {note}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

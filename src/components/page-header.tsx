import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-[#E6E1DA] pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E1251B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl uppercase leading-[0.95] tracking-[-0.035em] text-[#0B0B0C] md:text-4xl">
          {title}
        </h1>
        {description && <p className="mt-2 max-w-2xl text-sm text-[#6B6560]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

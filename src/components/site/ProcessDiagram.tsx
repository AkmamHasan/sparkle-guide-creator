import { processStages } from "@/data/portfolio";

export function ProcessDiagram() {
  return (
    <div className="mt-10">
      {/* Desktop horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* connector line */}
          <div className="absolute top-5 left-[8%] right-[8%] h-px bg-border-light" aria-hidden />
          <div className="relative grid grid-cols-5 gap-6">
            {processStages.map((s, i) => (
              <div key={s.stage} className="text-center">
                <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full border border-teal bg-paper-2 font-mono text-xs font-semibold text-teal-dark relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 font-display font-semibold text-text-dark">{s.stage}</div>
                <p className="mt-2 text-sm text-text-dark-dim leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/tablet vertical */}
      <ol className="lg:hidden space-y-5">
        {processStages.map((s, i) => (
          <li key={s.stage} className="relative pl-12">
            <div className="absolute left-0 top-0 inline-flex items-center justify-center h-9 w-9 rounded-full border border-teal bg-paper-2 font-mono text-xs font-semibold text-teal-dark">
              {String(i + 1).padStart(2, "0")}
            </div>
            {i < processStages.length - 1 && (
              <div className="absolute left-[17px] top-9 bottom-[-1.25rem] w-px bg-border-light" aria-hidden />
            )}
            <div className="font-display font-semibold text-text-dark">{s.stage}</div>
            <p className="mt-1 text-sm text-text-dark-dim leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

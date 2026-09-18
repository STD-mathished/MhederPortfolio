import { timeline } from "@/lib/data";
import { Reveal, RevealItem } from "./motion";
import SectionHeading from "./sectionHeading";

export default function TimelineSection() {
  return (
    <section id="parcours" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          subtitle={timeline.subtitle}
        />
      </Reveal>

      <Reveal as="ul" className="mt-12 sm:mt-16" stagger={0.12}>
        {timeline.entries.map((entry) => (
          <RevealItem
            as="li"
            key={entry.id}
            className="group relative flex gap-5 pb-10 last:pb-0 sm:gap-8"
          >
            {/* Rail vertical + point */}
            <div className="relative flex w-3 shrink-0 justify-center">
              <span
                aria-hidden
                className="absolute top-4 bottom-0 w-px bg-gradient-to-b from-border to-transparent group-last:hidden"
              />
              <span
                aria-hidden
                className={`relative z-10 mt-2 size-3 shrink-0 rounded-full ring-4 ring-background ${
                  entry.current
                    ? "bg-brand shadow-[0_0_16px_2px_var(--brand)]"
                    : "bg-muted-foreground/40"
                }`}
              />
            </div>

            <div className="min-w-0 flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-xs text-brand">{entry.period}</span>
                {entry.current && (
                  <span className="rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-brand">
                    {timeline.currentLabel}
                  </span>
                )}
              </div>

              <h3 className="mt-2 text-lg font-semibold sm:text-xl">{entry.title}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/70">
                {entry.organization}
              </p>
              <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {entry.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}

import { stack } from "@/lib/data";
import { Reveal, RevealItem } from "./motion";
import SectionHeading from "./sectionHeading";

export default function StackSection() {
  return (
    <section id="stack" className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={stack.title}
          subtitle={stack.subtitle}
        />
      </Reveal>

      <Reveal as="ul" className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3" stagger={0.1}>
        {stack.groups.map((group) => (
          <RevealItem
            as="li"
            key={group.id}
            className={`surface relative flex flex-col p-6 ${
              group.featured ? "lg:col-span-3" : ""
            }`}
          >
            {group.featured && (
              <span className="absolute right-4 top-4 rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-brand">
                {stack.featuredLabel}
              </span>
            )}

            <h3 className="pr-24 text-lg font-semibold">{group.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{group.caption}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background/60 px-2.5 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}

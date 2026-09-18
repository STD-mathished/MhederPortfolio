import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { freelance } from "@/lib/data";
import { Reveal, RevealItem } from "./motion";

export default function FreelanceSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="surface relative overflow-hidden p-6 sm:p-10 lg:p-14">
        {/* Lueur d'accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/15 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <RevealItem as="span" className="eyebrow">
            {freelance.eyebrow}
          </RevealItem>
          <RevealItem as="h2" className="mt-3 text-3xl sm:text-4xl">
            {freelance.title}
          </RevealItem>
          <RevealItem as="p" className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {freelance.text}
          </RevealItem>

          <RevealItem as="div">
            <ul className="mt-7 flex flex-col gap-3">
              {freelance.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {perk}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem as="div">
            <Link
              href={freelance.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:h-11 sm:w-auto"
            >
              {freelance.cta.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </RevealItem>
        </div>
      </Reveal>
    </section>
  );
}

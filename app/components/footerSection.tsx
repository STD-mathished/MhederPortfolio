import Link from "next/link";
import { Mail } from "lucide-react";
import { footer } from "@/lib/data";
import { Reveal, RevealItem } from "./motion";

export default function FooterSection() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />

      <Reveal className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <RevealItem as="span" className="eyebrow">
            {footer.eyebrow}
          </RevealItem>
          <RevealItem as="h2" className="mt-3 text-3xl sm:text-4xl">
            {footer.title}
          </RevealItem>
          <RevealItem as="p" className="mt-4 text-base text-muted-foreground">
            {footer.subtitle}
          </RevealItem>

          <RevealItem as="div">
            <Link
              href={`mailto:${footer.email}`}
              aria-label={footer.emailLabel}
              className="mt-8 inline-flex max-w-full items-center gap-2.5 rounded-md border border-border bg-card/60 px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              <Mail className="size-4 shrink-0" />
              <span className="truncate">{footer.email}</span>
            </Link>
          </RevealItem>

          <RevealItem as="div">
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {footer.socials.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>

        <div className="hairline mt-14" />

        <RevealItem as="p" className="mt-8 text-center font-mono text-xs text-muted-foreground">
          {footer.copyright}
        </RevealItem>
      </Reveal>
    </footer>
  );
}

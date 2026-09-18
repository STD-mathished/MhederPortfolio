"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { hero } from "@/lib/data";
import { EASE } from "./motion";

export default function Hero() {
  const reduced = useReducedMotion();
  const words = hero.title.split(" ");

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20 text-center sm:px-6"
    >
      {/* Décor de fond */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>
    

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: reduced ? 0 : 0.1, staggerChildren: reduced ? 0 : 0.1 } },
        }}
        className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
      >
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            variants={{
              hidden: { opacity: 0, y: reduced ? 0 : 24 },
              visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.6, ease: EASE } },
            }}
            className="mr-[0.25em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        {...fadeUp(0.35)}
        className="mt-4 font-mono text-sm text-brand sm:text-base"
      >
        {hero.role}
      </motion.p>

      <motion.p
        {...fadeUp(0.45)}
        className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {hero.tagline}
      </motion.p>

      <motion.div
        {...fadeUp(0.6)}
        className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
      >
        <Link
          href={hero.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:h-11"
        >
          <Github className="size-4" />
          {hero.primaryCta.label}
        </Link>
        <Link
          href={hero.secondaryCta.href}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent sm:h-11"
        >
          {hero.secondaryCta.label}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

      <motion.a
        href="#parcours"
        {...fadeUp(0.8)}
        className="mt-14 hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
      >
        <ArrowDown className="size-3.5 animate-bounce" />
        {hero.scrollHint}
      </motion.a>
    </section>
  );
}

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTAINERS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  header: motion.header,
  footer: motion.footer,
} as const;

const ITEMS = {
  div: motion.div,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  span: motion.span,
} as const;

/** Conteneur qui décale l'apparition de ses enfants `<RevealItem>`. */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: keyof typeof CONTAINERS;
  id?: string;
}) {
  const reduced = useReducedMotion();
  const Component = CONTAINERS[as];

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: reduced ? 0 : delay,
            staggerChildren: reduced ? 0 : stagger,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

/** Élément animé : léger fondu + translation verticale. */
export function RevealItem({
  children,
  className,
  as = "div",
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof ITEMS;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const Component = ITEMS[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.55, ease: EASE },
    },
  };

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}

export { EASE };

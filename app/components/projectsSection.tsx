"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import {
  projects,
  projectCategories,
  projectCategoryLabels,
  projectsSection,
} from "@/lib/data";
import type { Project, ProjectFilterKey } from "@/types/datatypes";
import { Reveal, RevealItem, EASE } from "./motion";
import SectionHeading from "./sectionHeading";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilterKey>("all");
  const reduced = useReducedMotion();

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projets" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
        />
      </Reveal>

      {/* Filtres — défilement horizontal sur mobile */}
      <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          role="group"
          aria-label={projectsSection.filtersLabel}
          className="flex w-max gap-1 rounded-full border border-border bg-card/50 p-1 backdrop-blur"
        >
          {projectCategories.map((category) => {
            const active = filter === category.key;
            return (
              <button
                key={category.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category.key)}
                className={`relative rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
                    className="absolute inset-0 rounded-full border border-border bg-accent"
                  />
                )}
                <span className="relative">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.ul
        layout={!reduced}
        className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} reduced={!!reduced} />
          ))}
        </AnimatePresence>
      </motion.ul>

      {list.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          {projectsSection.emptyState}
        </p>
      )}
    </section>
  );
}

function ProjectCard({ project, reduced }: { project: Project; reduced: boolean }) {
  return (
    <motion.li
      layout={!reduced}
      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduced ? 0 : -8 }}
      transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
      className="surface group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.cover}
          alt={`Aperçu du projet ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground backdrop-blur">
            {project.year}
          </span>
          <span className="rounded-md border border-brand/40 bg-brand/10 px-2 py-0.5 font-mono text-[0.7rem] text-brand backdrop-blur">
            {projectCategoryLabels[project.category]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug sm:text-lg">{project.title}</h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
          {project.links.case && (
            <CardLink href={project.links.case} label={projectsSection.actions.case} />
          )}
          {project.links.demo && (
            <CardLink href={project.links.demo} label={projectsSection.actions.demo} external />
          )}
          {project.links.github && (
            <CardLink
              href={project.links.github}
              label={projectsSection.actions.github}
              external
              icon="github"
            />
          )}
        </div>
      </div>
    </motion.li>
  );
}

function CardLink({
  href,
  label,
  external = false,
  icon,
}: {
  href: string;
  label: string;
  external?: boolean;
  icon?: "github";
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
    >
      {icon === "github" ? <Github className="size-3.5" /> : null}
      {label}
      <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </Link>
  );
}

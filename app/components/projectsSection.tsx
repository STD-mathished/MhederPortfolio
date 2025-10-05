"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

// shadcn/ui
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  { key: "all", label: "Tous" },
  { key: "front", label: "Front-end" },
  { key: "fullstack", label: "Full stack" },
  { key: "tooling", label: "Tooling" },
  { key: "jeu", label: "jeu" },
] as const;

export default function ProjectsSection() {
  const [tab, setTab] = useState<(typeof categories)[number]["key"]>("all");

  const list = useMemo(() => {
    if (tab === "all") return projects;
    return projects.filter((p) => p.category === tab);
  }, [tab]);

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projets</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Sélection de mes projets récents.
        </p>
      </div>

<Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="mb-8">
  <TabsList
    className="
      mx-auto w-fit p-1 rounded-full
      bg-zinc-100/70 dark:bg-zinc-900/40
      border border-zinc-200 dark:border-zinc-800
      shadow-sm backdrop-blur
      flex flex-wrap gap-1
    "
  >
    {categories.map((c) => (
      <TabsTrigger
        key={c.key}
        value={c.key}
        className="
          px-4 py-2 rounded-full
          text-zinc-700 dark:text-zinc-300
          hover:text-zinc-900 dark:hover:text-white
          data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800
          data-[state=active]:text-zinc-900 dark:data-[state=active]:text-white
          data-[state=active]:shadow-sm
          transition
        "
      >
        {c.label}
      </TabsTrigger>
    ))}
  </TabsList>

  {categories.map((c) => (
    <TabsContent key={c.key} value={c.key} />
  ))}
</Tabs>


      <motion.div
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Card className="overflow-hidden group border-zinc-200 dark:border-zinc-800">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.cover}
            alt={`Aperçu du projet ${project.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge variant="secondary">{project.year}</Badge>
            <Badge>{labelFromCategory(project.category)}</Badge>
          </div>
        </div>

        <CardHeader>
          <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </CardContent>

        <CardFooter className="flex items-center gap-2">
          {project.links.demo && (
            <Button asChild>
              <Link href={project.links.demo} target="_blank" aria-label={`Ouvrir la démo de ${project.title}`}>
                Demo
              </Link>
            </Button>
          )}
          {project.links.case && (
            <Button asChild variant="secondary">
              <Link href={project.links.case} aria-label={`Lire l’étude de cas de ${project.title}`}>
                Étude de cas
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="outline">
              <Link href={project.links.github} target="_blank" aria-label={`Voir le code de ${project.title} sur GitHub`}>
                Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function labelFromCategory(c: Project["category"]) {
  switch (c) {
    case "front":
      return "Front-end";
    case "fullstack":
      return "Full stack";
    case "tooling":
      return "Tooling";
    case "jeu":
        return "Jeu-vidéo";
  }
}

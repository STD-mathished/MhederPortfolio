export type Project = {
  id: string;
  title: string;
  year: number;
  cover: string; 
  category: "front" | "fullstack" | "tooling" | "jeu";
  stack: string[];
  description: string;
  links: { demo?: string; github?: string; case?: string };
  highlights?: string[]; // points clés optionnels
};

export const projects: Project[] = [
  {
    id: "caribou",
    title: "Caribou — site maison d’édition",
    year: 2025,
    cover: "/placeholder.png",
    category: "front",
    stack: ["Next.js", "Tailwind", "shadcn/ui", "MDX"],
    description:
      "Site vitrine performant avec pages éditoriales en MDX et design system shadcn.",
    links: { demo: "#", github: "#", case: "#" },
    highlights: ["Core Web Vitals A", "Système de blocs réutilisables", "SEO + OG tags"]
  },
  {
    id: "greentrack",
    title: "Greentrack Genius — dashboard équipements",
    year: 2025,
    cover: "/placeholder.png",
    category: "fullstack",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    description:
      "Gestion d’équipements et pièces détachées, calcul d’obsolescence et filtres avancés.",
    links: { demo: "#", github: "#", case: "#" }
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker — app personnelle",
    year: 2024,
    cover: "/placeholder.png",
    category: "fullstack",
    stack: ["React", "Flask", "SQLite", "Zustand"],
    description:
      "Suivi d’habitudes avec stats, PWA offline, synchronisation locale.",
    links: { demo: "#", github: "#", case: "#" }
  },
  {
    id: "pomodoro-tauri",
    title: "Pomodoro — app Tauri",
    year: 2024,
    cover: "/placeholder.png",
    category: "tooling",
    stack: ["Tauri", "React", "Tailwind"],
    description:
      "Timer Pomodoro desktop léger, thèmes, raccourcis clavier et analytics locaux.",
    links: { github: "#", case: "#" }
  },
  {
    id: "unity-2d",
    title: "Unity 2D — jeu d’arcade",
    year: 2024,
    cover: "/placeholder.png",
    category: "jeu",
    stack: ["Unity", "C#", "Aseprite"],
    description:
      "Jeu 2D arcade : level design, collisions, VFX simples, build WebGL.",
    links: { demo: "#", case: "#" }
  }
];

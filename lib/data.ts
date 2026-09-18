/**
 * Source unique de vérité du contenu du portfolio.
 * Toutes les phrases affichées sur le site sont définies ici.
 *
 * Les types sont définis dans `types/datatypes.ts`.
 */
import type {
  Project,
  ProjectCategory,
  ProjectCategoryFilter,
  StackGroup,
  TimelineEntry,
} from "@/types/datatypes";

export const links = {
  github: "https://github.com/STD-mathished",
  linkedin: "https://www.linkedin.com/in/mathis-heder",
  services: "https://mheder-services.fr",
  email: "mheder.services@gmail.com",
} as const;

/* ------------------------------------------------------------------ */
/* Métadonnées                                                         */
/* ------------------------------------------------------------------ */

export const site = {
  title: "Mathis Heder - Futur Ingénieur DevOps & Développeur Full-Stack",
  description:
    "Portfolio de Mathis Heder, apprenti ingénieur Informatique chez Greentrack Genius et développeur full-stack. Docker, CI/CD, Next.js, FastAPI.",
  locale: "fr",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = {
  brand: "Mathis Heder",
  menuLabel: "Ouvrir le menu",
  closeLabel: "Fermer le menu",
  items: [
    { href: "#parcours", label: "Parcours" },
    { href: "#stack", label: "Stack" },
    { href: "#projets", label: "Projets" },
    { href: "#services", label: "Services" },
  ],
  cta: { href: "#contact", label: "Me contacter" },
} as const;

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: "Disponible pour des missions freelance",
  title: "Mathis Heder",
  role: "Futur Ingénieur Informatique & Développeur Full-Stack",
  tagline:
    "Actuellement en cycle ingénieur à l'EFREI, je construis, déploie et maintiens des architectures logicielles fiables. En alternance chez Greentrack Genius, je me spécialise progressivement vers le DevOps et l'automatisation d'infrastructures.",
  primaryCta: { label: "Voir mon GitHub", href: links.github },
  secondaryCta: { label: "Me contacter", href: "#contact" },
  scrollHint: "Découvrir mon parcours",
} as const;

/* ------------------------------------------------------------------ */
/* 2. Cursus & expérience                                              */
/* ------------------------------------------------------------------ */

export const timeline = {
  eyebrow: "Parcours",
  title: "Mon cursus & expérience",
  subtitle:
    "Une progression continue de l'alternance en développement vers l'ingénierie des opérations.",
  currentLabel: "En cours",
  entries: [
    {
      id: "efrei-devops",
      period: "2026 — 2029",
      title: "Apprenti Ingénieur Logiciel et Système d'informations",
      organization: "Greentrack Genius × EFREI Paris",
      description:
        "Développement, déploiement et gestion de projets internes (automatisation, CI/CD et maintien d'applications métiers).",
      current: true,
    },
    {
      id: "iut-fullstack",
      period: "2024 — 2026",
      title: "Apprenti Développeur Full-Stack (DUT)",
      organization: "Greentrack Genius × IUT d'Orsay",
      description:
        "Conception d'applications web de A à Z, mise en place d'environnements Docker et d'architectures de bases de données.",
      current: false,
    },
  ] satisfies TimelineEntry[],
} as const;

/* ------------------------------------------------------------------ */
/* 3. Stack technique                                                  */
/* ------------------------------------------------------------------ */

export const stack = {
  eyebrow: "Stack technique",
  title: "Les outils que j'utilise au quotidien",
  subtitle:
    "Un socle full-stack solide, orienté vers l'infrastructure et l'automatisation.",
  featuredLabel: "Spécialisation",
  groups: [
    {
      id: "ops",
      title: "Ops & Cloud",
      caption: "Déployer, automatiser, superviser.",
      items: [
        "Docker",
        "Docker Compose",
        "CI/CD (GitHub Actions)",
        "AWS",
        "Linux",
      ],
      featured: true,
    },
    {
      id: "backend",
      title: "Backend & BDD",
      caption: "Concevoir des APIs et des schémas de données.",
      items: ["Python (FastAPI)", "Java", "PostgreSQL"],
      featured: false,
    },
    {
      id: "frontend",
      title: "Frontend",
      caption: "Livrer des interfaces nettes et performantes.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      featured: false,
    },
  ] satisfies StackGroup[],
} as const;

/* ------------------------------------------------------------------ */
/* 4. Projets                                                          */
/* ------------------------------------------------------------------ */

export const projectCategories = [
  { key: "all", label: "Tous" },
  { key: "fullstack", label: "Full stack" },
  { key: "front", label: "Front-end" },
  { key: "tooling", label: "Tooling" },
  { key: "jeu", label: "Jeu vidéo" },
] as const satisfies readonly ProjectCategoryFilter[];

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  front: "Front-end",
  fullstack: "Full stack",
  tooling: "Tooling",
  jeu: "Jeu vidéo",
};

export const projectsSection = {
  eyebrow: "Réalisations",
  title: "Projets marquants",
  subtitle: "Une sélection de projets menés en alternance et en autonomie.",
  filtersLabel: "Filtrer les projets par catégorie",
  emptyState: "Aucun projet dans cette catégorie pour le moment.",
  actions: {
    demo: "Démo",
    case: "Étude de cas",
    github: "Code",
  },
} as const;

export const projects: Project[] = [
  {
    id: "obsolescence-tracker",
    title: "Obsolescence Tracker",
    year: 2025,
    cover: "/obso-tracker.png",
    category: "fullstack",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    description:
      "Création d'architectures backend robustes (FastAPI/PostgreSQL) ainsi qu'un frontend cohérent (Next.js) permettant de déterminer le niveau d'obsolescence d'un équipement.",
    links: { case: "https://github.com/STD-mathished/Obsolence-tracker" },
    highlights: [
      "Modèle de scoring d'obsolescence",
      "API REST documentée",
    ],
  },
  
];

/* ------------------------------------------------------------------ */
/* 5. Travailler avec moi (freelance)                                  */
/* ------------------------------------------------------------------ */

export const freelance = {
  eyebrow: "Freelance",
  title: "Travailler avec moi",
  text: "En parallèle de mon cursus d'ingénieur, je mets mes compétences en développement au service d'entreprises et d'indépendants. Vous avez un besoin en création web, en optimisation ou en déploiement sur mesure ?",
  cta: { label: "Découvrir mes services web", href: links.services },
  perks: [
    "Création de sites et d'applications web",
    "Déploiement et automatisation sur mesure",
    "Optimisation des performances",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 6. Footer / Contact                                                 */
/* ------------------------------------------------------------------ */

export const footer = {
  eyebrow: "Contact",
  title: "Parlons de votre projet",
  subtitle: "Le plus simple reste un mail. Je réponds sous 48 h.",
  email: links.email,
  emailLabel: "Écrire un mail à Mathis Heder",
  socials: [
    { id: "linkedin", label: "LinkedIn", href: links.linkedin },
    { id: "github", label: "GitHub", href: links.github },
  ],
  copyright: "© Mathis Heder — 2026",
} as const;

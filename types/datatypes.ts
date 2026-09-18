/**
 * Types du contenu du portfolio.
 *
 * Ce fichier ne contient AUCUNE valeur : uniquement les contrats de données
 * consommés par `lib/data.ts` et par les composants.
 */

/* ------------------------------------------------------------------ */
/* Cursus & expérience                                                 */
/* ------------------------------------------------------------------ */

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  current: boolean;
};

/* ------------------------------------------------------------------ */
/* Stack technique                                                     */
/* ------------------------------------------------------------------ */

export type StackGroup = {
  id: string;
  title: string;
  caption: string;
  items: string[];
  featured: boolean;
};

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "front" | "fullstack" | "tooling" | "jeu";

export type Project = {
  id: string;
  title: string;
  year: number;
  cover: string;
  category: ProjectCategory;
  stack: string[];
  description: string;
  links: { demo?: string; github?: string; case?: string };
  highlights?: string[];
};

/** Clé de filtre de la section projets : « toutes » + les catégories réelles. */
export type ProjectFilterKey = "all" | ProjectCategory;

/** Entrée de la barre de filtres. */
export type ProjectCategoryFilter = {
  key: ProjectFilterKey;
  label: string;
};

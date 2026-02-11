// Ce fichier dit à Astro : "j'ai une collection qui s'appelle blog,
// et voici la structure de données que chaque article doit respecter."

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // z.object() définit les champs attendus dans le frontmatter de chaque .md
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    description: z.string(),
    auteur: z.string().optional(),
  }),
});

// On exporte nos collections pour qu'Astro les connaisse
export const collections = { blog };

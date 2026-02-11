export interface Auteur {
  id: string;
  nom: string;
  description: string;
  linkedin?: string;
}

export const auteurs: Record<string, Auteur> = {
  "alexis-willot": {
    id: "alexis-willot",
    nom: "Alexis Willot",
    description: "Rédacteur expert en SEO depuis 8 ans, Alexis se passionne désormais pour le GEO",
    linkedin: "https://www.linkedin.com/in/alexis-willot-seo/",
  },
  "aurelien-brule": {
    id: "aurelien-brule",
    nom: "Aurélien Brulé",
    description: "RockStar du SEO",
    linkedin: "https://www.linkedin.com/",
  },
};

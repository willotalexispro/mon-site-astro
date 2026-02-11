# mon site Astro

un projet minimal pour apprendre les bases d'Astro.

## lancer le projet

```bash
# installer les dépendances
npm install

# lancer le serveur de développement (http://localhost:4321)
npm run dev

# construire le site pour la production
npm run build
```

## structure du projet

```
mon-site-astro/
├── src/
│   ├── components/
│   │   └── Carte.astro        ← composant réutilisable
│   ├── layouts/
│   │   └── BaseLayout.astro   ← structure HTML commune
│   └── pages/
│       ├── index.astro        ← page d'accueil (route /)
│       ├── a-propos.astro     ← route /a-propos
│       └── projets.astro      ← route /projets
├── public/                    ← fichiers statiques (images, favicon...)
├── astro.config.mjs           ← configuration Astro
└── package.json
```

## concepts abordés

- **layout** : squelette HTML partagé, avec `<slot />` pour injecter le contenu
- **composant** : morceau d'interface réutilisable avec des props
- **pages** : fichiers dans `src/pages/` = routes automatiques
- **frontmatter** : le code JS entre `---` qui s'exécute au build
- **boucles** : `.map()` pour afficher des listes
- **rendu conditionnel** : `&&` et ternaire pour afficher/masquer des éléments
- **CSS scopé** : les styles dans un `.astro` ne fuient pas vers les autres composants

---
titre: "Comprendre les composants"
date: "2026-02-07"
description: "Les composants sont la brique de base d'Astro. Voici comment ils fonctionnent."
auteur: "alexis-willot"
---

## C'est quoi un composant ?

Un composant, c'est un morceau d'interface que tu crées une fois et que tu
réutilises partout. Au lieu de copier-coller du HTML, tu fais une sorte
de **balise HTML personnalisée**.

## Un exemple concret

Imagine que tu as des cartes à afficher sur plusieurs pages. Sans composant,
tu réécrirais le HTML à chaque fois. Avec un composant `Carte.astro`, tu écris
juste `<Carte titre="Mon titre" />` et c'est réglé.

## Les props

Les props, c'est le mécanisme pour envoyer des données à un composant.
C'est comme les attributs en HTML : dans `<img src="photo.jpg" />`,
`src` est un attribut. Dans `<Carte titre="Mon titre" />`, `titre` est une prop.

La différence ? Les attributs HTML sont prédéfinis. Les props, c'est **toi**
qui les inventes selon tes besoins.

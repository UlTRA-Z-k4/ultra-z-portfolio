# Portfolio ULTRA_Z

Site statique en français, adapté au téléphone et à l’ordinateur.

## Ouvrir le site

Ouvrez `dist/index.html` dans votre navigateur. Aucun logiciel ni installation n’est nécessaire. Le bouton de copie peut être limité quand le site est ouvert comme fichier local : le pseudo reste affiché.

## Modifier avec VS Code

1. Décompressez le ZIP.
2. Dans VS Code, choisissez **Fichier > Ouvrir un dossier** et sélectionnez `ultra-z-portfolio`.
3. Modifiez `dist/index.html` pour les textes et réalisations, `dist/style.css` pour le style et `dist/script.js` pour les interactions.
4. Rechargez la page dans le navigateur pour voir vos modifications.

Les trois cartes sont des emplacements de démonstration, pas des projets réalisés. Remplacez-les par vos véritables travaux, une vidéo, votre contribution et éventuellement un lien jouable. Le code de la présentation est uniquement illustratif.

Les polices Google sont facultatives : sans connexion, le site utilise les polices du système. Le site n’utilise aucun suivi ni formulaire.

## Site public

Le site est publié sur https://ultra-z-k4.github.io/ultra-z-portfolio/.

Le workflow `.github/workflows/pages.yml` publie automatiquement le contenu de `dist` sur GitHub Pages à chaque envoi sur la branche `main`.

Après vos modifications, envoyez-les depuis le terminal à la racine du projet :

```powershell
git add dist README.md
git commit -m "Mettre à jour le portfolio"
git push
```

La progression de la publication est visible dans l’onglet **Actions** du dépôt GitHub. Dans **Settings > Pages**, la source de publication est **GitHub Actions**.

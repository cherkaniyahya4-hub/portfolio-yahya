# Portfolio — Karim El Mansouri

Portfolio professionnel statique développé uniquement en HTML5, CSS3 et JavaScript vanilla. Il ne nécessite ni compilation, ni framework, ni dépendance JavaScript.

## Structure

```text
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
└── README.md
```

## Lancer le site localement

La solution la plus simple consiste à ouvrir `index.html` dans un navigateur. Pour éviter les restrictions de certains navigateurs, vous pouvez aussi lancer un petit serveur depuis le dossier `portfolio` :

```bash
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000`. Avec VS Code, l'extension Live Server convient également.

## Personnaliser les informations et les visuels

Recherchez dans `index.html` les valeurs temporaires suivantes et remplacez-les : `Karim El Mansouri`, `Casablanca`, `karim.dev@example.com`, `+212 6 00 00 00 00`, ainsi que les URL GitHub, LinkedIn et Instagram.

Le portrait actuel est une illustration CSS afin que le site fonctionne immédiatement sans fichier externe. Pour utiliser votre photo :

1. placez une image optimisée nommée `profile.webp` dans `assets/images/` ;
2. remplacez le bloc `<div class="portrait" ...>` par `<img class="portrait" src="assets/images/profile.webp" alt="Portrait de Votre Nom">` ;
3. placez votre CV sous `assets/documents/cv.pdf`.

Les couleurs sont centralisées au début de `css/style.css`. Modifiez notamment `--primary-color` et `--primary-2`. Les deux thèmes disposent de leurs propres variables.

## Ajouter un projet

Dans la grille `.projects-grid` de `index.html`, dupliquez un bloc `<article class="project-card reveal">`. Adaptez le titre, la description, les technologies et les liens. Définissez `data-category="web"`, `data-category="app"` ou `data-category="ui"` pour que le filtre JavaScript fonctionne. Vous pouvez remplacer le visuel CSS par une image :

```html
<div class="project-image">
  <img src="assets/images/mon-projet.webp" alt="Aperçu du projet Mon projet" loading="lazy">
</div>
```

## Connecter le formulaire

Le formulaire valide actuellement les données puis affiche un succès en mode démonstration. Avec Formspree :

1. créez un formulaire sur [Formspree](https://formspree.io/) ;
2. ajoutez à la balise `<form>` l'attribut `action="https://formspree.io/f/VOTRE_ID"` et `method="POST"` ;
3. dans `js/script.js`, après la validation, envoyez `new FormData(form)` avec `fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })` ;
4. affichez le message de succès uniquement lorsque la réponse HTTP est correcte.

Les champs possèdent déjà les attributs `name` attendus par ces services.

## Déployer gratuitement sur Vercel

1. déposez le dossier dans un dépôt GitHub ;
2. connectez-vous sur [Vercel](https://vercel.com/) et choisissez **Add New > Project** ;
3. importez le dépôt ;
4. définissez `portfolio` comme **Root Directory** si le dépôt contient un dossier parent ;
5. laissez les commandes de build vides et cliquez sur **Deploy**.

Le site est aussi compatible avec GitHub Pages et Netlify. Sur Netlify, il suffit de déposer le dossier `portfolio` dans l'interface de déploiement.

## Accessibilité et performances

Le site inclut la navigation clavier, un lien d'accès rapide au contenu, des états de focus visibles, des libellés ARIA, la prise en charge de `prefers-reduced-motion`, un thème mémorisé dans `localStorage`, des animations basées sur `IntersectionObserver` et aucune bibliothèque d'animation.

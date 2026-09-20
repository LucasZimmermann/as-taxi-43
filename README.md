# AS Taxi 43 — landing page

Page unique, statique, pensée pour une seule action : ouvrir une conversation WhatsApp
pré-remplie avec le chauffeur.

- Aucune dépendance, aucun build, aucun cookie, aucune donnée envoyée à un serveur.
- Le formulaire « votre demande » ne fait que composer un message : il ouvre
  `wa.me/33664109661?text=...` avec le texte rédigé à partir des champs.
- Le fichier `script.js` contient le seul endroit où le numéro est défini :
  `const NUMERO_WHATSAPP = '33664109661';`. Tous les liens sont générés à partir de là.
  Les `href` écrits dans le HTML servent de repli si le JavaScript est bloqué.

## Lancer en local

```bash
python3 -m http.server 8777
# puis http://localhost:8777/
```

## Publier sur GitHub Pages

Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
L'URL est alors `https://<compte>.github.io/as-taxi-43/`.

Pour un nom de domaine (recommandé pour le référencement, par exemple `as-taxi43.fr`) :
créer un fichier `CNAME` à la racine contenant le domaine, puis pointer l'enregistrement
DNS vers GitHub Pages.

## À faire avant la mise en ligne

Ces points sont bloquants, ils contiennent des valeurs d'exemple :

1. **Avis clients** (`index.html`, section `#avis`) : les trois citations sont des exemples.
   Recopier de vrais avis Google mot pour mot, avec le prénom de l'auteur à la place de
   « Avis Google ». Supprimer la section si les avis ne sont pas encore nombreux.
2. **Mentions légales** (`mentions-legales.html`) : remplacer chaque `[crochet]` par
   l'adresse du siège, le SIRET, le numéro de licence de taxi, l'e-mail et le nom du gérant.
3. **Transport médical** (`index.html`, FAQ + section services) : ne garder ces deux blocs
   que si le chauffeur est bien conventionné CPAM.
4. **Adresse de stationnement** (pied de page) : remplacer `Le Puy-en-Velay (43000)` par
   l'adresse exacte si elle doit être affichée.
5. **URL canonique** : `https://lucaszimmermann.github.io/as-taxi-43/` apparaît dans
   `index.html` (balises `canonical`, `og:url`, JSON-LD), `robots.txt` et `sitemap.xml`.
   La remplacer partout une fois le domaine définitif choisi.
6. **Coordonnées GPS** du JSON-LD : celles du Puy-en-Velay par défaut, à affiner sur le
   point de stationnement réel.

Points à confirmer, non bloquants :

- **Distances et durées** du tableau des destinations : valeurs indicatives, à ajuster.
- **Nom commercial** : « AS Taxi 43 » vient de la fiche Google. À aligner avec le nom
  officiel si besoin (il apparaît dans le titre, le pied de page, le JSON-LD et l'image
  de partage `assets/og.png`).
- **Photos** : la page fonctionne sans photo. Pour en ajouter, poser les fichiers dans
  `assets/` et insérer une image dans la fiche du hero ou la section « chauffeur ».

## Structure

```
index.html            page principale
mentions-legales.html page légale
styles.css            toute la mise en forme
script.js             liens WhatsApp, fiche itinéraire, composition du message
assets/favicon.svg    icône
assets/og.png         image de partage (1200×630), regénérable depuis le SVG source
robots.txt sitemap.xml
```

## Référencement local

Déjà en place : `TaxiService` et `FAQPage` en JSON-LD, balises Open Graph, sitemap,
`lang="fr"`, titres hiérarchisés, texte riche en requêtes locales (Le Puy-en-Velay,
Haute-Loire, aéroport Lyon Saint-Exupéry, gare de Saint-Étienne Châteaucreux).

Ce qui compte le plus ensuite, hors du site : renseigner complètement la fiche Google
Business (horaires 24h/24, zone desservie, photos du véhicule), y mettre l'URL du site,
et demander un avis après chaque course.

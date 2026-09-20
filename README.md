# Taxi AS — Le Puy-en-Velay

Landing page d'un taxi artisan (autorisation de stationnement n° 5, place du Breuil),
pensée pour une seule action : ouvrir une conversation WhatsApp pré-remplie avec le chauffeur.

En ligne : https://lucaszimmermann.github.io/as-taxi-43/

- Aucune dépendance, aucun build, aucun cookie, aucune donnée envoyée à un serveur.
- Le formulaire « votre demande » ne fait que composer un message : il ouvre
  `wa.me/33664109661?text=...` avec le texte rédigé à partir des champs.
- `script.js` contient le seul endroit où le numéro est défini :
  `const NUMERO_WHATSAPP = '33664109661';`. Tous les liens en découlent.
  Les `href` écrits dans le HTML servent de repli si le JavaScript est bloqué.

## Lancer en local

```bash
python3 -m http.server 8777
# puis http://localhost:8777/
```

## Publier

GitHub Pages est déjà actif sur `main` / `/ (root)`. Tout push sur `main` republie.

Pour un nom de domaine (recommandé pour le référencement, par exemple `taxi-as-lepuy.fr`) :
créer un fichier `CNAME` à la racine contenant le domaine, pointer le DNS vers GitHub Pages,
puis remplacer l'URL canonique partout (voir point 3 ci-dessous).

## Informations vérifiées, déjà dans la page

Issues de l'affiche de l'entreprise et de la fiche Google :

| Donnée | Valeur |
| --- | --- |
| Nom commercial | Taxi AS |
| Fiche Google | TAXI LE PUY EN VELAY : AS-TAXI4.3 |
| Autorisation de stationnement | n° 5, Le Puy-en-Velay |
| Téléphone | 06 64 10 96 61 |
| WhatsApp | +33 6 64 10 96 61 |
| E-mail | astaxi.lepuy5@gmail.com |
| Stationnement | Place du Breuil, 43000 Le Puy-en-Velay |
| Conventionnement | Conventionné CPAM |
| Amplitude | 7j/7, 24h/24 |
| Note Google | 5,0 sur 84 avis |
| Exploitant | Hamed Arbib, entrepreneur individuel |
| Siège social | 3 rue de Chirel, lotissement Coste Deferne, 43000 Le Puy-en-Velay |
| SIREN | 493 529 523 |
| SIRET du siège | 493 529 523 00026 |
| TVA intracommunautaire | FR78 493 529 523 |
| Code APE | 4932Z, transports de voyageurs par taxis |
| Immatriculation | 2 janvier 2007 |
| Prestations Google | limousines, assistance, taxi 7j/7, taxi de nuit, longue distance, transfert gare, transfert aéroport |

## Ce qu'il reste à compléter

1. **URL canonique** : `https://lucaszimmermann.github.io/as-taxi-43/` apparaît dans
   `index.html` (`canonical`, `og:url`, `og:image`, JSON-LD), `robots.txt` et `sitemap.xml`.
   À remplacer partout le jour où un domaine est acheté.
2. **Réseaux sociaux** : l'affiche annonce Facebook, Snapchat et Instagram mais sans
   identifiant. Fournir les trois URL pour les ajouter au pied de page et au JSON-LD (`sameAs`).
3. **Distances et durées** du tableau des destinations : estimations, à confirmer par le chauffeur.
4. **Modèle du véhicule** : la page dit « berline break » sans nommer la marque. À préciser
   si un seul véhicule circule.

## La photo du hero

`assets/hero-le-puy.jpg` et ses deux déclinaisons viennent du visuel fourni par le client
(1672 × 941), recadré en pleine largeur derrière le texte. C'est une **image de synthèse**,
pas une photographie du véhicule prise sur place : les mentions légales le précisent, et le
texte alternatif décrit la scène sans la présenter comme un reportage.

Trois tailles sont servies par `srcset`, le navigateur choisit :

```
assets/hero-le-puy.jpg        2400 px   grands écrans et affichages retina
assets/hero-le-puy-1440.jpg   1440 px   desktop courant
assets/hero-le-puy-960.jpg     900 px   mobile
```

Pour changer la photo, remplacer les trois fichiers en gardant les mêmes noms, puis mettre
à jour le texte alternatif dans `index.html` et l'image de partage `assets/og.jpg`.

## Structure

```
index.html            page principale
mentions-legales.html page légale
styles.css            toute la mise en forme
script.js             liens WhatsApp et composition du message
assets/hero-le-puy*.jpg  photo du hero (trois tailles)
assets/og.jpg         image de partage 1200×630
assets/favicon.svg    icône
robots.txt sitemap.xml
```

## Référencement local

En place : JSON-LD `TaxiService` (adresse, horaires, note, catalogue de prestations) et
`FAQPage`, balises Open Graph avec image, sitemap, `lang="fr"`, titres hiérarchisés, texte
chargé en requêtes locales (Le Puy-en-Velay, Haute-Loire, aéroport Lyon Saint-Exupéry, gare
de Saint-Étienne Châteaucreux, taxi conventionné).

Ce qui compte le plus ensuite, hors du site : mettre l'URL du site dans la fiche Google
Business, y publier les photos du véhicule, et continuer à demander un avis après la course.

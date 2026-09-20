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
| Prestations Google | limousines, assistance, taxi 7j/7, taxi de nuit, longue distance, transfert gare, transfert aéroport |

## Ce qu'il reste à compléter

1. **SIREN / SIRET manquants** (`mentions-legales.html`, deux `[crochets]`).
   Le document transmis était un bulletin de salaire de l'Hôtel Le Regina : le SIRET qui y
   figurait est celui de l'hôtel, pas celui de l'entreprise de taxi. Rien n'en a été repris.
   Le bon numéro se trouve sur un extrait Kbis, un avis de situation INSEE
   (avis-situation-sirene.insee.fr) ou une facture de l'entreprise.
2. **Nom du gérant** (`mentions-legales.html`, responsable de la publication).
3. **URL canonique** : `https://lucaszimmermann.github.io/as-taxi-43/` apparaît dans
   `index.html` (`canonical`, `og:url`, `og:image`, JSON-LD), `robots.txt` et `sitemap.xml`.
   À remplacer partout le jour où un domaine est acheté.
4. **Réseaux sociaux** : l'affiche annonce Facebook, Snapchat et Instagram mais sans identifiant.
   Fournir les trois URL pour les ajouter au pied de page et au JSON-LD (`sameAs`).
5. **Distances et durées** du tableau des destinations : estimations, à confirmer par le chauffeur.
6. **Modèle du véhicule** : la page dit « berline break » sans nommer la marque, l'affiche
   montrant une Mercedes et les photos Google une Kia. À préciser si un seul véhicule circule.

## La photo du hero

`assets/hero-le-puy.jpg` est un recadrage de l'affiche de l'entreprise : la partie photo
seule, sans le texte ni le logo. La source ne fait que 616 px de large, elle a donc été
agrandie puis ré-accentuée. Le rendu est bon à la taille où elle s'affiche, mais si le
fichier d'origine existe (celui utilisé pour fabriquer l'affiche), le remplacer donnera un
résultat plus net :

```bash
# remplacer les deux tailles, mêmes noms de fichiers
assets/hero-le-puy.jpg       # 1920 px de large
assets/hero-le-puy-960.jpg   #  960 px de large, pour mobile
```

Le texte alternatif de l'image décrit la scène pour les lecteurs d'écran et le
référencement, le mettre à jour si la photo change.

## Structure

```
index.html            page principale
mentions-legales.html page légale
styles.css            toute la mise en forme
script.js             liens WhatsApp et composition du message
assets/hero-le-puy*.jpg  photo du hero (deux tailles)
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

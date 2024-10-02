# TD 03 - Parking

## Répartition des Tâches

Pour le projet TD 03 - Parking, nous avons réparti les tâches entre les membres du groupe afin d'optimiser notre collaboration et de nous assurer que chaque partie du projet soit bien couverte. Voici la répartition des responsabilités :

### Membre 1 : Routage et Contrôleur de Base (2.1)
- **Création de la branche Git** : Création de la branche nommée `etape02`.
- **Implémentation du HomeController** :
  - Création du fichier `./src/controllers/HomeController.ts`.
  - Suivi de la documentation de Hono pour créer le contrôleur et la vue HTML avec le contenu requis (titre, image, texte, liens).
  - Test de la route GET `/` pour s'assurer que la page s'affiche correctement.
- **Ressources Statistiques** : Ajout de la balise pour servir le fichier `parking.png` à partir du dossier `./static`.
- **Ajout de la CSS** : Intégration des liens vers les bibliothèques CSS dans la vue HTML.

### Membre 2 : Routage Avancé et Vue Dynamique (2.2)
- **Création de ReadAllCitiesController** :
  - Création du fichier `./src/controllers/parking/ReadAllCitiesController.ts`.
  - Association du contrôleur à la route GET `/parkings`.
- **Génération de la Vue Dynamique** :
  - Création du fichier `./src/views/city/ReadAllCitiesView.ts` pour générer dynamiquement la vue.
  - Génération d'une liste non ordonnée des villes à partir des données fournies.
- **Tests de Route** : Test de la nouvelle route `/parkings` avec un outil comme Postman ou Insomnia.

### Membre 3 : Vue HTML Dynamique avec TSX (2.3) et Gestion des Erreurs (2.4)
- **Création du Layout** :
  - Création du fichier `./src/views/shared/Layout.tsx`.
  - Utilisation du composant Layout pour structurer les vues HTML de base.
- **Adaptation de ReadAllCitiesView** :
  - Conversion du fichier `ReadAllCitiesView` en `.tsx` et adaptation du contenu pour utiliser le Layout.
  - Gestion de la dynamique de la liste avec des liens vers les pages dédiées aux villes.
- **Gestion des Erreurs** :
  - Implémentation de la gestion des erreurs 404 et 500 dans le fichier `index.ts`.
  - Utilisation du middleware pour gérer le trailing slash et assurer que les routes fonctionnent correctement.

## Suivi et Collaboration
- **Réunions de Synchronisation** : Des réunions régulières sont prévues pour discuter de l'avancement, résoudre les problèmes et intégrer les modifications.
- **Documentation** : Chaque membre documentera son travail dans ce README, en ajoutant des détails sur les tests effectués et les liens pertinents.


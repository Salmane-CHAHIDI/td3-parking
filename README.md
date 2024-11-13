Membre 1 : Routage et Contrôleur de Base (2.1)
Création de la branche Git : Créer une branche nommée etape02.
Implémentation du HomeController :
Créer le fichier ./src/controllers/HomeController.ts.
Suivre la documentation de Hono pour créer le contrôleur et la vue HTML avec le contenu requis (titre, image, texte, liens).
Tester la route GET / pour s'assurer que la page s'affiche correctement.
Ressources Statistiques : Ajouter la balise pour servir le fichier parking.png à partir du dossier ./static.
Ajout de la CSS : Incorporer les liens vers les bibliothèques CSS dans la vue HTML.
Membre 2 : Routage Avancé et Vue Dynamique (2.2)
Création de ReadAllCitiesController :
Créer le fichier ./src/controllers/parking/ReadAllCitiesController.ts.
Associer le contrôleur à la route GET /parkings.
Génération de la Vue Dynamique :
Créer le fichier ./src/views/city/ReadAllCitiesView.ts pour générer dynamiquement la vue.
Générer une liste non ordonnée des villes à partir des données fournies.
Tests de Route : Tester la nouvelle route /parkings avec un outil comme Postman ou Insomnia.
Membre 3 : Vue HTML Dynamique avec TSX (2.3) et Gestion des Erreurs (2.4)
Création du Layout :
Créer le fichier ./src/views/shared/Layout.tsx.
Utiliser le composant Layout pour structurer les vues HTML de base.
Adaptation de ReadAllCitiesView :
Convertir le fichier ReadAllCitiesView en .tsx et adapter le contenu pour utiliser le Layout.
Gérer la dynamique de la liste avec des liens vers les pages dédiées aux villes.
Gestion des Erreurs :
Implémenter la gestion des erreurs 404 et 500 dans le fichier index.ts.
Utiliser le middleware pour gérer le trailing slash et assurer que les routes fonctionnent correctement.
Collaboration et Suivi
Réunions de Synchronisation : Planifier des réunions régulières pour discuter de l'avancement, résoudre les problèmes et intégrer les modifications.
Documentation : Chaque membre doit documenter son travail dans le fichier README.md, en ajoutant des détails sur les tests effectués et les liens pertinents.
# **TD03 - Parking**

## **Introduction**
Bienvenue dans le projet **TD03 - Parking**, réalisé dans le cadre du module **Programmation Web** (L3 MIASHS - IDMC, Université de Lorraine, 2024/2025).  
Ce projet a pour objectif de développer une application web de gestion de parkings en adoptant une architecture **MVC** (Model-View-Controller), avec le framework **Hono**, **TypeScript**, et l'environnement **Bun**.

## **Membres de l'équipe**
- Salmane CHAHIDI
- Theo Decuypere
- Reda Mohamed Lahmar

---

## **Structure du projet**

### **Arborescence**
C:.
│   index.ts
│   
├───controllers
│   │   HomeController.ts
│   │   
│   ├───city
│   │       ReadAllCitiesController.ts
│   │       ReadOneCityController.ts
│   │       
│   └───parking
│           ReadAllParkingsController.ts
│           ReadOneParkingController.ts
│
├───data
│       setupDatabase.ts
│       staticDatabase.ts
│
├───models
│       City.ts
│       Park.ts
│       Parking.ts
│       Spot.ts
│
├───routes
│       cityRoutes.ts
│       parkingRoutes.ts
│
├───types
│       gps.ts
│
├───utils
│       generateRandomNumberId.ts
│       toSlug.ts
│
└───views
    ├───city
    │       ReadAllCitiesView.tsx
    │       ReadOneCityView.tsx
    │
    ├───parking
    │       ReadAllParkingsView.tsx
    │       ReadOneParkingView.tsx
    │
    └───shared
            Layout.tsx

---

## **Étapes du projet**

---

# Étape 3 : Base de données SQLite

## Objectif de l'étape

L'objectif de cette étape est d'intégrer une base de données SQLite dans le projet afin de remplacer les données statiques utilisées précédemment. En utilisant SQLite, nous allons stocker et gérer de manière dynamique les informations relatives aux parkings, villes, et transactions de stationnement.

Cette étape se divise en plusieurs sous-objectifs :
1. Installer et configurer SQLite.
2. Créer une base de données SQLite `parking.sqlite`.
3. Définir les tables nécessaires pour stocker les données.
4. Peupler la base de données avec des informations par défaut.
5. Adapter le projet pour interagir avec cette base de données via des requêtes SQL.

## Détails de l'implémentation

### 1. **Installation et configuration de SQLite**

Tout d'abord, nous avons ajouté la dépendance `bun:sqlite` au projet. SQLite est une base de données légère, rapide et facile à utiliser qui est parfaitement adaptée à un projet de taille moyenne comme celui-ci. L'utilisation de `bun:sqlite` permet de simplifier l'intégration de SQLite avec le code JavaScript/TypeScript, ce qui rend le projet encore plus flexible.

### 2. **Création de la base de données et des tables**

Une fois SQLite installé, la base de données est créée sous le nom de `parking.sqlite`. Cette base de données contient trois tables principales :
- **cities** : Cette table stocke les informations sur les villes, telles que leur nom, leur localisation et leur pays.
- **parkings** : Cette table contient des informations sur les parkings, telles que leur nom, leur emplacement, le nombre de places disponibles, leur tarif horaire et leur statut (ouvert ou fermé).
- **parks** : Cette table enregistre les transactions de stationnement, avec les horaires de début et de fin, ainsi que les informations relatives à la place de stationnement et au véhicule.

Chaque table est définie avec des relations de clé étrangère pour assurer l'intégrité des données, par exemple, un parking est lié à une ville spécifique via la clé `city_id`.

### 3. **Peuplement de la base de données**

Une fois les tables créées, des données par défaut sont insérées dans la base de données. Cela permet de tester l'interaction avec la base de données avant d'effectuer des requêtes plus complexes. Des villes et des parkings fictifs sont insérés pour vérifier le bon fonctionnement du système. Ces données sont également utilisées pour démontrer la structure et les relations entre les tables.

### 4. **Interaction avec la base de données**

Les requêtes SQL sont ensuite utilisées pour interagir avec la base de données. L'objectif est de récupérer des données brutes (telles que des informations de parkings ou de villes) et de les transformer en objets métier. Par exemple, une fois les données des villes récupérées via une requête SQL, celles-ci sont transformées en instances de la classe `City`. Cela permet de maintenir une architecture propre et de travailler avec des objets plutôt qu'avec des données primaires.

Le code utilise la syntaxe `async/await` pour gérer les requêtes asynchrones de manière lisible et moderne, ce qui simplifie la gestion des erreurs via des blocs `try/catch`.

### 5. **Adaptation des contrôleurs**

Une fois la base de données configurée et les données insérées, les contrôleurs du projet doivent être adaptés pour effectuer des requêtes SQL en lieu et place des anciennes méthodes basées sur des données statiques. Cela implique de remplacer les appels aux données statiques par des appels à la base de données pour récupérer les informations de manière dynamique.

En résumé, l'étape 3 permet de passer de l'utilisation de données statiques à une gestion dynamique des données via une base de données SQLite. Cela apporte une plus grande flexibilité et évolutivité au projet, tout en conservant une structure claire et organisée pour gérer les informations sur les parkings.

## Résumé des étapes réalisées

1. **Installation de SQLite** avec le package `bun:sqlite`.
2. **Création de la base de données `parking.sqlite`** et des tables nécessaires : `cities`, `parkings`, et `parks`.
3. **Insertion des données par défaut** pour tester la structure de la base de données.
4. **Modification des contrôleurs** pour interagir avec la base de données à travers des requêtes SQL asynchrones.
5. **Transformation des données récupérées** en instances d'objets personnalisés pour une manipulation plus propre et intuitive.


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

### **Étape 2 : Mise en place de l'architecture MVC**

#### **2.1 : Routage basique, contrôleur et rendu HTML statique**
- **Routage** : Création des routes dans `src/routes/parkingRoutes.ts` et `src/routes/cityRoutes.ts`.
- **Contrôleur HomeController** : 
  - Affiche une page statique avec un titre, une image et une description.  
  - Des liens vers les pages **Our Cities** (`/cities`) et **Our Car Parks** (`/parkings`).
  - CSS distant avec les bibliothèques **Roboto** et **Milligram** pour améliorer le style.

#### **2.2 : Routage avancé et vue HTML dynamique**
- **Contrôleur ReadAllCitiesController** : 
  - Route `/cities` pour afficher une liste dynamique des villes.
- **Vue dynamique ReadAllCitiesView** : 
  - Génère une liste HTML des villes avec des liens vers les pages `/cities/{slug}`.

#### **2.3 : Vue HTML dynamique avec TSX**
- **Composant Layout** : Structure HTML de base en TSX pour réutilisation sur plusieurs pages.
- **Vue ReadAllCitiesView.tsx** : 
  - Affiche dynamiquement des liens pour chaque ville.
- **Contrôleur ReadOneCityController** : 
  - Route `/cities/{slug}` pour afficher les détails d'une ville et ses parkings associés.

#### **2.4 : Gestion des erreurs**
- **Middleware Trailing Slash** : Uniformisation des URI avec ou sans slash final.
- **Gestion des erreurs HTTP** :
  - Pages d'erreur HTML personnalisées pour **404** et **500**.
  - Gestion centralisée des erreurs pour les entités non trouvées (villes ou parkings).

---

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

### **Étape 3 : Base de données SQLite**

#### **1. Installation et configuration de SQLite**
- **Ajout de la dépendance** :
  ```bash
  bun add bun:sqlite

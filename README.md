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
├───data
│       staticDatabase.ts
│
├───models
│       City.ts
│       Park.ts
│       Parking.ts
│       Spot.ts
│
├───types
│       gps.ts
│
└───utils
        generateRandomNumberId.ts
        toSlug.ts
---

## **Étapes du projet**

### **Étape 1 : Initialisation du projet**
1. **Création du projet avec Bun**  
   Le projet a été initialisé avec Bun et un serveur local a été démarré pour vérifier son bon fonctionnement.

2. **Structure du projet**  
   Mise en place de l'architecture du projet et des dossiers nécessaires à une bonne organisation.

3. **Fonctions utilitaires**  
   - `toSlug` : Convertit une chaîne de texte en slug, un identifiant URL-friendly.
   - `generateRandomNumberId` : Génère un identifiant numérique aléatoire de 6 chiffres.

4. **Modèles créés**  
   - **City** : Représente une ville avec des parkings associés.
   - **Parking** : Représente un parking avec des places.
   - **Spot** : Représente une place de parking.
   - **Park** : Représente une réservation de place de parking.

5. **Base de données statique**  
   Une base de données simulée est présente dans `src/data/staticDatabase.ts`, contenant les informations suivantes :
   - Aix-en-Provence (France) : 1 parking, 100 places.
   - La Spezia (Italie) : 2 parkings, 50 et 80 places.
   - Aix-la-Chapelle (Allemagne) : 1 parking, 40 places.
   - San Cristóbal de La Laguna (Espagne) : 1 parking, 70 places.
   - Newcastle upon Tyne (Angleterre) : 2 parkings, 60 et 90 places.

6. **Tests unitaires**  
   Des tests ont été réalisés pour vérifier le bon fonctionnement des fonctions utilitaires `toSlug` et `generateRandomNumberId`.

---


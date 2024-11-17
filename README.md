# **TD03 - Parking**

## **Introduction**
Bienvenue dans le projet **TD03 - Parking**, réalisé dans le cadre du module **Programmation Web** (L3 MIASHS - IDMC, Université de Lorraine, 2024/2025).  
Ce projet a pour objectif de développer une application web de gestion de parkings en adoptant une architecture **MVC** (Model-View-Controller), avec le framework **Hono**, **TypeScript**, et l'environnement **Bun**.

## **Membres de l'équipe**
- Prénom Nom 1
- Prénom Nom 2 (ajoutez vos noms ici)

---

## **Structure du projet**

### **Arborescence**

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

### **Étape 3 : Base de données SQLite**

#### **1. Installation et configuration de SQLite**
- **Ajout de la dépendance** :
  ```bash
  bun add bun:sqlite

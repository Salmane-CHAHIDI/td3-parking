Projet TD03 - Parking - README
Introduction
Bienvenue dans le projet TD03 - Parking réalisé dans le cadre du module Programmation Web (L3 MIASHS - IDMC, Université de Lorraine, 2024/2025). Ce projet a pour objectif de développer une application web de gestion de parkings en adoptant une architecture MVC (Model-View-Controller), avec le framework Hono, TypeScript, et l'environnement Bun.

Membres de l'équipe
Prénom Nom 1
Prénom Nom 2 (ajoutez vos noms ici)
Structure du projet
Arborescence
csharp
Copy code
src/
├── controllers/       # Contrôleurs pour la gestion des actions
├── data/              # Données statiques ou configuration de base de données
├── db/                # Scripts pour la gestion de SQLite
├── models/            # Classes métier (City, Parking, Spot, etc.)
├── routes/            # Définition des routes
├── services/          # Logique métier
├── types/             # Typages TypeScript
├── utils/             # Fonctions utilitaires
├── views/             # Composants de rendu (HTML et TSX)
├── tests/             # Tests unitaires et fonctionnels
static/                # Ressources statiques (images, CSS, etc.)
Étape 1 : Initialisation du projet
Actions réalisées
Création du projet avec Bun : Initialisation et démarrage local.
Structure du projet : Mise en place des dossiers mentionnés.
Fonctions utilitaires :
toSlug : Convertit une chaîne en slug (identifiant unique utilisable dans les URI).
generateRandomNumberId : Génère un identifiant numérique aléatoire de 6 chiffres.
Modèles créés :
City : Représente une ville avec des parkings associés.
Parking : Représente un parking et ses places.
Spot : Représente une place de parking.
Park : Représente une réservation de place.
Base de données statique : Données initiales dans src/data/staticDatabase.ts :
Aix-en-Provence (France) : 1 parking, 100 places.
La Spezia (Italie) : 2 parkings, 50 et 80 places.
Aix-la-Chapelle (Allemagne) : 1 parking, 40 places.
San Cristóbal de La Laguna (Espagne) : 1 parking, 70 places.
Newcastle upon Tyne (Angleterre) : 2 parkings, 60 et 90 places.
Tests unitaires :
Vérification des utilitaires toSlug et generateRandomNumberId.
Étape 2 : Mise en place de l'architecture MVC
Étape 2.1 : Routage basique, contrôleur et rendu HTML statique
Routage : Création de routes dans src/routes/parkingRoutes.ts et src/routes/cityRoutes.ts.
Contrôleur HomeController :
Page statique générée avec titre, image et description.
Liens vers "Our Cities" (/cities) et "Our Car Parks" (/parkings).
CSS distant : Intégration de Roboto et Milligram pour le style.
Étape 2.2 : Routage avancé et vue HTML dynamique
Contrôleur ReadAllCitiesController :
Route /cities affichant une liste dynamique des villes.
Vue dynamique ReadAllCitiesView :
Génération d’une liste HTML des villes avec des liens vers /cities/{slug}.
Étape 2.3 : Vue HTML dynamique avec TSX
Composant Layout :
Structure HTML de base en TSX.
Vue ReadAllCitiesView.tsx :
Génération de liens dynamiques pour chaque ville.
Contrôleur ReadOneCityController :
Route /cities/{slug} pour afficher les détails d'une ville et ses parkings associés.
Étape 2.4 : Gestion des erreurs
Middleware Trailing Slash :
Uniformisation des URI avec ou sans slash final.
Gestion centralisée des erreurs :
Pages HTML personnalisées pour erreurs 404 et 500.
Gestion des erreurs HTTP pour les entités non trouvées (villes ou parkings).
Étape 3 : Base de données SQLite
Installation et configuration de SQLite
Ajout de la dépendance :
bash
Copy code
bun add bun:sqlite
Création et configuration de la base :
Fichier src/db/database.ts :
typescript
Copy code
import { Database } from "bun:sqlite";

const db = new Database("parking.sqlite");
export default db;
Création des tables
Ajout des tables dans src/db/setup.ts :

typescript
Copy code
import db from "./database";

const setupDatabase = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS cities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            slug TEXT NOT NULL UNIQUE,
            location TEXT,
            country TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS parkings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            location TEXT,
            numberOfPlaces INTEGER NOT NULL,
            opened INTEGER NOT NULL DEFAULT 1,
            hourlyRate INTEGER NOT NULL,
            city_id INTEGER NOT NULL,
            FOREIGN KEY(city_id) REFERENCES cities(id)
        );

        CREATE TABLE IF NOT EXISTS spots (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parking_id INTEGER NOT NULL,
            FOREIGN KEY(parking_id) REFERENCES parkings(id)
        );

        CREATE TABLE IF NOT EXISTS parks (
            id TEXT PRIMARY KEY,
            startedAt TEXT NOT NULL,
            endedAt TEXT,
            vehicleNumberPlate TEXT,
            spot_id INTEGER NOT NULL,
            FOREIGN KEY(spot_id) REFERENCES spots(id)
        );
    `);

    console.log("Database setup complete!");
};

setupDatabase();
Exécutez la configuration :

bash
Copy code
bun run src/db/setup.ts
Adaptation des contrôleurs
Exemple avec ReadAllCitiesController :
typescript
Copy code
import db from "../db/database";
import { City } from "../models/City";

export const ReadAllCitiesController = async () => {
    const rows = db.query("SELECT * FROM cities").all();
    return rows.map(row => new City(row.id, row.name, row.slug, row.location, row.country));
};
Tests
Tests unitaires
Vérification des fonctions utilitaires et des modèles.
Exemple :
typescript
Copy code
test("toSlug correctly formats strings", () => {
    expect(toSlug("Hello World")).toBe("hello-world");
});
Tests fonctionnels
Utilisation de Insomnia/Postman pour tester les routes.
Export des collections : (ajoutez ici le lien ou le chemin des exports).
Utilisation
Installation
Clonez le dépôt :
bash
Copy code
git clone <url_du_projet>
Installez les dépendances :
bash
Copy code
bun install
Lancer l'application
bash
Copy code
bun run dev
Accédez à http://localhost:3000.

Ressources
Documentation Hono
Documentation TypeScript
Documentation SQLite
CSS Milligram
// src/data/staticDatabase.ts

// Importation du module SQLite de Bun, utilisé pour interagir avec une base de données SQLite
import { Database } from 'bun:sqlite';

// Importation du modèle City pour gérer les villes dans la base de données
import { City } from '../models/City';

// Initialisation de la base de données SQLite dans un fichier 'parking.sqlite'
const db = new Database('parking.sqlite');

// Fonction asynchrone pour peupler (seed) la base de données
const seedTables = async (db: Database) => {
    try {
        // Suppression des données existantes dans les tables (commenté dans ce code)
        /*await db.run(`DELETE FROM parks;`);
        await db.run(`DELETE FROM parkings;`);
        await db.run(`DELETE FROM cities;`);*/

        // Création des tables dans la base de données si elles n'existent pas déjà
        await db.run(`
            CREATE TABLE IF NOT EXISTS "cities" (
                "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  -- Identifiant unique pour chaque ville
                "name" TEXT NOT NULL UNIQUE,                      -- Nom de la ville (doit être unique)
                "slug" TEXT NOT NULL UNIQUE,                      -- Version du nom sous forme d'URL (slug)
                "location" TEXT,                                  -- Coordonnées GPS de la ville (sous forme de texte)
                "country" TEXT NOT NULL                           -- Pays de la ville
            );
        `);

        await db.run(`
            CREATE TABLE IF NOT EXISTS "parkings" (
                "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,  -- Identifiant unique pour chaque parking
                "name" TEXT NOT NULL UNIQUE,                       -- Nom du parking (doit être unique)
                "location" TEXT,                                   -- Coordonnées GPS du parking
                "numberOfPlaces" INTEGER NOT NULL,                 -- Nombre de places de parking
                "opened" INTEGER NOT NULL DEFAULT 1,                -- Statut ouvert/fermé (1 pour ouvert, 0 pour fermé)
                "hourlyRate" INTEGER NOT NULL,                     -- Tarif horaire pour le parking
                "city_id" INTEGER NOT NULL,                        -- Référence à l'id de la ville à laquelle le parking appartient
                FOREIGN KEY("city_id") REFERENCES "cities"("id")  -- Clé étrangère qui fait référence à la table cities
            );
        `);

        await db.run(`
            CREATE TABLE IF NOT EXISTS "parks" (
                "id" TEXT NOT NULL PRIMARY KEY,       -- Identifiant unique pour chaque enregistrement de stationnement
                "startedAt" TEXT NOT NULL,           -- Date et heure de début du stationnement
                "endedAt" TEXT,                      -- Date et heure de fin du stationnement (peut être null si en cours)
                "vehicleNumberPlate" TEXT,           -- Numéro de plaque du véhicule
                "spot_id" INTEGER NOT NULL,          -- Référence à l'id du spot (place de parking)
                FOREIGN KEY("spot_id") REFERENCES "spots"("id") -- Clé étrangère faisant référence à la table spots
            );
        `);

        // Insertion des données dans la table "cities" (villes)
        await db.run(`
            INSERT INTO cities (name, slug, location, country) 
            VALUES 
                ('Aix-en-Provence', 'aix-en-provence', '43.533329,5.43333', 'France'), 
                ('La Spezia', 'la-spezia', '44.238366,9.6912326', 'Italy'),
                ('Aix-la-Chapelle', 'aix-la-chapelle', '50.776351,6.083862', 'Germany'),
                ('San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '28.487180709838867,-16.313879013061523', 'Spain'),
                ('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.9738474,-1.6131572', 'England');
        `);

        // Vérification que les villes ont été insérées correctement dans la base de données
        const citiesDataRaw: any = await db.query(`SELECT * FROM cities`).all();

        // Vérification que des villes ont bien été récupérées
        if (citiesDataRaw.length === 0) {
            throw new Error("Aucune ville trouvée dans la base de données.");
        }

        // Requête préparée pour insérer les parkings associés aux villes
        const insertParkingsQuery = `
            INSERT INTO parkings (name, location, numberOfPlaces, opened, hourlyRate, city_id)
            VALUES 
                (?, ?, ?, ?, ?, ?), 
                (?, ?, ?, ?, ?, ?),
                (?, ?, ?, ?, ?, ?),
                (?, ?, ?, ?, ?, ?),
                (?, ?, ?, ?, ?, ?),
                (?, ?, ?, ?, ?, ?),
                (?, ?, ?, ?, ?, ?);
        `;

        // Insertion des parkings en utilisant les identifiants des villes déjà insérées
        await db.run(insertParkingsQuery, [
            'A', '43.533329,5.43333', 100, 1, 4.5, citiesDataRaw[0].id,
            'B', '44.238366,9.6912326', 50, 1, 3, citiesDataRaw[1].id,
            'C', '44.238366,9.6912326', 80, 1, 2.5, citiesDataRaw[1].id,
            'D', '50.776351,6.083862', 40, 1, 2.8, citiesDataRaw[2].id,
            'E', '28.487180709838867,-16.313879013061523', 70, 1, 3.1, citiesDataRaw[3].id,
            'F', '54.9738474,-1.6131572', 60, 1, 2.4, citiesDataRaw[4].id,
            'G', '54.9738474,-1.6131572', 90, 1, 3.2, citiesDataRaw[4].id
        ]);

        // Vérification que les parkings ont bien été insérés dans la base de données
        const parkingsData = await db.query(`
            SELECT id, name, location, numberOfPlaces AS numberOfSpots, opened, hourlyRate, city_id
            FROM parkings
        `).all();
        console.log("Parkings insérés : ", parkingsData);

        // Confirmation de la réussite de l'insertion des données
        console.log("Les données ont été réinitialisées et insérées avec succès.");
    } catch (error) {
        // Gestion des erreurs éventuelles lors de l'insertion des données
        console.error("Erreur lors de l'insertion des données :", error);
    }
};

// Appel de la fonction pour initialiser et peupler la base de données
seedTables(db);

// Exportation de la base de données et de la fonction de peuplement
export { db, seedTables };

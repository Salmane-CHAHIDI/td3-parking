import { Database } from 'bun:sqlite';
import { City } from '../models/City';

const db = new Database('parking.sqlite');
const seedTables = async (db: Database) => {
    try {
        // Désactiver temporairement les contraintes de clé étrangère pour éviter les erreurs lors de la suppression
    
        // Supprimer toutes les données existantes dans les tables
        /*await db.run(`DELETE FROM parks;`);
        await db.run(`DELETE FROM parkings;`);
        await db.run(`DELETE FROM cities;`);*/
    
        // Création des tables
        await db.run(`
            CREATE TABLE IF NOT EXISTS "cities" (
                "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                "name" TEXT NOT NULL UNIQUE,
                "slug" TEXT NOT NULL UNIQUE,
                "location" TEXT,
                "country" TEXT NOT NULL
            );
        `);
    
        await db.run(`
            CREATE TABLE IF NOT EXISTS "parkings" (
                "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                "name" TEXT NOT NULL UNIQUE,
                "location" TEXT,
                "numberOfPlaces" INTEGER NOT NULL,
                "opened" INTEGER NOT NULL DEFAULT 1,
                "hourlyRate" INTEGER NOT NULL,
                "city_id" INTEGER NOT NULL,
                FOREIGN KEY("city_id") REFERENCES "cities"("id")
            );
        `);
    
        await db.run(`
            CREATE TABLE IF NOT EXISTS "parks" (
                "id" TEXT NOT NULL PRIMARY KEY,
                "startedAt" TEXT NOT NULL,
                "endedAt" TEXT,
                "vehicleNumberPlate" TEXT,
                "spot_id" INTEGER NOT NULL,
                FOREIGN KEY("spot_id") REFERENCES "spots"("id")
            );
        `);
    
        // Insertion des villes
        await db.run(`
            INSERT INTO cities (name, slug, location, country) 
            VALUES 
                ('Aix-en-Provence', 'aix-en-provence', '43.533329,5.43333', 'France'), 
                ('La Spezia', 'la-spezia', '44.238366,9.6912326', 'Italy'),
                ('Aix-la-Chapelle', 'aix-la-chapelle', '50.776351,6.083862', 'Germany'),
                ('San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '28.487180709838867,-16.313879013061523', 'Spain'),
                ('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.9738474,-1.6131572', 'England');
        `);
    
        // Vérifier que les villes ont été insérées
        // Récupérer les données des villes
        const citiesDataRaw : any = await db.query(`SELECT * FROM cities`).all();

        // Vérification si citiesData est vide
        if (citiesDataRaw.length === 0) {
            throw new Error("Aucune ville trouvée dans la base de données.");
        }

        // Utilisation de paramètres liés pour l'insertion des parkings
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

        await db.run(insertParkingsQuery, [
            'A', '43.533329,5.43333', 100, 1, 4.5, citiesDataRaw[0].id,
            'B', '44.238366,9.6912326', 50, 1, 3, citiesDataRaw[1].id,
            'C', '44.238366,9.6912326', 80, 1, 2.5, citiesDataRaw[1].id,
            'D', '50.776351,6.083862', 40, 1, 2.8, citiesDataRaw[2].id,
            'E', '28.487180709838867,-16.313879013061523', 70, 1, 3.1, citiesDataRaw[3].id,
            'F', '54.9738474,-1.6131572', 60, 1, 2.4, citiesDataRaw[4].id,
            'G', '54.9738474,-1.6131572', 90, 1, 3.2, citiesDataRaw[4].id
    ]);
        
    
        // Vérifier que les parkings ont été insérés
        const parkingsData = await db.query(`
            SELECT id, name, location, numberOfPlaces AS numberOfSpots, opened, hourlyRate, city_id
            FROM parkings
        `).all();
        console.log("Parkings insérés : ", parkingsData);
    
        console.log("Les données ont été réinitialisées et insérées avec succès.");
    } catch (error) {
        console.error("Erreur lors de l'insertion des données :", error);
    }
    
};

// Appel de la fonction de peuplement des tables
seedTables(db);

export { db, seedTables };

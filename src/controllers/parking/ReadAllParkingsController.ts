import { type Context } from "hono";
import { db } from "../../data/setupDatabase"; // Base de données SQLite
import ReadAllParkingsView from "../../views/parking/ReadAllParkingsView";
import { Parking } from "../../models/Parking"; // Le modèle Parking

// Contrôleur pour afficher tous les parkings
export const ReadAllParkingsController = async (c: Context) => {
    try {
        // Récupérer tous les parkings de la base de données
        const parkingsData = db.query(`SELECT id, name, location, numberOfPlaces AS numberOfSpots, opened, hourlyRate, city_id FROM parkings`).all();

        // Convertir les données en instances de Parking
        const parkings: Parking[] = parkingsData.map((parking: any) => ({
            id: parking.id,
            name: parking.name,
            location: { latitude: parseFloat(parking.location.split(',')[0]), longitude: parseFloat(parking.location.split(',')[1]) },
            numberOfSpots: parking.numberOfSpots,
            opened: Boolean(parking.opened),
            hourlyRate: parking.hourlyRate,
            city_id: parking.city_id,
            parkIds: [], // Spots chargés séparément si nécessaire
            spots: []    // Spots chargés séparément si nécessaire
        }));
        
        // Passer les données des parkings récupérées à la vue
        console.log(parkings);
        const view = ReadAllParkingsView({ parkings });
        return c.html(view);

    } catch (error) {
        console.error("Erreur lors de la récupération des parkings :", error);
        return c.text("Erreur lors de la récupération des parkings", 500);
    }
};

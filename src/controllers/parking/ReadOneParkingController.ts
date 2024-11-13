import { Context } from "hono";
import { db } from "../../data/setupDatabase"; // Base de données SQLite
import { HTTPException } from 'hono/http-exception';
import { ReadOneParkingView } from "../../views/parking/ReadOneParkingView";
import { Parking } from "../../models/Parking"; // Le modèle Parking

export const ReadOneParkingController = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));

        // Requête pour récupérer un parking spécifique par son ID
        const parkingData : any = db.query(`SELECT id, name, location, numberOfPlaces AS numberOfSpots, opened, hourlyRate, city_id FROM parkings WHERE id = ?`).get(id);

        if (!parkingData) {
            throw new HTTPException(404, { message: 'Parking not found' });
        }

        // Convertir les données en instance de Parking
        const parking: Parking = {
            id: parkingData.id,
            name: parkingData.name,
            location: { latitude: parseFloat(parkingData.location.split(',')[0]), longitude: parseFloat(parkingData.location.split(',')[1]) },
            numberOfSpots: parkingData.numberOfSpots,
            opened: Boolean(parkingData.opened),
            hourlyRate: parkingData.hourlyRate,
            city_id: parkingData.city_id,
            parkIds: [],
            spots: [] // Spots chargés séparément si nécessaire
        };

        // Passer les données du parking à la vue
        return c.html(ReadOneParkingView({ parking }));

    } catch (error) {
        console.error("Erreur lors de la récupération du parking :", error);
        return c.text("Erreur lors de la récupération du parking", 500);
    }
};

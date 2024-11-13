import { Context } from "hono";
import { db } from '../../data/setupDatabase'; // Base de données SQLite
import { ReadOneCityView } from "../../views/city/ReadOneCityView";
import { HTTPException } from 'hono/http-exception';
import { City } from "../../models/City";
import { Parking } from "../../models/Parking";

export const ReadOneCityController = async (c: Context) => {
    try {
        const slug = c.req.param("slug");

        // Récupérer la ville correspondant au slug
        const cityData : any = db.query(`SELECT id, name, slug, location, country FROM cities WHERE slug = ?`).get(slug);

        if (!cityData) {
            throw new HTTPException(404, { message: 'City not found' });
        }

        // Transformer cityData en instance de City
        const city: City = {
            id: cityData.id,
            name: cityData.name,
            slug: cityData.slug,
            location: { latitude: parseFloat(cityData.location.split(',')[0]), longitude: parseFloat(cityData.location.split(',')[1]) },
            country: cityData.country,
            parkingsIds: [] // Parkings récupérés séparément
        };

        // Récupérer les parkings associés à la ville
        const parkingsData = db.query(`SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings WHERE city_id = ?`).all(city.id);

        // Transformer parkingsData en instances de Parking
        const cityParkings: Parking[] = parkingsData.map((parking: any) => ({
            id: parking.id,
            name: parking.name,
            location: { latitude: parseFloat(parking.location.split(',')[0]), longitude: parseFloat(parking.location.split(',')[1]) },
            numberOfSpots: parking.numberOfPlaces,
            opened: Boolean(parking.opened),
            hourlyRate: parking.hourlyRate,
            city_id: parking.city_id,
            parkIds: [], // Spots chargés séparément si nécessaire
            spots: []    // Spots chargés séparément si nécessaire
        }));

        // Générer la vue avec les informations de la ville et des parkings associés
        return c.html(ReadOneCityView({ city, parkings: cityParkings }));

    } catch (error) {
        console.error("Erreur lors de la récupération de la ville :", error);
        return c.text("Erreur lors de la récupération de la ville", 500);
    }
};

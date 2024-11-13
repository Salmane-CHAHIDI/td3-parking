import { Context } from 'hono';
import { db } from '../../data/setupDatabase'; // Base de données SQLite
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';
import { City } from '../../models/City';

// Contrôleur pour lire toutes les villes
export const ReadAllCitiesController = async (c: Context) => {
    try {
        // Charger toutes les villes depuis la base de données
        const citiesData = db.query(`SELECT id, name, slug, location, country FROM cities`).all();

        // Convertir les données en instances de City pour correspondre à notre modèle
        const cities: City[] = citiesData.map((city: any) => ({
            id: city.id,
            name: city.name,
            slug: city.slug,
            location: { latitude: parseFloat(city.location.split(',')[0]), longitude: parseFloat(city.location.split(',')[1]) },
            country: city.country,
            parkingsIds: [] // Parkings chargés séparément si nécessaire
        }));

        // Passer les villes récupérées à la vue
        const citiesHTML = ReadAllCitiesView({ cities });
        return c.html(citiesHTML);

    } catch (error) {
        console.error("Erreur lors de la récupération des villes :", error);
        return c.text("Erreur lors de la récupération des villes", 500);
    }
};

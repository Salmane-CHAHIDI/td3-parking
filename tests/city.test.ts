import { City } from "../src/models/City";
import { generateRandomNumberId } from '../src/utils/generateRandomNumberId';
import { toSlug } from "../src/utils/toSlug";


describe('City Class', () => {
    
    it('should create a new City object with correct attributes', () => {
        // Test de base de la création d'une ville
        const cityName = 'Aix-en-Provence';
        const cityCountry = 'France';
        const cityLocation = { latitude: 43.533329, longitude: 5.43333 };

        const city = new City(cityName, cityCountry, cityLocation);

        // Vérification des attributs
        expect(city.name).toBe(cityName);  // Le nom de la ville
        expect(city.country).toBe(cityCountry);  // Le pays
        expect(city.location).toEqual(cityLocation);  // La localisation
        expect(city.slug).toBe('aix-en-provence');  // Vérification du slug généré
        //expect(city.id).toBe(123);  // L'ID généré (nous avons mocké cette valeur)
        expect(city.parkingsIds).toEqual([]);  // Liste vide de parkings par défaut
    });

    it('should assign parkingsIds if provided', () => {
        // Test de l'assignation des parkingsIds
        const cityName = 'La Spezia';
        const cityCountry = 'Italy';
        const cityLocation = { latitude: 43.533329, longitude: 5.43333 };
        const parkingsIds = [101, 102, 103];

        const city = new City(cityName, cityCountry, cityLocation, parkingsIds);

        // Vérification que les parkingsIds sont assignés correctement
        expect(city.parkingsIds).toEqual(parkingsIds);  // Vérification des parkings associés
    });

    it('should generate a slug from the city name', () => {
        // Test de la fonction toSlug
        const cityName = 'San Cristóbal de La Laguna';
        const citySlug = toSlug(cityName);

        // Vérification du slug
        expect(citySlug).toBe('san-cristobal-de-la-laguna');  // Le slug doit être généré en minuscule avec des tirets
    });

    it('should return a number greater than 0 as ID', () => {
        // Test du générateur d'ID
        const id = generateRandomNumberId();

        // Vérification que l'ID est bien généré
        expect(id).toBeGreaterThan(0);  // L'ID doit être supérieur à 0
    });

    it('should handle empty parkingsIds correctly', () => {
        // Test si aucun parkingsIds n'est passé
        const cityName = 'Newcastle upon Tyne';
        const cityCountry = 'England';
        const cityLocation = { latitude: 54.9738474, longitude: -1.6131572 };

        const city = new City(cityName, cityCountry, cityLocation);

        // Vérification que la liste des parkings est vide
        expect(city.parkingsIds).toEqual([]);
    });
});

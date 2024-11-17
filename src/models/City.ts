// src/models/City.ts

// Importation des modules nécessaires
import { GPS } from "../types/gps";  // Type pour la géolocalisation (latitude, longitude)
import { generateRandomNumberId } from "../utils/generateRandomNumberId";  // Fonction utilitaire pour générer un identifiant unique
import { toSlug } from '../utils/toSlug';  // Fonction utilitaire pour générer un "slug" à partir du nom de la ville

/**
 * Représente une ville avec ses informations principales, comme le nom, le pays,
 * la géolocalisation et la liste des parkings associés.
 */
export class City {
    // Déclaration des propriétés de la classe City
    id: number;  // Identifiant unique de la ville (généré via generateRandomNumberId)
    name: string;  // Nom de la ville
    slug: string;  // "Slug" de la ville (version URL-friendly du nom)
    parkingsIds: Array<number>;  // Liste des identifiants des parkings associés à cette ville
    country: string;  // Pays où se trouve la ville
    location: GPS;  // Coordonnées géographiques de la ville (latitude et longitude)

    /**
     * Constructeur de la classe City. Initialise une ville avec les informations suivantes :
     * 
     * @param name - Le nom de la ville
     * @param country - Le pays de la ville
     * @param location - Les coordonnées géographiques de la ville (latitude et longitude)
     * @param parkingsIds - Liste des identifiants des parkings associés à la ville (par défaut une liste vide)
     */
    constructor(name: string, country: string, location: GPS, parkingsIds: number[] = []) {
        // Initialisation des propriétés de la ville
        this.id = generateRandomNumberId();  // Génération d'un identifiant unique pour la ville
        this.name = name;  // Initialisation du nom de la ville
        this.slug = toSlug(name);  // Conversion du nom de la ville en slug (utilisé dans les URLs)
        this.country = country;  // Initialisation du pays
        this.location = location;  // Initialisation des coordonnées géographiques de la ville
        this.parkingsIds = parkingsIds;  // Initialisation des identifiants des parkings associés
    }
}

// src/models/Spot.ts

// Importation de la fonction utilitaire pour générer un identifiant unique
import { generateRandomNumberId } from '../utils/generateRandomNumberId';

/**
 * Représente une place de parking dans un parking spécifique.
 */
export default class Spot {
    id: number;  // Identifiant unique de la place de parking
    parking_id: number;  // Identifiant du parking auquel cette place appartient

    /**
     * Constructeur de la classe Spot. Initialise une place de parking avec les informations suivantes :
     * 
     * @param parking_id - L'identifiant du parking auquel la place appartient
     */
    constructor(parking_id: number) {
        // Initialisation des propriétés de la place de parking
        this.id = generateRandomNumberId();  // Génération d'un identifiant unique pour la place de parking
        this.parking_id = parking_id;  // Initialisation de l'identifiant du parking auquel cette place appartient
    }
}

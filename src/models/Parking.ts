// src/models/Parking.ts

// Importation des types et fonctions nécessaires
import { GPS } from '../types/gps';  // Type pour gérer les coordonnées GPS d'un emplacement
import { generateRandomNumberId } from '../utils/generateRandomNumberId';  // Fonction pour générer des identifiants uniques pour chaque parking
import Spot from './Spot';  // Importation du modèle Spot pour créer des places de parking associées au parking

/**
 * Représente un parking dans une ville avec des informations détaillées sur son emplacement,
 * sa capacité et ses tarifs.
 */
export class Parking {
  // Déclaration des propriétés de la classe Parking
  id: number;  // Identifiant unique du parking
  name: string;  // Nom du parking
  city_id: number;  // Identifiant de la ville où se trouve le parking
  location: GPS;  // Emplacement GPS du parking (type GPS défini dans 'types/gps.ts')
  numberOfSpots: number;  // Nombre total de places dans ce parking
  opened: boolean;  // Statut d'ouverture du parking (true = ouvert, false = fermé)
  hourlyRate: number;  // Tarif horaire du parking en unité monétaire
  parkIds: number[];  // Liste des identifiants des places de parking associées à ce parking
  spots: Spot[];  // Liste des objets Spot (places de parking) associés à ce parking

  /**
   * Constructeur de la classe Parking. Initialise un parking avec les informations suivantes :
   * 
   * @param name - Nom du parking
   * @param city_id - Identifiant de la ville dans laquelle se trouve le parking
   * @param location - Coordonnées GPS du parking
   * @param numberOfSpots - Nombre de places de parking disponibles
   * @param opened - Indique si le parking est ouvert ou non
   * @param hourlyRate - Le tarif horaire du parking
   */
  constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
    // Initialisation des propriétés du parking
    this.id = generateRandomNumberId();  // Appel à la fonction pour générer un identifiant unique pour le parking
    this.name = name;  // Initialisation du nom du parking
    this.city_id = city_id;  // Initialisation de l'identifiant de la ville
    this.location = location;  // Initialisation des coordonnées GPS du parking
    this.numberOfSpots = numberOfSpots;  // Initialisation du nombre de places
    this.opened = opened;  // Initialisation de l'état ouvert/fermé du parking
    this.hourlyRate = hourlyRate;  // Initialisation du tarif horaire du parking
    this.parkIds = [];  // Liste vide pour les identifiants des places
    this.spots = [];  // Liste vide pour les objets Spot représentant les places

    // Création des places de parking associées à ce parking
    for (let i = 0; i < numberOfSpots; i++) {
      const spot = new Spot(this.id);  // Création d'une nouvelle place de parking avec l'identifiant du parking
      this.spots.push(spot);  // Ajout de la place dans le tableau des places
      this.parkIds.push(spot.id);  // Ajout de l'identifiant de la place dans le tableau des identifiants des places
    }
  }
}

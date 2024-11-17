// src/models/Park.ts

// Importation de la fonction uuidv4 pour générer des identifiants uniques
import { v4 as uuidv4 } from 'uuid';

/**
 * Représente un stationnement dans un parking, y compris les informations relatives à
 * la place de parking utilisée, la durée du stationnement, le tarif et le statut de paiement.
 */
export default class Park {
  // Déclaration des propriétés de la classe Park
  id: string;  // Identifiant unique du stationnement (généré via uuidv4)
  spot_id: number;  // Identifiant de la place de parking utilisée pour ce stationnement
  startedAt: Date;  // Date de début du stationnement
  endedAt: Date | null;  // Date de fin du stationnement (null si le stationnement est en cours)
  price: number;  // Tarif total du stationnement (en unité monétaire)
  paid: boolean;  // Statut de paiement du stationnement (true si payé, false sinon)

  /**
   * Constructeur de la classe Park. Initialise un stationnement avec les informations suivantes :
   * 
   * @param spot_id - L'identifiant de la place de parking utilisée pour le stationnement
   * @param startedAt - La date de début du stationnement
   * @param price - Le tarif total du stationnement
   */
  constructor(spot_id: number, startedAt: Date, price: number) {
    // Initialisation des propriétés du stationnement
    this.id = uuidv4();  // Génération d'un identifiant unique pour le stationnement
    this.spot_id = spot_id;  // Initialisation de l'identifiant de la place de parking
    this.startedAt = startedAt;  // Initialisation de la date de début du stationnement
    this.endedAt = null;  // Initialisation de la date de fin à null (le stationnement est en cours au début)
    this.price = price;  // Initialisation du tarif total
    this.paid = false;  // Initialisation du statut de paiement à false (pas payé au départ)
  }
}

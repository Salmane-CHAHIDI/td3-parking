// ./src/models/Parking.ts
import { v4 as uuidv4 } from 'uuid'; // UUID generator
import { GPS } from '../types/gps';
import { Spot } from './Spot';

export class Parking {
    id: string;
    name: string;
    city_id: number;
    location: GPS;
    numberOfSpots: number;
    opened: boolean;
    hourlyRate: number;
    parkIds: Array<number>; // Liste des ids de chaque place de stationnement
    spots: Array<Spot> = new Array;

    constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
        this.id = uuidv4(); // Génère un UUID pour l'identifiant du parking
        this.name = name;
        this.city_id = city_id;
        this.location = location;
        this.numberOfSpots = numberOfSpots;
        this.opened = opened;
        this.hourlyRate = hourlyRate;
        this.parkIds = Array();

        // Générer les places de stationnement (Spot) et les associer au parking
        for (let i = 0; i < numberOfSpots; i++) {
            const spot = new Spot(i + 1, this.id);
            this.spots.push(spot);
            this.parkIds.push(spot.id);
        }
    }
}

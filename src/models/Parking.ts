// src/models/Parking.ts
import { GPS } from '../types/gps';
import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import Spot from './Spot';

export class Parking {
  id: number;
  name: string;
  city_id: number;
  location: GPS;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];
  spots: Spot[];

  constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.city_id = city_id;
    this.location = location;
    this.numberOfSpots = numberOfSpots;
    this.opened = opened;
    this.hourlyRate = hourlyRate;
    this.parkIds = [];
    this.spots = [];

    for (let i = 0; i < numberOfSpots; i++) {
      const spot = new Spot(this.id);
      this.spots.push(spot);
      this.parkIds.push(spot.id);
    }
  }
}

// src/data/staticDatabase.ts
import {City} from '../models/City';
import {Parking} from '../models/Parking';
import { GPS } from '../types/gps';


const cities: City[] = [
  new City('Aix-en-Provence', 'France', { latitude: 43.533329, longitude: 5.43333 }),
  new City('La Spezia', 'Italie', { latitude: 44.238366, longitude: 9.6912326 }),
  new City('Aix-la-Chapelle', 'Allemagne', { latitude: 50.776351, longitude: 6.083862 }),
  new City('San Cristóbal de La Laguna', 'Espagne', { latitude: 28.487180709838867, longitude: -16.313879013061523 }),
  new City('Newcastle upon Tyne', 'Angleterre', { latitude: 54.9738474, longitude: -1.6131572 }),
];

const parkings: Parking[] = [
  new Parking('Parking A', cities[0].id, { latitude: 43.533329, longitude: 5.43333 }, 100, true, 4.5),
  new Parking('Parking B', cities[1].id, { latitude: 44.238366, longitude: 9.6912326 }, 50, true, 3),
  new Parking('Parking C', cities[1].id, { latitude: 44.238366, longitude: 9.6912326 }, 80, true, 2.5),
  new Parking('Parking D', cities[2].id, { latitude: 50.776351, longitude: 6.083862 }, 40, true, 2.8),
  new Parking('Parking E', cities[3].id, { latitude: 28.487180709838867, longitude: -16.313879013061523 }, 70, true, 3.1),
  new Parking('Parking F', cities[4].id, { latitude: 54.9738474, longitude: -1.6131572 }, 60, true, 2.4),
  new Parking('Parking G', cities[4].id, { latitude: 54.9738474, longitude: -1.6131572 }, 90, true, 3.2),
];

export { cities, parkings };

// ./src/data/staticDatabase.ts

import { City } from '../models/City';
import { Parking } from '../models/Parking';
import { GPS } from '../types/gps';

// Coordonnées GPS des villes
const aixEnProvenceGPS: GPS = { latitude: 43.533329, longitude: 5.43333 };
const laSpeziaGPS: GPS = { latitude: 44.238366, longitude: 9.6912326 };
const aixLaChapelleGPS: GPS = { latitude: 50.776351, longitude: 6.083862 };
const sanCristobalGPS: GPS = { latitude: 28.487180709838867, longitude: -16.313879013061523 };
const newcastleGPS: GPS = { latitude: 54.9738474, longitude: -1.6131572 };

// Création des villes
const aixEnProvence = new City(1, "Aix-en-Provence", "France", aixEnProvenceGPS);
const laSpezia = new City(2, "La Spezia", "Italie", laSpeziaGPS);
const aixLaChapelle = new City(3, "Aix-la-Chapelle", "Allemagne", aixLaChapelleGPS);
const sanCristobal = new City(4, "San Cristóbal de La Laguna", "Espagne", sanCristobalGPS);
const newcastle = new City(5, "Newcastle upon Tyne", "Angleterre", newcastleGPS);

// Création des parkings
const parkingA = new Parking("Parking A", aixEnProvence.id, aixEnProvenceGPS, 100, true, 4.5);
const parkingB = new Parking("Parking B", laSpezia.id, laSpeziaGPS, 50, true, 3);
const parkingC = new Parking("Parking C", laSpezia.id, laSpeziaGPS, 80, true, 2.5);
const parkingD = new Parking("Parking D", aixLaChapelle.id, aixLaChapelleGPS, 40, true, 2.8);
const parkingE = new Parking("Parking E", sanCristobal.id, sanCristobalGPS, 70, true, 3.1);
const parkingF = new Parking("Parking F", newcastle.id, newcastleGPS, 60, true, 2.4);
const parkingG = new Parking("Parking G", newcastle.id, newcastleGPS, 90, true, 3.2);

// Associer les parkings aux villes (via leurs ids)
aixEnProvence.parkingsIds.push(+parkingA.id); // Le + pour convertir une chaine de caractère en entier
laSpezia.parkingsIds.push(+parkingB.id, +parkingC.id);
aixLaChapelle.parkingsIds.push(+parkingD.id);
sanCristobal.parkingsIds.push(+parkingE.id);
newcastle.parkingsIds.push(+parkingF.id, +parkingG.id);

// Créer les arrays typés pour les villes et les parkings
export const cities: Array<City> = [
    aixEnProvence,
    laSpezia,
    aixLaChapelle,
    sanCristobal,
    newcastle
];

export const parkings: Array<Parking> = [
    parkingA,
    parkingB,
    parkingC,
    parkingD,
    parkingE,
    parkingF,
    parkingG
];

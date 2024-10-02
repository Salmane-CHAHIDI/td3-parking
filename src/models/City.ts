import { GPS } from "../types/gps"

import { toSlug } from '../utils/toSlug'; // Assumant que toSlug est dans utils

export class City {
    id: number;
    name: string;
    slug: string;
    parkingsIds: Array<number>; // Liste des ids de parkings
    country: string;
    location: GPS;

    constructor(id: number, name: string, country: string, location: GPS, parkingsIds: number[] = []) {
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.country = country;
        this.location = location;
        this.parkingsIds = parkingsIds;
    }
}




import { v4 as uuidv4 } from 'uuid';

export class Park {
    id: string;
    spot_id: number;
    startedAt: Date;
    endedAt: Date | null;
    price: number;
    paid: boolean;

    constructor(spot_id: number, price: number, startedAt: Date, endedAt: Date | null = null, paid: boolean = false) {
        this.id = uuidv4(); // Génère un UUID pour l'identifiant du stationnement
        this.spot_id = spot_id;
        this.price = price;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.paid = paid;
    }
}

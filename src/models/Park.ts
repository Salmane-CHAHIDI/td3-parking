// src/models/Park.ts
import { v4 as uuidv4 } from 'uuid';

export default class Park {
  id: string;
  spot_id: number;
  startedAt: Date;
  endedAt: Date | null;
  price: number;
  paid: boolean;

  constructor(spot_id: number, startedAt: Date, price: number) {
    this.id = uuidv4();
    this.spot_id = spot_id;
    this.startedAt = startedAt;
    this.endedAt = null;
    this.price = price;
    this.paid = false;
  }
}

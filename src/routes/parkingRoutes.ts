// src/routes/parkingRoutes.ts
import { Hono } from "hono";
import { ReadAllParkingsController } from "../controllers/parking/ReadAllParkingsController";
import { ReadOneParkingController } from "../controllers/parking/ReadOneParkingController";

const parkingRoutes = new Hono();

// Route pour afficher tous les parkings
parkingRoutes.get("/parkings", ReadAllParkingsController);

// Route pour afficher un parking par son id
parkingRoutes.get("/parkings/:id", ReadOneParkingController);

export default parkingRoutes;

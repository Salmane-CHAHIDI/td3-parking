// src/routes/cityRoutes.ts
import { Hono } from "hono";
import { ReadAllCitiesController } from "../controllers/city/ReadAllCitiesController";
import { ReadOneCityController } from "../controllers/city/ReadOneCityController";
const cityRoutes = new Hono();

// Route pour afficher la liste de toutes les villes
cityRoutes.get("/cities", ReadAllCitiesController);

// Route pour afficher une ville par son slug
cityRoutes.get("/cities/:slug", ReadOneCityController);

export default cityRoutes;

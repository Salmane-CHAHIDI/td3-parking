import { Hono } from 'hono'
import cityRoutes from "../src/routes/cityRoutes";
import parkingRoutes from "../src/routes/parkingRoutes";
import { trimTrailingSlash } from 'hono/trailing-slash'
import { HTTPException } from 'hono/http-exception'
import HomeController from './controllers/HomeController';
import {serveStatic} from "hono/bun";
//import { insertCity, insertParking, insertSpot, insertPark } from './data/setupDatabase';

// Insertion d'une ville
//insertCity("Paris", "paris", "48.8566,2.3522", "France");

// Supposons que vous connaissiez l'ID de la ville insérée (ici, on suppose qu'il est 1)
//const cityId = 1; 
//insertParking('Parking A', '48.8566,2.3522', 100, 4.5, cityId);

// Ajout d'un spot pour ce parking (ID du parking = 1)
//insertSpot(1);

// Ajout d'un parc pour un spot spécifique (ID du spot = 1)
//insertPark('park-001', '2024-11-12T08:00:00', 'AB123CD', 1);
const app = new Hono({ strict: true });
app.use(trimTrailingSlash());
app.use('/static/*',serveStatic({root: './'}))
app.get('/',...HomeController)
app.route("/", cityRoutes); // Ajouter les routes des villes
app.route("/", parkingRoutes); // Ajouter les routes des parkings

// Gestion des exceptions
app.onError((error, c) => {
    if (error instanceof HTTPException) {
      return c.text(error.message, error.status); // Retourner le message d'erreur et le code d'état
    }
    return c.text("Internal Server Error", 500); // Gérer les autres erreurs
  });
  
export default app

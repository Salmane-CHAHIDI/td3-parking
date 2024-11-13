// src/views/city/ReadOneCityView.tsx
import { City } from "../../models/City";
import { Parking } from "../../models/Parking";
import { Layout } from "../shared/Layout";
import { html } from "hono/html";

// Définition des props pour le composant
type ReadOneCityViewProps = {
  city: City; // Ville à afficher
  parkings: Parking[]; // Liste des parkings associés à la ville
};

// Composant fonctionnel pour afficher les informations d'une ville et ses parkings
export const ReadOneCityView = ({ city, parkings }: ReadOneCityViewProps) => {
  return (
    <Layout pageTitle={`Informations sur ${city.name}`}>
      <div>
        <h2>Informations sur {city.name}</h2>
        <p>Pays : {city.country}</p>
        <p>Coordonnées GPS : {city.location.latitude}, {city.location.longitude}</p>
        
        <h3>Parkings disponibles :</h3>
        <ul>
          {parkings.map((parking) => (
            <li key={parking.id}>
              {parking.name} - {parking.numberOfSpots} places - Tarif horaire : {parking.hourlyRate}€
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

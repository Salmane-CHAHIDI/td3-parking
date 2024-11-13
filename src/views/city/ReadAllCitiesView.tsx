// src/views/city/ReadAllCitiesView.tsx
import { Layout } from "../shared/Layout"; // Import du composant Layout
import { City } from "../../models/City"; // Import du modèle City
import { html } from "hono/html"; // Import pour utiliser Hono JSX

// Définition des props pour le composant
type ReadAllCitiesViewProps = {
  cities: City[]; // Liste des villes passée en props
};

// Composant fonctionnel pour afficher la liste des villes
export const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => {
  // Composant pour afficher chaque ville
  const CityLink = ({ city }: { city: City }) => (
    <li>
      <a href={`/cities/${city.slug}`}>{city.name}</a> {/* Lien vers la page de la ville */}
    </li>
  );

  // Liste des villes
  return (
    <Layout pageTitle="Liste des Villes">
      <h1>Liste des Villes</h1>
      <ul>
        {cities.map((city) => (
          <CityLink city={city} /> // Utilisation de CityLink pour chaque ville
        ))}
      </ul>
    </Layout>
  );
};

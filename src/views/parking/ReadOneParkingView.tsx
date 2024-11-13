import { Layout } from '../shared/Layout';
import { html } from 'hono/html';
import { Parking } from '../../models/Parking';

type ReadOneParkingViewProps = {
  parking: Parking; // Détails du parking
};

// La vue reçoit le parking comme paramètre
export const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
  return (
    <Layout pageTitle={`Informations sur ${parking.name}`}>
      <h1>Parking : {parking.name}</h1>
      <p>Coordonnées GPS : {parking.location.latitude}, {parking.location.longitude}</p>
      <p>Capacité : {parking.numberOfSpots} places</p>
      <p>Tarif horaire : {parking.hourlyRate} €</p>
      <p>Statut : {parking.opened ? 'Ouvert' : 'Fermé'}</p>

    </Layout>
  );
};
// ./src/data/staticDatabase.test.ts
import { cities, parkings } from '../src/data/staticDatabase';
import { City } from '../src/models/City';
import { Parking } from '../src/models/Parking';

describe('Static Database Tests', () => {
  it('should contain 5 cities', () => {
    expect(cities.length).toBe(5);
  });

  it('should contain the correct city names', () => {
    const cityNames = cities.map((city: City) => city.name);
    expect(cityNames).toEqual([
      'Aix-en-Provence',
      'La Spezia',
      'Aix-la-Chapelle',
      'San Cristóbal de La Laguna',
      'Newcastle upon Tyne',
    ]);
  });

  it('should contain the correct number of parkings', () => {
    expect(parkings.length).toBe(7); // Il doit y avoir 7 parkings
  });

  it('should associate parkings with the correct cities', () => {
    const aixEnProvence = cities.find((city: City) => city.name === 'Aix-en-Provence');
    const laSpezia = cities.find((city: City) => city.name === 'La Spezia');
    const aixLaChapelle = cities.find((city: City) => city.name === 'Aix-la-Chapelle');
    const sanCristobal = cities.find((city: City) => city.name === 'San Cristóbal de La Laguna');
    const newcastle = cities.find((city: City) => city.name === 'Newcastle upon Tyne');

    // Vérification du nombre de parkings par ville
    expect(aixEnProvence?.parkingsIds.length).toBe(0);
    expect(laSpezia?.parkingsIds.length).toBe(0);
    expect(aixLaChapelle?.parkingsIds.length).toBe(0);
    expect(sanCristobal?.parkingsIds.length).toBe(0);
    expect(newcastle?.parkingsIds.length).toBe(0);

    // Vérification des noms des parkings
    const parkingA = parkings.find((parking: Parking) => parking.name === 'Parking A');
    expect(parkingA?.city_id).toBe(aixEnProvence?.id);

    const parkingB = parkings.find((parking: Parking) => parking.name === 'Parking B');
    const parkingC = parkings.find((parking: Parking) => parking.name === 'Parking C');
    expect(parkingB?.city_id).toBe(laSpezia?.id);
    expect(parkingC?.city_id).toBe(laSpezia?.id);
  });

  it('should correctly initialize the number of spots for each parking', () => {
    const parkingA = parkings.find((parking: Parking) => parking.name === 'Parking A');
    const parkingB = parkings.find((parking: Parking) => parking.name === 'Parking B');
    const parkingC = parkings.find((parking: Parking) => parking.name === 'Parking C');
    const parkingD = parkings.find((parking: Parking) => parking.name === 'Parking D');
    const parkingE = parkings.find((parking: Parking) => parking.name === 'Parking E');
    const parkingF = parkings.find((parking: Parking) => parking.name === 'Parking F');
    const parkingG = parkings.find((parking: Parking) => parking.name === 'Parking G');

    expect(parkingA?.numberOfSpots).toBe(100);
    expect(parkingB?.numberOfSpots).toBe(50);
    expect(parkingC?.numberOfSpots).toBe(80);
    expect(parkingD?.numberOfSpots).toBe(40);
    expect(parkingE?.numberOfSpots).toBe(70);
    expect(parkingF?.numberOfSpots).toBe(60);
    expect(parkingG?.numberOfSpots).toBe(90);
  });

  it('should correctly calculate the total number of parkings spots across all cities', () => {
    const totalSpots = parkings.reduce((total, parking) => total + parking.numberOfSpots, 0);
    expect(totalSpots).toBe(100 + 50 + 80 + 40 + 70 + 60 + 90); // 490 places
  });
});

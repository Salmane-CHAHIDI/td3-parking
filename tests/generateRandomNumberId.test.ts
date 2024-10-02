import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";

describe('Tests pour les fonctions de generateRandomNumberId', () => {

    test('generateRandomNumberId devrait retourner un nombre entre 100000 et 999999', () => {
        const id = generateRandomNumberId();
        expect(id).toBeGreaterThanOrEqual(100000); // Vérifie que l'id est supérieur ou égal à 100000
        expect(id).toBeLessThanOrEqual(999999); // Vérifie que l'id est inférieur ou égal à 999999
    });
});
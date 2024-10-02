
import { toSlug } from "../src/utils/toSlug";

describe('Tests pour les fonctions de toSlug', () => {

    // Test pour helloWorld
    test('toSlug devrait retourner "helle-world"', () => {
        expect(toSlug("Hellé, World!")).toBe("helle-world");
    });

});
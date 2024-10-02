import { generateRandomNumberId } from "./generateRandomNumberId";

// Fonction pour générer un slug
export function toSlug(input: string): string {
    // Convertir la chaîne en minuscules
    let slug = input.toLowerCase();

    // Supprimer les accents en utilisant normalize et replace
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Remplacer tous les caractères non alphanumériques (hors tirets et espaces) par des espaces
    slug = slug.replace(/[^a-z0-9\s-]/g, '');

    // Remplacer les espaces par des tirets
    slug = slug.replace(/\s+/g, '-');

    // Supprimer les tirets en trop (par ex. au début ou à la fin de la chaîne)
    slug = slug.replace(/^-+|-+$/g, '');

    // Retourner le slug généré
    return slug;
}

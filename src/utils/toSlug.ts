// src/utils/toSlug.ts
export function toSlug(str: string): string {
    return str
    .toLowerCase()
    .normalize('NFD') // Supprime les accents
    .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques
    .replace(/[^a-z0-9 -]/g, '') // Supprime les caractères spéciaux, mais garde les espaces et les tirets
    .trim()
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-'); // Remplace plusieurs tirets par un seul tiret
  }
  

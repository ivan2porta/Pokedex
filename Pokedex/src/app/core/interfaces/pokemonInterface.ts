export interface PokemonDetallado {
  id: number;
  name: string;
  height: number; // Altura (viene en decímetros, ej: 7 = 0.7m)
  weight: number; // Peso (viene en hectogramos, ej: 69 = 6.9kg)
  
  // 1. Sprites (Normal y Arte Oficial)
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };

  // 2. Tipos (Array de objetos)
  types: Array<{
    slot: number;
    type: { name: string; url: string; };
  }>;

  // 3. Habilidades
  abilities: Array<{
    is_hidden: boolean;
    slot: number;
    ability: { name: string; url: string; };
  }>;

  // 4. Stats de puntos base (Hp, Attack, Defense, etc.)
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string; };
  }>;

  // 5. Campos personalizados que agregaremos nosotros a mano (ver sección abajo)
  genderRateText?: string; // Para mostrar si es Macho, Hembra o Sin Género
  description?: string;    // Para la descripción en español
}
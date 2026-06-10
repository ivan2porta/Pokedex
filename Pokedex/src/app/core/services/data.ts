import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { PokemonDetallado } from '../interfaces/pokemonInterface';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = inject(HttpClient);
  private apiUrlPoke = "https://pokeapi.co/api/v2/pokemon/";
  private apiUrlPokeSp = "https://pokeapi.co/api/v2/pokemon-species//";


  getPokemon(id: number): Observable<PokemonDetallado> {
    const pokemonBase$ = this.http.get<any[]>(`${this.apiUrlPoke}${id}`);
    const pokemonEspecie$ = this.http.get<any[]>(`${this.apiUrlPokeSp}${id}`);

    // 3. Unimos ambas peticiones de forma simultánea
    return forkJoin([pokemonBase$, pokemonEspecie$]).pipe(
      map(([base, especie]: [any, any]) => {

        // Buscamos la descripción que esté en español ('es')
        const descripcion = especie.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'en'
        )?.flavor_text || 'Sin descripción disponible.';

        // Traducimos el ratio de género a texto legible
        let genero = 'Macho / Hembra';
        if (especie.gender_rate === -1) genero = 'Sin género (Género desconocido)';
        else if (especie.gender_rate === 0) genero = '100% Macho';
        else if (especie.gender_rate === 8) genero = '100% Hembra';

        // Retornamos un único objeto combinando todo
        return {
          ...base,
          description: descripcion.replace(/\n|\f/g, ' '), // Limpiamos saltos de línea raros de la API
          genderRateText: genero
        } as PokemonDetallado;
      }
      ))
  }
}

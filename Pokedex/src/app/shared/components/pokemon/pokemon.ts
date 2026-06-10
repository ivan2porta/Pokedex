import { Component, inject, OnInit, signal } from '@angular/core';
import { Data } from '../../../core/services/data';
import { PokemonDetallado } from '../../../core/interfaces/pokemonInterface';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit{
  private data = inject(Data); 

  posts = signal<PokemonDetallado | null>(null);
  isLoading = signal<boolean>(true);
  ngOnInit(): void {
    // 3. Llamamos a la API cuando el componente se inicializa
    this.data.getPokemon(1).subscribe({
      next: (data) => {
        this.posts.set(data);       // Guardamos los datos en el Signal
        this.isLoading.set(false);  // Desactivamos el estado de carga
      },
      error: (err) => {
        console.error('Error al traer los datos:', err);
        this.isLoading.set(false);
      }
    });
  }
}

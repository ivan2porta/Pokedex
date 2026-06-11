import { Component, inject, OnInit, signal } from '@angular/core';
import { Data } from '../../../core/services/data';
import { PokemonDetallado } from '../../../core/interfaces/pokemonInterface';

@Component({
  selector: 'app-poke-datos',
  imports: [],
  templateUrl: './poke-datos.html',
  styleUrl: './poke-datos.css',
})
export class PokeDatos implements OnInit{
  private data = inject(Data);

  posts = signal<PokemonDetallado | null>(null);
  isLoading = signal<boolean>(true);
  ngOnInit(): void {
    
    this.data.getPokemon(1025).subscribe({
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

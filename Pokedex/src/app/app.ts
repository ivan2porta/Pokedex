import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from "./shared/components/pokemon/pokemon";
import { PokeDatos } from './shared/components/poke-datos/poke-datos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon, PokeDatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pokedex');
}

import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model'
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() selectedPokemon: any;
  pokemon: Pokemon;
  captureStatus = 'preCapture';


  constructor(private pokemonService: PokemonService,) {
    this.pokemon = {} as Pokemon;
  }

  catchPokemon() {
    this.pokemonService.catchPokemon(this.selectedPokemon)
      .then(() => {
        this.captureStatus = 'postCapture';
        setTimeout(() => {
          this.selectedPokemon = null;
          this.captureStatus = 'preCapture';
        }, 2000);
      })
      .catch(error => {
        console.error(error)
      });
  }

  closeModal() {
    this.selectedPokemon = null;
    this.captureStatus = 'preCapture';

  }
}

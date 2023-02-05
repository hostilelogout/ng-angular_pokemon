import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model'
import { PokemonService } from '../pokemon.service'

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
    this.captureStatus = 'postCapture';
    console.log(this.captureStatus);
  
  }

  closeModal() {
    this.selectedPokemon = null;
    this.captureStatus = 'preCapture';

  }
}

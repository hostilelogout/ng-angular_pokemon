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


  //here we run the catchPokemon from the pokemonService where we pass the pokemon along from this.pokemon
  catchPokemon() {
    this.pokemonService.catchPokemon(this.selectedPokemon)
      .then(() => {
        //then we change the state to postCapture to manipulate the switch on the modal
        this.captureStatus = 'postCapture';
        //and then we set a timeout so the modal closes after 2 seconds, and return the state of the pokemon, and the captured status.
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

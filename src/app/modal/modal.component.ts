import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() selectedPokemon: any;
  pokemon: Pokemon;

  constructor(private userService: UserService,) {
    this.pokemon = {} as Pokemon;
  }

  catchPokemon() {
    this.userService.catchPokemon(this.selectedPokemon);
  }

  closeModal() {
    this.selectedPokemon = null;
  }
}

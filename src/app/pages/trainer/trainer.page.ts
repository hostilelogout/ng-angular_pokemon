import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})

export class TrainerPage {

  //Allows us to read the current user (trainer) in session
  get trainer(): User | undefined {
    return this.userService.User;
  }

  //Extracting the caught Pokemon of the current user
  get caughtPokemon(): Pokemon[] {
    if (this.userService.User) {
      console.log(this.userService.User.pokemon)
      return this.userService.User.pokemon
    }
    return [];
  }

  constructor(
    private userService: UserService,
    private pokemonService: PokemonService
  ) { }

  //Logic behind releasing Pokemon should be done in Pokemon Service
  public releasePokemon = (pokemon: any) => {
    this.pokemonService.releasePokemon(pokemon)
  };

  ngOnInit(): void {
  }
}
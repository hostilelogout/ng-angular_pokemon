import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { TestPokemon } from 'src/app/test-models/test-pokemon.model';
import { TestPokemonService } from 'src/app/test-services/test-pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get trainer(): User | undefined {
    return this.userService.User;
  }

  get caughtPokemon(): Pokemon[] {
    if (this.userService.User) {
      return this.userService.User.caught;
    }

    return [];
  }

  //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
  get pokemon(): TestPokemon[] {
    return this.testPokemonService.pokemon;
  }

  //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
  get error(): string {
    return this.testPokemonService.error;
  }

  //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
  get loading(): boolean {
    return this.testPokemonService.loading;
  }

  constructor(
    private userService: UserService,

    //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
    private readonly testPokemonService: TestPokemonService
  ) { }

  ngOnInit(): void {
    //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
    this.testPokemonService.findPokemon();
  }
}
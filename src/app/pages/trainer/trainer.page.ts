import { Component, OnInit } from '@angular/core';
import { TestTrainer } from 'src/app/test-models/test-trainer.model';
import { TestTrainerService } from 'src/app/test-services/test-trainer.service';
import { TestPokemon } from 'src/app/test-models/test-pokemon.model';
import { TestPokemonService } from 'src/app/test-services/test-pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get trainer(): TestTrainer | undefined {
    return this.testTrainerService.testTrainer;
  }

  get caughtPokemon(): TestPokemon[] {
    if (this.testTrainerService.testTrainer) {
      return this.testTrainerService.testTrainer.caughtPokemon;
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
    private testTrainerService: TestTrainerService,

    //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
    private readonly testPokemonService: TestPokemonService
  ) { }

  ngOnInit(): void {
    //ONLY FOR TESTING, THIS LOGIC SHOULD HAPPEN IN PKMN CATALOGUE!!!
    this.testPokemonService.findPokemon();
  }
}
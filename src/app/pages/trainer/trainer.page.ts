import { Component, OnInit } from '@angular/core';
import { TestTrainer } from 'src/app/test-models/test-trainer.model';
import { TestTrainerService } from 'src/app/test-services/test-trainer.service';
import { TestPokemon } from 'src/app/test-models/test-pokemon.model';

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

  constructor(
    private testTrainerService: TestTrainerService
  ) { }

  ngOnInit(): void {

  }
}
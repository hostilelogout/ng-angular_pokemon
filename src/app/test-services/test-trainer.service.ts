import { Injectable } from '@angular/core';
import { TestTrainer } from '../test-models/test-trainer.model';
import { TestPokemon } from '../test-models/test-pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TestTrainerService {

  private _testTrainer?: TestTrainer;

  get testTrainer(): TestTrainer | undefined {
    return this._testTrainer;
  }

  constructor() { 
    
  }
}
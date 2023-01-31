import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  /*get trainer(): Trainer {
    return this.trainerService.user/trainer;
  }
  */

  /*get caughtPokemon(): Pokemon[] {
    if (this.trainerService.user/trainer) {
      return this.trainerService.user/trainer.caughtPokemon;
    }

    return [];
  }*/

  constructor(
    //private trainerService: TrainerService
  ) { }

  ngOnInit(): void {

  }
}
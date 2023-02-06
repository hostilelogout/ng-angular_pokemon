import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/app/models/pokemon.model';

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

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {

  }
}
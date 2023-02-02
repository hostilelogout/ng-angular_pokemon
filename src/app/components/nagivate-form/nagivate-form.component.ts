import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nagivate-form',
  templateUrl: './nagivate-form.component.html',
  styleUrls: ['./nagivate-form.component.css']
})
export class NagivateFormComponent {

  paths = [
    {name: "trainer", path: "trainer"},
    {name: "catalogue", path: "pokemon-catalogue"}
  ];
  constructor(
    public readonly userService: UserService,
    private readonly router: Router,
  ) { }

}

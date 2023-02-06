import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogoutService } from 'src/app/services/logout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})
// defines how logout should be handled and applied when clicking a logout button
export class LogoutFormComponent {

  constructor(
    private readonly logoutService : LogoutService,
    public readonly userService : UserService
  ) {}

  logoutSubmit(logoutForm : NgForm) : void{
    this.userService.User = undefined;
    this.logoutService.logout()
  }
}

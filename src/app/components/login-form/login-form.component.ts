import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() login: EventEmitter<void> = new EventEmitter()

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) { }

  loginSubmit(createForm: NgForm): void {

    const { username } = createForm.value;
    this.loginService.login(username)
      .subscribe({
        next: (user: User) => {
          this.userService.User = user
          this.login.emit()
        },
        error: () => {

        }
      })
  }


}

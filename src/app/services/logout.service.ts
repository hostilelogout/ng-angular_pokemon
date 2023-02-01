import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private readonly router: Router,
    ) { }

  public logout() : void {
    this.router.navigateByUrl("")
 }
}

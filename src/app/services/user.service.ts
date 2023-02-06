import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LocalStorage } from '../utils/localstorage.util';

@Injectable({
  providedIn: 'root'
})
// contains methods to both Get and set a user as well as saving it to local storage.
export class UserService {

  private user?: User

  public get User(): User | undefined {
    return this.user
  }

  set User(user:User | undefined) {
    if (user === undefined) {LocalStorage.DeleteLocal(); this.user = user}
    else {LocalStorage.SaveToLocal(user?.username!,user!); this.user = user}
  }

  constructor() {
    this.user = LocalStorage.ReadFromLocal()
   }
}

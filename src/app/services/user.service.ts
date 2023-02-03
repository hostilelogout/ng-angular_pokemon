import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { LocalStorage } from '../utils/localstorage.util';
import { environment } from 'src/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

const { ANGULAR_APP_API_URL, REACT_APP_API_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user?: User

  public get User(): User | undefined {
    return this.user
  }

  set User(user:User | undefined) {
    if (user === undefined) {LocalStorage.DeleteLocal(); this.user = user}
    else {LocalStorage.SaveToLocal(user?.username!,user!); this.user = user}
  }

  constructor(private http: HttpClient) {
    this.user = LocalStorage.ReadFromLocal()
   }

  public catchPokemon = (pokemon:any) => {
    const headers = new HttpHeaders ({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY
    });


    let user = LocalStorage.ReadFromLocal();

    LocalStorage.SaveToLocal(user?.caught, pokemon);
    console.log("user: ",user)
 
    /*
    this.http.patch(ANGULAR_APP_API_URL+`/${user.id}`, {Pokemon: [pokemon]}, {
      headers
    }).subscribe(() => {
      console.log("  // handle the successful response");
    });
    */
  }
}

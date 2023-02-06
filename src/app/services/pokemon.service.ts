import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments';
import { User } from '../../app/models/user.model';
import { LocalStorage } from '../utils/localstorage.util';


const { ANGULAR_APP_API_URL, REACT_APP_API_KEY } = environment;


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private user?: User

  public get User(): User | undefined {
    return this.user
  }


//get the trainer
  public getTrainer = async (id: number) => {
    const response = await fetch(`${ANGULAR_APP_API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'X-API-Key': REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Could not retreive the trainer');
    }
    
    const result = await response.json();
    return result;
  };
  
// here we catch poke, by sending along the pokemon object, then we patch it to the user that is logged in through their id.
// we get the user from LocalStorage, as they are logged in.
  public catchPokemon = async (pokemon: any) => {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY
    });
  
    //gets user from localstorage
    const user = LocalStorage.ReadFromLocal();

    //the users current pokemons, and the new one.
    user.pokemon = [...user.pokemon, pokemon];
      
    this.http.patch(ANGULAR_APP_API_URL + `/${user.id}`, {
      pokemon: user.pokemon
    }, {
      headers
    }).subscribe(() => {
      //once the api is complete, we save the new pokemon to the localstorage aswell.
      LocalStorage.SaveToLocal(user?.username!,user!);
      console.log("Pokemon Captured");
    });
  };

  public releasePokemon = async (pokemon: any) => {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY
    });

    const user = LocalStorage.ReadFromLocal();

    for (let i = 0; i < user.pokemon.length; i++)
    {
      if (user.pokemon[i] === pokemon[i]) {

        user.pokemon.splice(i, 1);
        console.log("Hello")

      }
    }

    this.http.patch(ANGULAR_APP_API_URL + `/${user.id}`, {
      pokemon: user.pokemon
    }, {
      headers
    }).subscribe(() => {
      LocalStorage.SaveToLocal(user?.username!,user!);
      console.log("Pokemon Released");
    });
  }

}



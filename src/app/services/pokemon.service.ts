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

  public getPokemons = async (id: number) => {
    const response = await fetch(`${ANGULAR_APP_API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'X-API-Key': REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Could not update trainer');
    }
    
    const result = await response.json();
    return result;
  };
  

  public catchPokemon = async (pokemon: any) => {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": REACT_APP_API_KEY
    });
  
    const user = LocalStorage.ReadFromLocal();

    console.log("getCurrentUserLocalStorage: ", user);


    user.pokemon = [...user.pokemon, pokemon];
    
    console.log(user.pokemon)
  
    this.http.patch(ANGULAR_APP_API_URL + `/${user.id}`, {
      pokemon: user.pokemon
    }, {
      headers
    }).subscribe(() => {
      LocalStorage.SaveToLocal(user?.username!,user!);
      console.log("Pokemon Captured");
    });
  };

}



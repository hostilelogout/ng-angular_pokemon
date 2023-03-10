import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiRequestService {

  constructor(private _http:HttpClient) { }

  
  // here we get the data on all the pokemons off the api.
  getdata(){
    const apiURL = environment.POKEMON_API_URL;


    return this._http.get(apiURL+`pokemon?limit=10000`);
  
  
  }
}

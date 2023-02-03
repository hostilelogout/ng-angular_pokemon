import { Component, OnChanges } from '@angular/core';
import { PokemonApiRequestService } from '../../pokemon-api-request.service';


@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage {
  newdata: any;
  spriteBaseUrl: any;
  spriteType: any;
  pokeArr: any = [];
  displayArr: any = [];
  offset: number = 0;
  placeholder: string = 'https://via.placeholder.com/96';
  showModal = false;
  selectedPokemon: any;

  constructor(private _apiservice: PokemonApiRequestService) { }

  handleMissingImage = (event: any) => {
    (event.target as HTMLImageElement).src = this.placeholder;
  };

  offsetChange = (type: string, ammount: number) => {
    if (type === 'increase') {
      this.offset += ammount;
    } else {
      this.offset -= ammount;
    }
    this.displayArr = this.pokeArr.slice(this.offset, this.offset + 20);
  };


  openModal(pokemon:any) {

    this.selectedPokemon = pokemon;
    this.showModal = true;
    console.log(pokemon);
  }


  ngOnInit() {
    const sessionData = sessionStorage.getItem("pokeArr");

    if (sessionData) {
      this.pokeArr = JSON.parse(sessionData);
      this.displayArr = this.pokeArr.slice(this.offset, this.offset + 20);
    } else {
      this._apiservice.getdata().subscribe(res => {
        this.newdata = res;
        this.spriteBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        this.spriteType = ".png";

        Object.keys(this.newdata.results).forEach(key => {
          const id = Number(key) + 1;
          if (((this.newdata.results[key].url).replace('https://pokeapi.co/api/v2/pokemon/', '')).replace('/', '') > 10000) {
            console.log(((this.newdata.results[key].url).replace('https://pokeapi.co/api/v2/pokemon/', '')).replace('/', ''));
          } else {
            this.pokeArr.push({ id: (id), name: this.newdata.results[key].name, spriteUrl: (this.spriteBaseUrl + (id) + this.spriteType) })
          }
        })
        console.log("pokeArr: ", this.pokeArr);
        sessionStorage.setItem("pokeArr", JSON.stringify(this.pokeArr));
        this.displayArr = this.pokeArr.slice(this.offset, this.offset + 20);
      })
    }

    
  }




}

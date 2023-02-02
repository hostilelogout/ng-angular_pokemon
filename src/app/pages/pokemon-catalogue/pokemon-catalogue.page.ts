import { Component, OnChanges } from '@angular/core';
import { PokemonApiRequestService } from '../../pokemon-api-request.service';


@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage {
  newdata:any;
  spriteBaseUrl:any;
  spriteType:any;
  pokeArr: any = [];
  displayArr: any = [];
  offset:number = 0;
  placeholder: string = 'https://via.placeholder.com/96';

  constructor(private _apiservice:PokemonApiRequestService){}

  handleMissingImage = (event:any) => {
    (event.target as HTMLImageElement).src = this.placeholder;
  };

  offsetChange = (type:string, ammount:number) => {
    if(type === 'increase'){
      this.offset += ammount;
    } else {
      this.offset -= ammount;
    }
    this.displayArr = this.pokeArr.slice(this.offset, this.offset+20);
  };
  
 
  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.newdata = res;
      this.spriteBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
      this.spriteType = ".png";
      
      Object.keys(this.newdata.results).forEach(key => {
        const id = Number(key)+1;
        //checks if the id is above 10000 as everything above 10k, is irrelevant for this catalogue
        if(((this.newdata.results[key].url).replace('https://pokeapi.co/api/v2/pokemon/','')).replace('/','') > 10000){
          //log the excess id's
          console.log(((this.newdata.results[key].url).replace('https://pokeapi.co/api/v2/pokemon/','')).replace('/',''));
        } else {
          //push relevant data to pokeArr
          this.pokeArr.push({id: (id), name: this.newdata.results[key].name, spriteUrl: (this.spriteBaseUrl+(id)+this.spriteType)})
        }
        
      })
      console.log("pokeArr: ",this.pokeArr);

      this.displayArr = this.pokeArr.slice(this.offset, this.offset+20);
    })
  }

}

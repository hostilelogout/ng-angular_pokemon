import { Component } from '@angular/core';
import { PokemonApiRequestService } from '../../pokemon-api-request.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage {
  title = 'apidata';
  newdata:any;
  constructor(private _apiservice:PokemonApiRequestService){}

  ngOnInit(){
    this._apiservice.getdata().subscribe(res=>{
      this.newdata=res
    })
  }

}

import { Component, Input } from '@angular/core';
import { TestPokemon } from 'src/app/test-models/test-pokemon.model';

@Component({
  selector: 'app-test-pokemon',
  templateUrl: './test-pokemon.component.html',
  styleUrls: ['./test-pokemon.component.css']
})
export class TestPokemonComponent {

  @Input() pokemon: TestPokemon[] = [];

}

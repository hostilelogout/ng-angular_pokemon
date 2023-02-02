import { Component, Input } from '@angular/core';
import { TestPokemon } from 'src/app/test-models/test-pokemon.model';
import { TestPokemonService } from 'src/app/test-services/test-pokemon.service';

@Component({
  selector: 'app-test-pokemon',
  templateUrl: './test-pokemon.component.html',
  styleUrls: ['./test-pokemon.component.css']
})
export class TestPokemonComponent {

  @Input() pokemon: TestPokemon[] = [];
}
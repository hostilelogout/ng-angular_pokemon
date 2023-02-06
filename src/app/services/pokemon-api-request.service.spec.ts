import { TestBed } from '@angular/core/testing';

import { PokemonApiRequestService } from './pokemon-api-request.service';

describe('PokemonApiRequestService', () => {
  let service: PokemonApiRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonApiRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

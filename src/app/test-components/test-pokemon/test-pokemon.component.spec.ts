import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPokemonComponent } from './test-pokemon.component';

describe('TestPokemonComponent', () => {
  let component: TestPokemonComponent;
  let fixture: ComponentFixture<TestPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

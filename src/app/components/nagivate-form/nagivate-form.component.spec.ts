import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivateFormComponent } from './nagivate-form.component';

describe('NagivateFormComponent', () => {
  let component: NagivateFormComponent;
  let fixture: ComponentFixture<NagivateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagivateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagivateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

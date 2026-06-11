import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDatos } from './poke-datos';

describe('PokeDatos', () => {
  let component: PokeDatos;
  let fixture: ComponentFixture<PokeDatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

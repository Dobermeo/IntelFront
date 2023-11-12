import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego6Component } from './juego6.component';

describe('Juego6Component', () => {
  let component: Juego6Component;
  let fixture: ComponentFixture<Juego6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

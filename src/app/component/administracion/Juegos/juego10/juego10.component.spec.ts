import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego10Component } from './juego10.component';

describe('Juego10Component', () => {
  let component: Juego10Component;
  let fixture: ComponentFixture<Juego10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

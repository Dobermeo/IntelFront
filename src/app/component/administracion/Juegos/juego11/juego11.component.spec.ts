import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego11Component } from './juego11.component';

describe('Juego11Component', () => {
  let component: Juego11Component;
  let fixture: ComponentFixture<Juego11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

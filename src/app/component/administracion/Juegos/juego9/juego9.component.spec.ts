import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego9Component } from './juego9.component';

describe('Juego9Component', () => {
  let component: Juego9Component;
  let fixture: ComponentFixture<Juego9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego7Component } from './juego7.component';

describe('Juego7Component', () => {
  let component: Juego7Component;
  let fixture: ComponentFixture<Juego7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

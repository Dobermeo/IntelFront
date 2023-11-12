import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego13Component } from './juego13.component';

describe('Juego13Component', () => {
  let component: Juego13Component;
  let fixture: ComponentFixture<Juego13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

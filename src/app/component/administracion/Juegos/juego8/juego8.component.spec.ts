import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego8Component } from './juego8.component';

describe('Juego8Component', () => {
  let component: Juego8Component;
  let fixture: ComponentFixture<Juego8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego5Component } from './juego5.component';

describe('Juego5Component', () => {
  let component: Juego5Component;
  let fixture: ComponentFixture<Juego5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

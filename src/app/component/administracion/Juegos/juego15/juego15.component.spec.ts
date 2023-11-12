import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego15Component } from './juego15.component';

describe('Juego15Component', () => {
  let component: Juego15Component;
  let fixture: ComponentFixture<Juego15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

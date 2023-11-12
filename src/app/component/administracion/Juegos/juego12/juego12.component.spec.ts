import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego12Component } from './juego12.component';

describe('Juego12Component', () => {
  let component: Juego12Component;
  let fixture: ComponentFixture<Juego12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

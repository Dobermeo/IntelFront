import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego14Component } from './juego14.component';

describe('Juego14Component', () => {
  let component: Juego14Component;
  let fixture: ComponentFixture<Juego14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

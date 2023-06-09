import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroprofesorComponent } from './registroprofesor.component';

describe('RegistroprofesorComponent', () => {
  let component: RegistroprofesorComponent;
  let fixture: ComponentFixture<RegistroprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroprofesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

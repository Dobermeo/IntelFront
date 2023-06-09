import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenujuegosComponent } from './menujuegos.component';

describe('MenujuegosComponent', () => {
  let component: MenujuegosComponent;
  let fixture: ComponentFixture<MenujuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenujuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenujuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

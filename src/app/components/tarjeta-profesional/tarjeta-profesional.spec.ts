import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProfesional } from './tarjeta-profesional';

describe('TarjetaProfesional', () => {
  let component: TarjetaProfesional;
  let fixture: ComponentFixture<TarjetaProfesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProfesional],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaProfesional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProfesional } from './panel-profesional';

describe('PanelProfesional', () => {
  let component: PanelProfesional;
  let fixture: ComponentFixture<PanelProfesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelProfesional],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelProfesional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

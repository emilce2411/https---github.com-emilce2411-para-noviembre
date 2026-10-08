import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeProfecionales } from './listado-de-profecionales';

describe('ListadoDeProfecionales', () => {
  let component: ListadoDeProfecionales;
  let fixture: ComponentFixture<ListadoDeProfecionales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoDeProfecionales],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoDeProfecionales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

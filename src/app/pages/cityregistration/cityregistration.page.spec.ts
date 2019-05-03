import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityregistrationPage } from './cityregistration.page';

describe('CityregistrationPage', () => {
  let component: CityregistrationPage;
  let fixture: ComponentFixture<CityregistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityregistrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityregistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

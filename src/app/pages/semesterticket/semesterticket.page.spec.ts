import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterticketPage } from './semesterticket.page';

describe('SemesterticketPage', () => {
  let component: SemesterticketPage;
  let fixture: ComponentFixture<SemesterticketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterticketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterticketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

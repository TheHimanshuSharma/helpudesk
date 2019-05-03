import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcardPage } from './studentcard.page';

describe('StudentcardPage', () => {
  let component: StudentcardPage;
  let fixture: ComponentFixture<StudentcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

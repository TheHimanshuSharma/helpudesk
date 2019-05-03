import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeofconductPage } from './codeofconduct.page';

describe('CodeofconductPage', () => {
  let component: CodeofconductPage;
  let fixture: ComponentFixture<CodeofconductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeofconductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeofconductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

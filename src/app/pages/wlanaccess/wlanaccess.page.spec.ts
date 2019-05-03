import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlanaccessPage } from './wlanaccess.page';

describe('WlanaccessPage', () => {
  let component: WlanaccessPage;
  let fixture: ComponentFixture<WlanaccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlanaccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlanaccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

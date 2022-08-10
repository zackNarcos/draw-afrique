import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCmd1Component } from './form-cmd1.component';

describe('FormCmd1Component', () => {
  let component: FormCmd1Component;
  let fixture: ComponentFixture<FormCmd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCmd1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCmd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

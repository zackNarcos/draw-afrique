import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCmd2Component } from './form-cmd2.component';

describe('FormCmd2Component', () => {
  let component: FormCmd2Component;
  let fixture: ComponentFixture<FormCmd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCmd2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCmd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

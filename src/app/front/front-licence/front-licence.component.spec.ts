import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLicenceComponent } from './front-licence.component';

describe('FrontLicenceComponent', () => {
  let component: FrontLicenceComponent;
  let fixture: ComponentFixture<FrontLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLicenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

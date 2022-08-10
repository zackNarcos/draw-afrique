import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTarifComponent } from './front-tarif.component';

describe('FrontTarifComponent', () => {
  let component: FrontTarifComponent;
  let fixture: ComponentFixture<FrontTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

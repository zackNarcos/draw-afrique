import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAccueilComponent } from './front-accueil.component';

describe('FrontAccueilComponent', () => {
  let component: FrontAccueilComponent;
  let fixture: ComponentFixture<FrontAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

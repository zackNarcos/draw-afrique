import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAuthentificationComponent } from './front-authentification.component';

describe('FrontAuthentificationComponent', () => {
  let component: FrontAuthentificationComponent;
  let fixture: ComponentFixture<FrontAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAuthentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

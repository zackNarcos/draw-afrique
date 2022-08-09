import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCollectionComponent } from './sous-collection.component';

describe('SousCollectionComponent', () => {
  let component: SousCollectionComponent;
  let fixture: ComponentFixture<SousCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

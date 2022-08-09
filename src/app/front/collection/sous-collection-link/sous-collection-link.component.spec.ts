import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCollectionLinkComponent } from './sous-collection-link.component';

describe('SousCollectionLinkComponent', () => {
  let component: SousCollectionLinkComponent;
  let fixture: ComponentFixture<SousCollectionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousCollectionLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCollectionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

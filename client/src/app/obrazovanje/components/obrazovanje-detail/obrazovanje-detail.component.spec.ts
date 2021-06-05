import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazovanjeDetailComponent } from './obrazovanje-detail.component';

describe('ObrazovanjeDetailComponent', () => {
  let component: ObrazovanjeDetailComponent;
  let fixture: ComponentFixture<ObrazovanjeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrazovanjeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazovanjeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

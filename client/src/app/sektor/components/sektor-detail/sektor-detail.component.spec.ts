import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SektorDetailComponent } from './sektor-detail.component';

describe('SektorDetailComponent', () => {
  let component: SektorDetailComponent;
  let fixture: ComponentFixture<SektorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SektorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SektorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

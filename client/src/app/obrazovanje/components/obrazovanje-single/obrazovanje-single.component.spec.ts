import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazovanjeSingleComponent } from './obrazovanje-single.component';

describe('ObrazovanjeSingleComponent', () => {
  let component: ObrazovanjeSingleComponent;
  let fixture: ComponentFixture<ObrazovanjeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrazovanjeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazovanjeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

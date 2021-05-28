import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazovanjeListComponent } from './obrazovanje-list.component';

describe('ObrazovanjeListComponent', () => {
  let component: ObrazovanjeListComponent;
  let fixture: ComponentFixture<ObrazovanjeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrazovanjeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazovanjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

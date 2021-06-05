import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SektorListComponent } from './sektor-list.component';

describe('SektorListComponent', () => {
  let component: SektorListComponent;
  let fixture: ComponentFixture<SektorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SektorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SektorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

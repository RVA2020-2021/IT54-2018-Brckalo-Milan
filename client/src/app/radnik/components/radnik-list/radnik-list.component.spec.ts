import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikListComponent } from './radnik-list.component';

describe('RadnikListComponent', () => {
  let component: RadnikListComponent;
  let fixture: ComponentFixture<RadnikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadnikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceListComponent } from './preduzece-list.component';

describe('PreduzeceListComponent', () => {
  let component: PreduzeceListComponent;
  let fixture: ComponentFixture<PreduzeceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreduzeceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

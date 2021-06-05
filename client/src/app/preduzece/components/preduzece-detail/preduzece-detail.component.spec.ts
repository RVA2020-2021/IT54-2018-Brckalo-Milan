import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceDetailComponent } from './preduzece-detail.component';

describe('PreduzeceDetailComponent', () => {
  let component: PreduzeceDetailComponent;
  let fixture: ComponentFixture<PreduzeceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreduzeceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

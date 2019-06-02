import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllessonsComponent } from './alllessons.component';

describe('AlllessonsComponent', () => {
  let component: AlllessonsComponent;
  let fixture: ComponentFixture<AlllessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlllessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlllessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingCalendarComponent } from './tasting-calendar.component';

describe('TastingCalendarComponent', () => {
  let component: TastingCalendarComponent;
  let fixture: ComponentFixture<TastingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

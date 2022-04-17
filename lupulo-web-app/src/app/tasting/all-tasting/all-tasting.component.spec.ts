import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTastingComponent } from './all-tasting.component';

describe('AllTastingComponent', () => {
  let component: AllTastingComponent;
  let fixture: ComponentFixture<AllTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

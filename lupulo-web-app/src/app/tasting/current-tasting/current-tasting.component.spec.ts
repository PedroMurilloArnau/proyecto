import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTastingComponent } from './current-tasting.component';

describe('CurrentTastingComponent', () => {
  let component: CurrentTastingComponent;
  let fixture: ComponentFixture<CurrentTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

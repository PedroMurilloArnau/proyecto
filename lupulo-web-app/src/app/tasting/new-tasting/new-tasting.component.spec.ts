import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTastingComponent } from './new-tasting.component';

describe('NewTastingComponent', () => {
  let component: NewTastingComponent;
  let fixture: ComponentFixture<NewTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

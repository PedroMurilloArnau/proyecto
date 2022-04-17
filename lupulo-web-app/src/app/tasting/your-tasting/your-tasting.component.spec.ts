import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTastingComponent } from './your-tasting.component';

describe('YourTastingComponent', () => {
  let component: YourTastingComponent;
  let fixture: ComponentFixture<YourTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingTasterComponent } from './tasting-taster.component';

describe('TastingTasterComponent', () => {
  let component: TastingTasterComponent;
  let fixture: ComponentFixture<TastingTasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastingTasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingTasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

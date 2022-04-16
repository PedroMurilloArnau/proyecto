import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteComponent } from './taste.component';

describe('TasteComponent', () => {
  let component: TasteComponent;
  let fixture: ComponentFixture<TasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

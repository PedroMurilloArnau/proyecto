import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneComponent } from './gane.component';

describe('GaneComponent', () => {
  let component: GaneComponent;
  let fixture: ComponentFixture<GaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

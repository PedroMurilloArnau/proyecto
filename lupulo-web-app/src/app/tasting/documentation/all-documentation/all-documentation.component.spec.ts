import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDocumentationComponent } from './all-documentation.component';

describe('AllDocumentationComponent', () => {
  let component: AllDocumentationComponent;
  let fixture: ComponentFixture<AllDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

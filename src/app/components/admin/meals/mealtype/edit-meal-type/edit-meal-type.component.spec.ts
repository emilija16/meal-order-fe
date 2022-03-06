import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealTypeComponent } from './edit-meal-type.component';

describe('EditMealTypeComponent', () => {
  let component: EditMealTypeComponent;
  let fixture: ComponentFixture<EditMealTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMealTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

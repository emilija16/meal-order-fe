import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealSizeComponent } from './edit-meal-size.component';

describe('EditMealSizeComponent', () => {
  let component: EditMealSizeComponent;
  let fixture: ComponentFixture<EditMealSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMealSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealSizeComponent } from './add-meal-size.component';

describe('AddMealSizeComponent', () => {
  let component: AddMealSizeComponent;
  let fixture: ComponentFixture<AddMealSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMealSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

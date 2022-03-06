import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealTypeComponent } from './add-meal-type.component';

describe('AddMealTypeComponent', () => {
  let component: AddMealTypeComponent;
  let fixture: ComponentFixture<AddMealTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMealTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSizeComponent } from './meal-size.component';

describe('MealSizeComponent', () => {
  let component: MealSizeComponent;
  let fixture: ComponentFixture<MealSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

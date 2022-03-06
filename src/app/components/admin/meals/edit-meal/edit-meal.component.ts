import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Meal } from 'src/app/model/Meal';
import { MealSize } from 'src/app/model/MealSize';
import { MealType } from 'src/app/model/MealType';
import { MealService } from 'src/app/shared/services/meal/meal.service';
import { MealSizeService } from 'src/app/shared/services/meal/mealSize.service';
import { MealTypeService } from 'src/app/shared/services/meal/mealType.service';
import { MealTypeComponent } from '../mealtype/meal-type/meal-type.component';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent implements OnInit {

  id: number = 0;
  meal: Meal = {} as Meal;
  invalidInput = false;
  mealTypes: MealType[] = [];
  mealSize: MealSize[] = [];
  mealSizeId = new FormControl('');
  mealTypeId = new FormControl('');

  constructor(private mealService: MealService, private mealSizeService: MealSizeService, private mealTypeService: MealTypeService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadMealSize();
    this.loadMealTypes();
    this.id = this.route.snapshot.params['id']
    this.mealService.getById(this.id).subscribe(data => {
      this.meal = data;
    },
    error => console.log(error))
  }

  updateMeal() {
    if(this.meal.name === "") {
      this.invalidInput = true;
      return;
    }
    this.meal.mealSize = this.mealSizeId.value;
    this.meal.mealType = this.mealTypeId.value;
    this.mealService.updateMeal(this.id, this.meal).subscribe(data => {
      console.log(data)
      this.invalidInput = false;
      this.toastr.success("Meal has been successfully updated!", "Success");
      this.goToMealsList();
    },
    error => console.log(error))
  }

  loadMealTypes() {
    this.mealTypeService.getAll().subscribe(data => {
      this.mealTypes = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  loadMealSize() {
    this.mealSizeService.getAll().subscribe(data => {
      this.mealSize = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  goToMealsList() {
    this.router.navigate(['/admin/meals'])
  }
}

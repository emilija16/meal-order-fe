import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Meal } from 'src/app/model/Meal';
import { MealService } from 'src/app/shared/services/meal/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealService: MealService, private router: Router, private toastr: ToastrService) { }

  getMealsFromService() {
    this.mealService.getAll().subscribe(data => {
      this.meals = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  addMeal() {
    this.router.navigate(['admin/add-meal'])
  }

  editMeal(id: number) {
    this.router.navigate(['admin/edit-meal', id])
  }

  deleteMeal(id: number) {
    this.mealService.deleteMeal(id).subscribe(
      data => {
        console.log(data)
        this.toastr.success("Meal deleted!", "Success")
        this.getMealsFromService();
      }
    )
  }

  ngOnInit(): void {
    this.getMealsFromService();
  }
}

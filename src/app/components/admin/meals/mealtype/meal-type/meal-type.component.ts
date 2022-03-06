import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealType } from 'src/app/model/MealType';
import { MealTypeService } from 'src/app/shared/services/meal/mealType.service';

@Component({
  selector: 'app-meal-type',
  templateUrl: './meal-type.component.html',
  styleUrls: ['./meal-type.component.scss']
})
export class MealTypeComponent implements OnInit {

  mealTypes: MealType[] = [];

  constructor(private mealTypeService: MealTypeService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loadMealTypes();
  }

  addMealType() {
    this.router.navigate(['admin/add-meal-type'])
  }

  editMealType(id: number) {
    this.router.navigate(['admin/edit-meal-type', id])
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

  deleteMealType(id: number) {
    this.mealTypeService.deleteMealType(id).subscribe(
      data => {
        console.log(data)
        this.loadMealTypes()
        this.toastrService.success("Meal Type deleted!", "Success")
      }
    )
  }
}
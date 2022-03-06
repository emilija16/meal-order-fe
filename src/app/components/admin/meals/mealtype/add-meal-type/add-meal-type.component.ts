import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealType } from 'src/app/model/MealType';
import { MealTypeService } from 'src/app/shared/services/meal/mealType.service';

@Component({
  selector: 'app-add-meal-type',
  templateUrl: './add-meal-type.component.html',
  styleUrls: ['./add-meal-type.component.scss']
})
export class AddMealTypeComponent implements OnInit {

  mealType = {} as MealType;
  name = new FormControl('');
  invalidInput = false;

  constructor(private toastr: ToastrService, private mealTypeService: MealTypeService, private router: Router) { }

  ngOnInit(): void {}

  save(): void {
    console.log(this.name.value)
    this.mealType.name = this.name.value;
    console.log(this.mealType.name)
    if(this.mealType.name === "") {
      this.invalidInput = true;
      return;
    }
    this.mealTypeService.createMealType(this.mealType).subscribe(mealType => {
      this.invalidInput = false;
      mealType = this.mealType
      console.log(mealType)
      this.toastr.success("Meal type has been successfully created!", 'Success');
      this.goToMealTypeList();
    }
  )}

  goToMealTypeList() {
    this.router.navigate(['/admin/meal-type'])
  }
}
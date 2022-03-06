import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealSize } from 'src/app/model/MealSize';
import { MealSizeService } from 'src/app/shared/services/meal/mealSize.service';

@Component({
  selector: 'app-add-meal-size',
  templateUrl: './add-meal-size.component.html',
  styleUrls: ['./add-meal-size.component.scss']
})
export class AddMealSizeComponent implements OnInit {

  mealSize = {} as MealSize;
  name = new FormControl('');
  invalidInput = false;

  constructor(private toastr: ToastrService, private mealSizeService: MealSizeService, private router: Router) { }

  ngOnInit(): void {}

  save(): void {
    console.log(this.name.value)
    this.mealSize.name = this.name.value;
    console.log(this.mealSize.name)
    if(this.mealSize.name === "") {
      this.invalidInput = true;
      return;
    }
    this.mealSizeService.createMealSize(this.mealSize).subscribe(mealSize => {
      this.invalidInput = false;
      mealSize = this.mealSize
      console.log(mealSize)
      this.toastr.success("Meal size has been successfully created!", 'Success');
      this.router.navigate(['admin/meal-size'])
    }
  )}
}

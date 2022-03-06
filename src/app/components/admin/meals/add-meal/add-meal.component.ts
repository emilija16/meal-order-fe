import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MealDTO } from 'src/app/model/dto/MealDTO';
import { Meal } from 'src/app/model/Meal';
import { MealSize } from 'src/app/model/MealSize';
import { MealType } from 'src/app/model/MealType';
import { MealService } from 'src/app/shared/services/meal/meal.service';
import { MealSizeService } from 'src/app/shared/services/meal/mealSize.service';
import { MealTypeService } from 'src/app/shared/services/meal/mealType.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  meal: MealDTO = {} as MealDTO;
  mealTypes: MealType[] = [];
  mealSize: MealSize[] = [];
  mealSizeId = new FormControl('');
  mealTypeId = new FormControl('');
  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private mealService: MealService, private mealTypeService: MealTypeService,
              private mealSizeService: MealSizeService, private toastr: ToastrService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadMealSize();
    this.loadMealTypes();
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        contributions: [
          '',
          [Validators.required]
        ],
        price: ['', [Validators.required]],
        phoneNumber: ['', Validators.required]
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
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
  
  save(): void {
    this.submitted = true;
    this.meal.mealSizeId = this.mealSizeId.value;
    this.meal.mealTypeId = this.mealTypeId.value;
    this.meal.image = "../../../../assets/images/meals/meal.jpg";
    this.mealService.createMeal(this.meal).subscribe(meal => {
      meal = this.meal;
      this.toastr.success("Meal has been successfully created!", 'Success');
    },
  )}
}
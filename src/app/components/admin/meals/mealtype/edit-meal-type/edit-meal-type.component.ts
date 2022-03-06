import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealType } from 'src/app/model/MealType';
import { MealTypeService } from 'src/app/shared/services/meal/mealType.service';

@Component({
  selector: 'app-edit-meal-type',
  templateUrl: './edit-meal-type.component.html',
  styleUrls: ['./edit-meal-type.component.scss']
})
export class EditMealTypeComponent implements OnInit {

  id: number = 0;
  mealType: MealType = {} as MealType;
  invalidInput = false;

  constructor(private mealTypeService: MealTypeService, private route: ActivatedRoute,
              private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.mealTypeService.getById(this.id).subscribe(data => {
      this.mealType = data;
    },
    error => console.log(error))
  }

  updateMealType() {
    if(this.mealType.name === "") {
      this.invalidInput = true;
      return;
    }
    this.mealTypeService.updateMealType(this.id, this.mealType).subscribe(data => {
      console.log(data)
      this.invalidInput = false;
      this.goToMealTypeList();
      this.toastrService.success("Meal Type has been successfully updated!", "Success")
    },
    error => console.log(error))
  }

  goToMealTypeList() {
    this.router.navigate(['/admin/meal-type'])
  }
}

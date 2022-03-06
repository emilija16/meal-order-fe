import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealSize } from 'src/app/model/MealSize';
import { MealSizeService } from 'src/app/shared/services/meal/mealSize.service';

@Component({
  selector: 'app-edit-meal-size',
  templateUrl: './edit-meal-size.component.html',
  styleUrls: ['./edit-meal-size.component.scss']
})
export class EditMealSizeComponent implements OnInit {

  id: number = 0;
  mealSize: MealSize = {} as MealSize;
  invalidInput = false;

  constructor(private mealSizeService: MealSizeService, private route: ActivatedRoute,
              private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.mealSizeService.getById(this.id).subscribe(data => {
      this.mealSize = data;
    },
    error => console.log(error))
  }

  updateMealSize() {
    if(this.mealSize.name === "") {
      this.invalidInput = true;
      return;
    }
    this.mealSizeService.updateMealSize(this.id, this.mealSize).subscribe(data => {
      console.log(data)
      this.invalidInput = false;
      this.toastrService.success("Meal Size has been successfully updated!", "Success")
      this.goToMealSizeList();
    },
    error => console.log(error))
  }

  goToMealSizeList() {
    this.router.navigate(['/admin/meal-size'])
  }
}

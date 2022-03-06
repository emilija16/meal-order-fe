import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MealSize } from 'src/app/model/MealSize';
import { MealSizeService } from 'src/app/shared/services/meal/mealSize.service';

@Component({
  selector: 'app-meal-size',
  templateUrl: './meal-size.component.html',
  styleUrls: ['./meal-size.component.scss']
})
export class MealSizeComponent implements OnInit {

  mealSize: MealSize[] = [];

  constructor(private mealSizeService: MealSizeService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  addMealSize() {
    this.router.navigate(['admin/add-meal-size'])
  }

  editMealSize(id: number) {
    this.router.navigate(['admin/edit-meal-size', id])
  }

  loadData() {
    this.mealSizeService.getAll().subscribe(data => {
      this.mealSize = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  deleteMealSize(id: number) {
    this.mealSizeService.deleteMealSize(id).subscribe(
      data => {
        console.log(data)
        this.loadData()
        this.toastrService.success("Meal size deleted!", "Success")
      }
    )
  }
}

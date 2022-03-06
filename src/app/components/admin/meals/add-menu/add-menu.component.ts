import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DailyMenu } from 'src/app/model/DailyMenu';
import { Meal } from 'src/app/model/Meal';
import { WeeklyMenu } from 'src/app/model/WeeklyMenu';
import { MealService } from 'src/app/shared/services/meal/meal.service';
import { DailyMenuService } from 'src/app/shared/services/menu/dailyMenu.service';
import { WeeklyMenuService } from 'src/app/shared/services/menu/weeklyMenuService';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  meals: Meal[] = [];
  daily: DailyMenu[] = [];
  today = new Date();
  dailyMenu = {} as DailyMenu;
  dateFrom = {
    day: 14,
    month: 2,
    year: 2022
  } as NgbDateStruct;
  formatDates: any = [];
  format: any;
  dateArray: any = [];
  show = false;
  dateModal: any;
  invalidDate = false;
  dateFromFormat: any;
  dateToFormat: any;
  weeklyMenu = {} as WeeklyMenu;
  addedmeals: Map<string, Meal[]> = new Map();
  formData = new FormData();
  selectedMeals: Meal[] = [];

  constructor(private mealService: MealService, private dailyMenuService: DailyMenuService,
              config: NgbModalConfig, private modalService: NgbModal,
              private weeklyMenuService: WeeklyMenuService, private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.getMealsFromService();
  }

  open(content: any, date: any) {
    let meals: Meal[] | undefined = [];
    if(this.addedmeals.get(date)) {
      meals = this.addedmeals.get(date)
     
    }
    console.log(meals)
    console.log(this.dateModal)
    console.log(content)
    console.log(this.selectedMeals)
    this.selectedMeals = meals ? meals : [];
    console.log(this.selectedMeals)
    this.modalService.open(content);
  }

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

  getDailyMenuFromService() {
    this.dailyMenuService.getAll().subscribe(data => {
      this.daily = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  getDate(date: any) {
    this.dateModal = date;
  }

  dateRange(steps = 1) {
    this.dateFromFormat = this.dateFrom.year + "-" +
    [(this.dateFrom.month < 10 ? ('0' + this.dateFrom.month) : this.dateFrom.month),
    (this.dateFrom.day < 10 ? ('0' + this.dateFrom.day) : this.dateFrom.day)].join("-");
    
    const dateTo: Date = new Date();
    dateTo.setDate(this.dateFrom.day + 4);

    this.dateToFormat = formatDate(dateTo, 'yyyy-MM-dd', 'en-US');

    let currentDate = new Date(this.dateFromFormat);
    
    const todayDateFormat = formatDate(this.today, 'yyyy-MM-dd', 'en-US');
    console.log(todayDateFormat)
    if(this.dateFromFormat < todayDateFormat) {
      this.invalidDate = true;
      return;
    }
    this.invalidDate = false;
  
    while (currentDate <= new Date(dateTo)) {
      this.dateArray.push(new Date(currentDate));
      currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    if(this.formatDates.length <= 0) {
      for(let i = 0; i < this.dateArray.length; i++) {
        this.format = formatDate(this.dateArray[i], 'yyyy-MM-dd', 'en-US');
          this.formatDates.push(this.format);
      }
      console.log("*********" + this.formatDates)
      return this.dateArray;
    }
    
  }

  fileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file = fileList[0];
        this.formData.append('files', file, file.name);
      } 
  }
    
  createWeeklyMenu() {
    this.weeklyMenu.dateFrom = this.dateFromFormat;
    this.weeklyMenu.dateTo = this.dateToFormat;
    this.dailyMenu.date = this.dateModal;
    let dailyMenus: DailyMenu[] = [];
    for (let [date, meals] of  this.addedmeals.entries()) {
      let dailyMenu: DailyMenu  = { date: date, meals: meals }
      console.log(dailyMenu)
      console.log(this.weeklyMenu.menus)
      dailyMenus.push(dailyMenu)
    }
    this.weeklyMenu.menus = dailyMenus
    console.log(this.weeklyMenu)
    this.formData.append('weeklyMenu', new Blob([JSON
      .stringify(this.weeklyMenu)], {
      type: 'application/json'
    }));
    this.weeklyMenuService.createWeeklyMenu(this.formData).subscribe(weeklyMenu => {
      weeklyMenu = this.weeklyMenu;
      console.log(weeklyMenu);
      this.toastr.success("Weekly menu has been successfully created!", 'Success');
    },
    error => {
      console.log(error)
    })
  }

  addMeal(meal: Meal, date: any) {
  let meals: Meal[] | undefined = [];
  console.log(date)

  if(this.addedmeals.get(date)) {
    meals = this.addedmeals.get(date)
  }
   if(meals) {
    meals.push(meal)
    this.addedmeals.set(date, meals);
    this.selectedMeals = meals
   }
   console.log(this.addedmeals)
   console.log(this.selectedMeals)
  }

  deleteMeal(id: number, date: any) {
    let meals: Meal[] | undefined = [];
    if(this.addedmeals.get(date)) {
      meals = this.addedmeals.get(date)

    }
    if(meals) {
      meals.forEach((value: any, index) => {
        if(value.id === id) {
          if(meals) {
            meals.splice(index, 1);
          }
        }
      })
      this.selectedMeals = meals
      this.addedmeals.set(date, this.selectedMeals)
    } 
  }

  submit() {
    this.dateRange();
  }
}
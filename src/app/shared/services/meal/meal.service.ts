import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MealDTO } from "src/app/model/dto/MealDTO";
import { Meal } from "src/app/model/Meal";
import { environment } from "src/environments/environment";

const mealUrl = environment.mealUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class MealService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Meal[]> {
      return this.http.get<Meal[]>(mealUrl);
    }

    createMeal(meal: MealDTO): Observable<MealDTO> {
      return this.http.post<MealDTO>(mealUrl,
        meal
      );
    }

    updateMeal(id:number, meal: Meal): Observable<any> {
      return this.http.put(`${mealUrl}/${id}`, meal)
    }

    getById(id: number):Observable<Meal> {
      return this.http.get<Meal>(`${mealUrl}/${id}`);
    }

    deleteMeal(id: number): Observable<any>{
      return this.http.delete(`${mealUrl}/${id}`)
    }
  }
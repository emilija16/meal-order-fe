import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Meal } from "src/app/model/Meal";
import { MealType } from "src/app/model/MealType";
import { environment } from "src/environments/environment";

const mealTypeUrl = environment.mealTypeUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class MealTypeService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<MealType[]> {
      return this.http.get<MealType[]>(mealTypeUrl);
    }

    createMealType(mealType: MealType): Observable<MealType> {
      return this.http.post<MealType>(mealTypeUrl,
        mealType
      );
    }

    updateMealType(id:number, mealType: MealType): Observable<any> {
      return this.http.put(`${mealTypeUrl}/${id}`, mealType)
    }

    getById(id: number):Observable<MealType> {
      return this.http.get<MealType>(`${mealTypeUrl}/${id}`);
    }

    deleteMealType(id: number): Observable<any>{
      return this.http.delete(`${mealTypeUrl}/${id}`)
    }
  }
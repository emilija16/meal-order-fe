import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MealSize } from "src/app/model/MealSize";
import { MealType } from "src/app/model/MealType";
import { environment } from "src/environments/environment";

const mealSizeUrl = environment.mealSizeUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class MealSizeService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<MealSize[]> {
      return this.http.get<MealSize[]>(mealSizeUrl);
    }

    createMealSize(mealSize: MealType): Observable<MealSize> {
      return this.http.post<MealSize>(mealSizeUrl,
        mealSize
      );
    }

    updateMealSize(id:number, mealSize: MealSize): Observable<any> {
      return this.http.put(`${mealSizeUrl}/${id}`, mealSize)
    }

    getById(id: number):Observable<MealSize> {
      return this.http.get<MealSize>(`${mealSizeUrl}/${id}`);
    }

    deleteMealSize(id: number): Observable<any>{
      return this.http.delete(`${mealSizeUrl}/${id}`)
    }
  }
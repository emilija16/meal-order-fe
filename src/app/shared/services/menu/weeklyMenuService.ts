import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeeklyMenu } from "src/app/model/WeeklyMenu";
import { environment } from "src/environments/environment";

const weeklyMenuUrl = environment.weeklyMenuUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class WeeklyMenuService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<WeeklyMenu[]> {
      return this.http.get<WeeklyMenu[]>(weeklyMenuUrl);
    }

    createWeeklyMenu(formData: any): Observable<any> {
      return this.http.post<any>(weeklyMenuUrl,
        formData
      );
    }
  }
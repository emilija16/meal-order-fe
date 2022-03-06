import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DailyMenu } from "src/app/model/DailyMenu";
import { environment } from "src/environments/environment";

const dailyMenuUrl = environment.dailyMenuUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class DailyMenuService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<DailyMenu[]> {
      return this.http.get<DailyMenu[]>(dailyMenuUrl);
    }

    createDailyMenu(dailyMenu: DailyMenu): Observable<DailyMenu> {
      return this.http.post<DailyMenu>(dailyMenuUrl,
        dailyMenu
      );
    }

    updateDailyMenu(id:number, dailyMenu: DailyMenu): Observable<any> {
      return this.http.put(`${dailyMenuUrl}/${id}`, dailyMenu)
    }

    getById(id: number):Observable<DailyMenu> {
      return this.http.get<DailyMenu>(`${dailyMenuUrl}/${id}`);
    }

    deleteDailyMenu(id: number): Observable<any>{
      return this.http.delete(`${dailyMenuUrl}/${id}`)
    }
  }
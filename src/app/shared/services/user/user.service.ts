import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/model/User.model";
import { environment } from "src/environments/environment";

const usersUrl = environment.usersUrl;

@Injectable({
    providedIn: 'root'
  })
  
  export class UserService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(usersUrl);
    }

    banUser(id:number): Observable<any> {
      return this.http.delete(`${usersUrl}/${id}`)
    }
  }
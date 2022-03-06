import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../model/User.model';
import { environment } from 'src/environments/environment';
import { LoginDTO } from 'src/app/model/dto/LoginDTO';

const authApi = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(authApi + "auth/registration",
      user
    );
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post(authApi + "auth/login",
      loginDTO
    );
  }
}
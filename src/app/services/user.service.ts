import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../User/user';
import { AuthenticateRequest } from './authReq';
import { AuthResponse } from './auth-response';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  AUTH_SERVER_ADDRESS: string = "http://h2903840.stratoserver.net:49650/user";
  authSubject = new BehaviorSubject(false);
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("ACCESS_TOKEN")
    })
  };

  constructor(private http: HttpClient) { }

  GetAllUser(): Observable<any> {
    console.log(localStorage.getItem("ACCESS_TOKEN"))
    return this.http.get<IUser[]>("http://h2903840.stratoserver.net:49650/user", this.httpOptions);
  }

  Register(newUser: IUser) {
    return this.http.post("http://h2903840.stratoserver.net:49650/user/register", newUser);
  }

  GetSpecificUser(username: string): Observable<any> {
    return this.http.get<IUser>("http://h2903840.stratoserver.net:49650/user/specificuser/" + username, this.httpOptions);
  }
  login(user: AuthenticateRequest): Observable<AuthResponse> {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res) {
          localStorage.setItem("ACCESS_TOKEN", res.token);
          let json = JSON.stringify(res.user);
          localStorage.setItem("User", json);
          this.authSubject.next(true);
        }
      })
    );
  }
  loggout() {
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("User")
  }


}
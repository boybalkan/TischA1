import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  data: String;
  error: String;
  users: IUser[];
  constructor(private router: Router, private http: HttpClient) { 
    this.data = '';
   }

  ngOnInit(): void {
    this.http.get<IUser[]>("http://h2903840.stratoserver.net:49650/user").subscribe(result => {
      this.users = result;
    },
    error => console.error(error)
    );
  }

  signMeUp(){
    this.router.navigate(['/home']);
  }

  private prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = 'http://h2903840.stratoserver.net:49650/user/register';
    // Prepare the request
    return this.http.get(dataUrl);
  }

}

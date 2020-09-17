import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: String;
  error: String;
  users: IUser[];
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  logMeIn(){
    this.router.navigate(['/home']);
    
  }
  

}

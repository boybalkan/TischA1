import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import { IUser } from '../User/user';
import { UserService } from '../services/user.service';
import { AuthenticateRequest } from '../services/authReq';
import { AuthResponse } from '../services/auth-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: IUser;

  constructor(private router: Router, private http: HttpClient, public httpClient:HttpClient, private userService:UserService) { }

  ngOnInit() {
  }


  registerUser: AuthResponse;
  firstname:string;
  lastname: string;
  username:string;
  email:string;
  geburtsdatum:string="";
  password:string;
  confPassword:string;


  registration(){
    this.registerUser = <AuthResponse>{};
    this.user.username = this.username;
    this.user.firstname = this.firstname;
    this.user.email = this.email;
    this.user.passwort = this.password;
    this.user.geburtsdatum = this.geburtsdatum;

    console.log(this.user.username);

    this.userService.Register(this.user).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }








  register(username: String){
    //this.router.navigate(['/home']); 
    var url = "http://h2903840.stratoserver.net:49650/user/register";
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
   // const requestOptions = new HttpRequest({ headers: headers});
   let ubergabe = {"username":username,
                  "firstname":"A",
                  "lastname":"A",
                  "email":"A@com",
                  "geburtstdatum":null,
                  "password":"A"
                  }
    let dataToSend = {"username":"A",
                      "firstname":"A",
                      "lastname":"A",
                      "email":"A@com",  
                      "geburtstdatum":null,
                      "password":"A"
                     };
   console.log(dataToSend);
   console.log(ubergabe);
    return this.http.post(url, dataToSend, {observe: 'response'})
    .subscribe(data => {
      console.log(data['_body']);
    },error => {
      console.log(error);
    });
  }

}

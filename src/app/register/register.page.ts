import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import { IUser } from '../User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: IUser;

  constructor(private router: Router, private http: HttpClient, public httpClient:HttpClient) { }

  ngOnInit() {
  }

  signMeUp(username: String){
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

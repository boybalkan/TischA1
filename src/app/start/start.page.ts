import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { AuthenticateRequest } from '../services/authReq';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  

  constructor(private router : Router, private userService:UserService) {

   }

  ngOnInit() {
    if(localStorage.getItem("ACCESS_TOKEN")){
      this.router.navigateByUrl("/home");
    }
  }

  loginUser:AuthenticateRequest;
  username:string;
  pwd:string;

  login(){
    this.loginUser = <AuthenticateRequest>{};
    this.loginUser.password = this.pwd;
    this.loginUser.username = this.username;

    console.log(this.loginUser.username + this.loginUser.password);

    this.userService.login(this.loginUser).subscribe((res) => {
      console.log(this.loginUser.username + this.loginUser.password);
      this.router.navigateByUrl('/home');
      console.log(this.loginUser.username + this.loginUser.password);
    });
    //this.router.navigateByUrl('/home');
  }

}

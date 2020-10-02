import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/User/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private userService : UserService) { }
loginUser:IUser;
  ngOnInit() {
    var jsonUser = localStorage.getItem("User");
    this.loginUser = JSON.parse(jsonUser);
  }

  logout(){
    this.userService.loggout();
    this.router.navigateByUrl("/start");
  }
}

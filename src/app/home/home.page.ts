import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../User/user';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: String;
  error: String;
  users: IUser[];
  constructor(private http: HttpClient) {
    this.data = '';
    
  }

 

  ngOnInit(): void {
    this.http.get<IUser[]>("http://h2903840.stratoserver.net:49650/user").subscribe(result => {
      this.users = result;
      console.log(this.users);
    },
    error => console.error(error)
    );
  }
  
  private prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = 'http://h2903840.stratoserver.net:49650/user';
    // Prepare the request
    return this.http.get(dataUrl);
  }
  
}




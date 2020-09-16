import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';


@Component({
  selector: 'app-ho-t',
  templateUrl: './ho-t.page.html',
  styleUrls: ['./ho-t.page.scss'],
})
export class HoTPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CallThrowCoin()
{
  if(Math.random() > 0.5){
    //document.getElementById("coin").src  = "assets/kopf.png";
    //document.getElementById("headT").innerHTML = "Kopf gewinnt!";
    alert("Kopf gewinnt...");

  }else{
    //document.getElementById("coin") = "assets/zahl.png";
    //document.getElementById("tailT").innerHTML = "Zahl gewinnt!";
    alert("Zahl gewinnt...");
  }
   
   
  
}
}

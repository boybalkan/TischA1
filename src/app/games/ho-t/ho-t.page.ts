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
    document.getElementById("ergebnis").innerHTML = "Kopf gewinnt!";


  }else{
    //document.getElementById("coin") = "assets/zahl.png";
    document.getElementById("ergebnis").innerHTML = "Zahl gewinnt!";
   
  }
   
   
  
}
}

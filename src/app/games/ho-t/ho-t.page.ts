import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { format } from 'path';


@Component({
  selector: 'app-ho-t',
  templateUrl: './ho-t.page.html',
  styleUrls: ['./ho-t.page.scss'],
})
export class HoTPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  k=0;
  z=0;
  radioValue: any;
  inputBet: number ;

  CallThrowCoin(){
    var radioButtonSelect = this.radioValue;
    var pot = this.inputBet;
    var credit = parseFloat(document.getElementById("credit").innerHTML);

  

    
  

    if(Math.random() > 0.5){
      //document.getElementById("coin").src  = "assets/kopf.png";
      if(radioButtonSelect == "rBHead"){
        document.getElementById("ergebnis").innerHTML = "... Head. You win!";
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;

        credit = +credit + +pot;
        console.log(credit);
        document.getElementById("credit").innerHTML = credit;

      }else{
        document.getElementById("ergebnis").innerHTML = "... Head. You lose!";
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;

        credit = credit - pot;
        console.log(credit);
        document.getElementById("credit").innerHTML = credit;
      }
     
   
    }else{
      //document.getElementById("coin") = "assets/zahl.png";
      if(radioButtonSelect == "rBTail"){
        document.getElementById("ergebnis").innerHTML = "... Tail. You win!";
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;

        credit = +credit + +pot;
        console.log(credit);
        document.getElementById("credit").innerHTML = credit;
      }else{
        document.getElementById("ergebnis").innerHTML = "... Tail. You lose!";
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;

        credit = credit - pot;
        console.log(credit);
        document.getElementById("credit").innerHTML = credit;
      }
    
    }
  }

  reset(){
    document.getElementById("ergebnis").innerHTML = "And the winner is...";
    document.getElementById("wins").innerHTML = "Won: ";
    document.getElementById("loses").innerHTML = "Lost: ";
    document.getElementById("bet").innerHTML = " ";
    
  }
}

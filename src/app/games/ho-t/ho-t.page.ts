import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { exitCode } from 'process';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-ho-t',
  templateUrl: './ho-t.page.html',
  styleUrls: ['./ho-t.page.scss'],
})
export class HoTPage implements OnInit {
  selectedValue:Number = 1;
  data:any[] = [];
  selectedVal:any;

  k=0;
  z=0;
  inputBet: number ;

  constructor(private platform : Platform) { 
    this.platform.ready().then(()=>{
      this.data = [ {id:1, name:"Head"}, {id:2, name:"Tail"} ];
    })
  }

  ngOnInit() {
  }

 OnChange(event){
   console.log("You have selected id: " + event.target.value);
   this.selectedVal = event.target.value;
   console.log(this.selectedVal);
 }

  

  CallThrowCoin(){
    var credit = parseFloat(document.getElementById("credit").innerHTML);
    var pot = this.inputBet.toFixed(1);

    if(credit < 0){
      alert("You have lost all your money. Please fill up!")
      exitCode;
    }

    var winPot = +credit + +pot;
    var losePot = credit - pot;
    
    if(Math.random() > 0.5){
      //document.getElementById("coin").src  = "assets/kopf.png";
      if(this.selectedVal == "Head"){
        document.getElementById("ergebnis").innerHTML = "... Head. You win!";
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;
        document.getElementById("credit").innerHTML = winPot.toFixed(2) + " €";

      }else{
        document.getElementById("ergebnis").innerHTML = "... Head. You lose!";
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;
        
        document.getElementById("credit").innerHTML = losePot.toFixed(2) + " €";
      }
     
   
    }else{
      //document.getElementById("coin") = "assets/zahl.png";
      if(this.selectedVal == "Tail"){
        document.getElementById("ergebnis").innerHTML = "... Tail. You win!";
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;

       
        document.getElementById("credit").innerHTML =  winPot.toFixed(2) + " €";
      }else{
        document.getElementById("ergebnis").innerHTML = "... Tail. You lose!";
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;

       
        document.getElementById("credit").innerHTML = losePot.toFixed(2) + " €";
      }
    
    }
  }

  reset(){
    document.getElementById("ergebnis").innerHTML = "And the winner is...";
    document.getElementById("wins").innerHTML = "Won: ";
    document.getElementById("loses").innerHTML = "Lost: ";
    document.getElementById("bet").innerHTML = "  in € ";
    
  }
}

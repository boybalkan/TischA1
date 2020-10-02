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
  betData: any[] = [];
  selectedVal:any;
  selectedBet:any;

  k=0;
  z=0;
  inputBet: number ;

  constructor(private platform : Platform) { 
    this.platform.ready().then(()=>{
      this.data = [ {id:1, name:"Head"}, {id:2, name:"Tail"} ];
      this.betData = [ {id:1, val:0.10}, {id:2, val:0.20}, {id:3, val:0.30}, {id:4, val:0.50}, {id:5, val:1.00},
                       {id:6, val:1.50}, {id:7, val:2.00}, {id:8, val:2.50}, {id:9, val:5.00}, {id:10, val:10.00}  ];
    })
  }

  ngOnInit() {
  }

 OnChange(event){
   this.selectedVal = event.target.value;
   console.log(this.selectedVal);
 }
 OnChangeBet(event){
  this.selectedBet = event.target.value;
  console.log(this.selectedBet);
}
  

  CallThrowCoin(){
    document.getElementById("coinSide").style.display = "none"; 
    var coinSideHead = document.getElementById("coinSideHead");
    var coinSideTail = document.getElementById("coinSideTail");
    var coinDiv = document.getElementById("coinSide");

    setTimeout (() => {
      coinDiv.style.display="inline";
   }, 500);

    setTimeout (() => { 
      coinDiv.style.display="none";
    }, 300);
   
    var credit = parseFloat(document.getElementById("credit").innerHTML);
    var pot = this.selectedBet;
   //console.log(pot);

    if((credit-pot) < 0){
      alert("You have lost all your money. Please fill up!")
      return;
    }

    var winPot = +credit + +pot;
    var losePot = credit - pot;
    
    coinSideTail.style.display ="none";
    coinSideHead.style.display = "none";

    var x = Math.random();
    console.log(x);
    
    if(x > 0.5){
      coinSideHead.style.display ="block";
      if(this.selectedVal == "Head"){
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;
        document.getElementById("credit").innerHTML = winPot.toFixed(2) + " €";
       
    }else{       
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;
        document.getElementById("credit").innerHTML = losePot.toFixed(2) + " €";
      }
        
    }else{     
      coinSideTail.style.display = "inline";
      if(this.selectedVal == "Tail"){
        this.k = this.k + 1;
        document.getElementById("wins").innerHTML = "Won: " + this.k ;
        document.getElementById("credit").innerHTML =  winPot.toFixed(2) + " €";

      }else{
        this.z = this.z + 1;
        document.getElementById("loses").innerHTML = "Lost: " + this.z ;
        document.getElementById("credit").innerHTML = losePot.toFixed(2) + " €";       
      }    
    }
  }

  reset(){
    
    document.getElementById("wins").innerHTML = "";
    document.getElementById("loses").innerHTML = "";
    document.getElementById("coinSide").style.display = "none";   
    this.k=0;
    this.z=0; 
  }
}

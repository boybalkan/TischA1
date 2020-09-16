var kopf = 0;
var zahl = 0;

function throwCoin()
{
    alert("External File is working...");
    var kopf = 0;
    var zahl = 0;
    if(Math.random() > 0.5){
      document.getElementById("coin").src = "assets/kopf.png";
      kopf++;
      document.getElementById("headT").innerHTML = "Kopf: " + kopf;

    }else{
      document.getElementById("coin").src = "assets/zahl.png";
      zahl++;
      document.getElementById("tailT").innerHTML = "Zahl: " + zahl;
    }
  
}
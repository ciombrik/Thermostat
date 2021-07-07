"use strict"

class Thermostat{
  constructor(){
    this.MINIMUM_TEMP = 10;
    this.temp = 20;
    this.MAXTEMP_PSMON = 25;
    this.MAXTEMP_PSMOFF = 32;
    this.powerSaver = true;
  }
  getCurrentTemp(){
     return this.temp;
  }
   increase(){
     if(this.maximumTemp()) {
       return;
     }
    this.temp += 1 
   }
   decrease(){
     if(this.minimumTemp()) {
       return;
     }
     this.temp -= 1
   }
   minimumTemp(){
     return this.temp === this.MINIMUM_TEMP;
    }
    maximumTemp(){
      if(this.powerSaver === true){
        return this.temp === this.MAXTEMP_PSMON;
      }
      return this.temp === this.MAXTEMP_PSMOFF;

    }
    turnPsmOn(){
      this.powerSaver = true
      }

    turnPsmOff(){
    this.powerSaver = false
    }
    reset(){
      this.temp = 20;
    }
    energyUsage(){
      if(this.getCurrentTemp() < 18){
      return "low-usage"
      }
      else if(this.getCurrentTemp() < 26 ){
        return "medium-usage"
      }
        return "high-usage"
    }
  }
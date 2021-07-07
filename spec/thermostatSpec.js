"use strict"
 describe("Thermostat", () => {
   let thermostat;
   beforeEach(() => {
     thermostat = new Thermostat();
  });
  it("start thermostat from 20 degrees", () => {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
  it("increase the tempetature", () => {
    thermostat.increase()
    expect(thermostat.getCurrentTemp()).toEqual(21)
  });
  it("decrease the temperature", () => {
    thermostat.decrease()
    expect(thermostat.getCurrentTemp()).toEqual(19)
  });
  it("has a mimimun 10 degrees", () => {
    for (let i = 0; i < 11; i++) {
    thermostat.decrease();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10)
  });
  it("has a maximum temp 25 degrees when the PSM is on", () => {
    for( let i = 0; i < 6; i++) {
      thermostat.increase()
     }
    expect(thermostat.getCurrentTemp()).toEqual(25)
  });
  it("has a maximum temp 32 degrees when the PSM is off", () => {
    thermostat.turnPsmOff()
    for(let i = 0; i < 13; i++){
      thermostat.increase()
    } 
    expect(thermostat.getCurrentTemp()).toEqual(32)
    });
    it("can reset the temperature to 20 degrees", () => {
      for(let i = 0; i < 4; i++){
     thermostat.increase()
      }
     thermostat.reset()
    expect(thermostat.getCurrentTemp()).toEqual(20)
    });
    it("returns low usage when temp below 18", () => {
      for(let i = 0; i < 3; i++){
        thermostat.decrease()
      }
     expect(thermostat.energyUsage()).toEqual("low-usage")
    });
    it("returns medium usage when temp between 18 and 25", () => {
  
     expect(thermostat.energyUsage()).toEqual("medium-usage")
    });
    it("returns high usage when temp above 25", () => {
      thermostat.turnPsmOff();
      for(let i = 0; i < 6; i++){
        thermostat.increase()
      }
     expect(thermostat.energyUsage()).toEqual("high-usage")
    });
 });

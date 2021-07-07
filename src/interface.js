document.addEventListener("DOMContentLoaded", () => {
  thermostat = new Thermostat();
  document.querySelector("#temp").innerText = thermostat.temp + "°C"
  document.querySelector("#PSM").innerText = "Power Saving Mode On"
  
  document.querySelector('#temp-up').addEventListener('click', () => {
  thermostat.increase();
  document.querySelector("#temp").innerText = thermostat.temp + "°C"
  })
  
  document.querySelector('#temp-down').addEventListener('click', () => {
  thermostat.decrease();
  document.querySelector("#temp").innerText = thermostat.temp + "°C"
  })
  
  document.querySelector('#reset').addEventListener('click', () => {
  thermostat.reset();
  document.querySelector("#temp").innerText = thermostat.temp + "°C"
  })
  
  document.querySelector('#PSM-on').addEventListener('click', () => {
    thermostat.turnPsmOn();
    document.querySelector("#PSM").innerText = "Power Saving Mode On"
  })
  document.querySelector('#PSM-off').addEventListener('click', () => {
    thermostat.turnPsmOff();
    document.querySelector("#PSM").innerText = "Power Saving Mode Off"
})
});
const myTemp = 50;
let myWind = 5;
let myChill = null;
myChill = 35.74 + (0.6215*myTemp) - (35.75*(myWind**0.16)) + (0.4275 * myTemp * (myWind**0.16));
myChill = myChill.toFixed(1);

const temperature = document.querySelector("#temp");
const windSpeed = document.querySelector("#windSpeed");
const windchill = document.querySelector("#windchill");

temperature.textContent = `${myTemp}º`;
windSpeed.textContent = `${myWind}º`;
windchill.textContent = `${myChill}º`;
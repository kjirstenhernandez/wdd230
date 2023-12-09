const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.43&lon=-86.91&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";
const summaryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.43&lon=-86.91&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";

// Mini Window variables
const todayTemp = document.querySelector("#todayHigh");
const todayIcon = document.querySelector("#todayIcon");

// Detailed window variables
const currentTemp = document.querySelector("#currentTemp");
const mainWeather = document.querySelector("#mainWeather");
const weatherDesc = document.querySelector("#weatherDesc");
const currentIcon = document.querySelector("#currentIcon");
const currentHumidity = document.querySelector("#currentHumidity");
const tomorrowTemp = document.querySelector("#tomorrowTemp"); // This part needs to be completed by the forecast function

// Establishing Dates
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);


async function getCurrentWeatherData() {
    try{
        const response = await fetch(currentURL);
        if (response.ok){
            const data = await response.json();
            displayCurrentWeather(data);
        }
        else {
            throw Error(await response.text);
        }
    }
    catch (error){
        console.log(error);
    }
}

async function getForecastWeatherData() {
    try{
        const response = await fetch(summaryURL);
        if (response.ok){
            const data = await response.json();
            displayForecastWeather(data);
        }
        else {
            throw Error(await response.text);
        }
    }
    catch (error){
        console.log(error);
    }
}


// Fill with the information for the Longer Weather set (Humidity, Main, current Icon, Description)
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}º F`
    currentIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherDesc.innerHTML = data.weather[0].description;
    currentHumidity.innerHTML = `Current Humidity: ${data.main.humidity}%`;
    mainWeather.innerHTML = `Today's Expected Weather: ${data.weather[0].main}`;

    // Mini Weather "High"
    todayTemp.innerHTML = `${data.main.temp_max}º F`;
}

function displayForecastWeather(data) {
    data.list.forEach(entry => {
    // convert OpenWeather dates
        const unixDT = entry.dt;
        const milliseconds = unixDT * 1000;
        const dateObject = new Date(milliseconds);
        const weekday = dateObject.toLocaleString("en-US", {weekday: "short"}); 
        const month = dateObject.toLocaleString("en-US", {month: "short"}); 
        const day = dateObject.toLocaleString("en-US", {day: "numeric"});
        const year = dateObject.toLocaleString("en-US", {year: "numeric"});
        const hour = dateObject.toLocaleString("en-US", {hour: "numeric"});
        let date = `${weekday} ${month} ${day} ${year}`;
        if (tomorrow.toDateString() == date){
            // for some reason the time stamp for 15:00:00 is reading as "8 AM", so I added an adjustment in this code.  
            if (hour == "8 AM") {
                tomorrowTemp.innerHTML = `Tomorrow's High: ${entry.main.temp_max}º F`;
                }
        }
    });
}

getCurrentWeatherData();
getForecastWeatherData();
const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.17&lon=-111.63&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.17&lon=-111.63&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";
const currentTemp = document.querySelector("#currentTemp");
const icon = document.querySelector("#weatherIcon");
const weatherDescription = document.querySelector("#weatherDesc");
const forecast = document.querySelector("#futureForecast");

// Setting up today's date
const currentDay = Date.now();
const todayObject = new Date(currentDay);
const todayWeekday = todayObject.toLocaleString("en-US", {weekday: "long"}); 
const todayMonth = todayObject.toLocaleString("en-US", {month: "long"}); 
const todayDay = todayObject.toLocaleString("en-US", {day: "numeric"});
const todayYear = todayObject.toLocaleString("en-US", {year: "numeric"});

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
        const response = await fetch(forecastURL);
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

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}° F`;
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherDescription.innerHTML = data.weather[0].description;
}

function displayForecastWeather(data) {
    // forecast.innerHTML = '';
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

        if (weekday !== todayWeekday) {
            const checkDay = weekday;
    
            if (hour == "2 PM") {
                const forecastHigh = entry.main.temp_max;
                const date = document.createElement("span");
                date.innerHTML = `${weekday}, ${month} ${day}, ${year}:`
                const high = document.createElement("p");
                high.innerHTML = `${forecastHigh}° F`;

                forecast.appendChild(date)
                forecast.appendChild(high);
                }
        }

    });
}

getCurrentWeatherData();
getForecastWeatherData();
const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.17&lon=-111.62&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";
const weatherIcon = document.querySelector("#weatherIcon");
const weatherDescription = document.querySelector("#weatherDesc");

async function getWeatherData() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.table(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text);
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayWeather(data) {
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherDescription.innerHTML = `${data.main.temp}° F - ${data.weather[0].description}`;
}

getWeatherData();
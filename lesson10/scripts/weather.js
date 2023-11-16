const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=6d605f9d9bbfcacd0f0147c943eb0dc5&units=imperial";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayResults(data) {
    weatherIcon.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    currentTemp.innerHTML = `${data.main.temp}° F`;
    captionDesc.innerHTML = `${data.weather[0].description}`;
}

apiFetch(url);
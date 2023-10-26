const msToDays = 84600000;
const displayMessage = document.querySelector("#visitDates");

// const todaysDate = new Date();
const today = Date.now();
let visitStart = Number(window.localStorage.getItem("visitStart")) || 0;
let timeBetween = (today - visitStart) / msToDays;

if (visitStart == 0){
    displayMessage.textContent = "Welcome! Let us know if you have any questions.";
}
else if (timeBetween < 1){
    displayMessage.textContent = "Back So Soon?";
}

else {
    let days = Math.round(timeBetween);
    if (days <= 1){
        displayMessage.textContent = `It has been ${days} day since your last visit`
    }
    else {
        displayMessage.textContent = `It has been ${days} days since your last visit`
    }
}

localStorage.setItem("visitStart", today);
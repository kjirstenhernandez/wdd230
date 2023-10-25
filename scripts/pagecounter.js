const visitDisplay = document.querySelector("#pageVisits");
let visitCount = Number(window.localStorage.getItem("visitCount")) || 0;

if (visitCount !== 0){
    visitDisplay.textContent = `Page Visits: ${visitCount}`
}

else{
    visitDisplay.textContent = "This is your first visit!"
}

visitCount++;

localStorage.setItem("visitCount", visitCount);
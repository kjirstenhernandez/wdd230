const url = "https://kjirstenhernandez.github.io/wdd230/chamber/data/directory.json"
let spotlightArray = [];
const spotlightLogo = document.querySelector("#spotlight-logo");

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    randomChoice(data.businesses);
}

const randomChoice = (businesses) => {
    businesses.forEach((business => {
        if (business.membership === "Silver" || business.membership === "Gold"){
            spotlightArray.push(business);
        }    
    }))
    console.log(spotlightArray);
    const randomChoice = spotlightArray[Math.floor(Math.random() * spotlightArray.length)];
    console.log(randomChoice);
    spotlightLogo.setAttribute("src", randomChoice.links[0].logo);
}

getBusinessData(url);
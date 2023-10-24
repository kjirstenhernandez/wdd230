const options = {year:'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options);
const todaysDate = new Date();

let lastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModif};`

function FadeIn() {
    document.querySelector(".photo") = 'animate';
}
let oLastModif = new Date(document.lastModified);
const modified = document.querySelector("#modified")

// const options = {year:'numeric'};
// const todaysDate = new Date();

let lastModif = new Date(document.lastModified);
modified.innerHTML = `Last Modified: ${lastModif};`
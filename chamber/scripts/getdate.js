const options = {year:'numeric'};
const todaysDate = new Date();

let lastModif = new Date(document.lastModified);
document.getElementById('timestamp').textContent = `Access Date: ${lastModif};`
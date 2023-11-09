const baseURL = "https://kjirstenhernandez.github.io/wdd230/";
const linksURL = "https://kjirstenhernandez.github.io/wdd230/data/links.json";

async function getLinks(baseURL){
    const response = await fetch(baseURL);
    const data = await response.json();
    console.table(data);
}

getLinks(baseURL);

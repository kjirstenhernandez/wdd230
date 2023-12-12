const url = "https://kjirstenhernandez.github.io/wdd230/final/data/prices.json"

// Reserved list locations
const metroReservedList = document.querySelector("#metroReservedList");
const dioReservedList = document.querySelector("#dioReservedList");
const pcxReservedList = document.querySelector("#pcxReservedList");
const pioneerReservedList = document.querySelector("#pioneerReservedList");
const jeep4ReservedList = document.querySelector("#jeep4ReservedList");
const jeep2ReservedList = document.querySelector("#jeep2ReservedList");

// Walk-In list locations
const metroWalkList = document.querySelector("#metroWalkList");
const dioWalkList = document.querySelector("#dioWalkList");
const pcxWalkList = document.querySelector("#pcxWalkList");
const pioneerWalkList = document.querySelector("#pioneerWalkList");
const jeep4WalkList = document.querySelector("#jeep4WalkList");
const jeep2WalkList = document.querySelector("#jeep2WalkList");

async function getPriceInformation(url){
    const response = await fetch(url);
    const data = await response.json();
    populateReservedPriceInfo(data);
    populateWalkPriceInfo(data);
}

const populateReservedPriceInfo = (rental) => {

    // Metro Info
    const metroHalf = document.createElement("li");
    metroHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[0].prices[0]["reserve-half"]}`;
    metroReservedList.appendChild(metroHalf);
    const metroWhole = document.createElement("li");
    metroWhole.innerHTML = `Whole Day: ${rental.rentals[0].prices[0]["reserve-whole"]}`;
    metroReservedList.appendChild(metroWhole);

    // Dio Info
    const dioHalf = document.createElement("li");
    dioHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[1].prices[0]["reserve-half"]}`;
    dioReservedList.appendChild(dioHalf);
    const dioWhole = document.createElement("li");
    dioWhole.innerHTML = `Whole Day: ${rental.rentals[1].prices[0]["reserve-whole"]}`;
    dioReservedList.appendChild(dioWhole);

    // PCX-150 Info
    const pcxHalf = document.createElement("li");
    pcxHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[2].prices[0]["reserve-half"]}`;
    pcxReservedList.appendChild(pcxHalf);
    const pcxWhole = document.createElement("li");
    pcxWhole.innerHTML = `Whole Day: ${rental.rentals[2].prices[0]["reserve-whole"]}`;
    pcxReservedList.appendChild(pcxWhole);

    // Pioneer Info
    const pioneerHalf = document.createElement("li");
    pioneerHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["reserve-half"]}`;
    pioneerReservedList.appendChild(pioneerHalf);
    const pioneerWhole = document.createElement("li");
    pioneerWhole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["reserve-whole"]}`;
    pioneerReservedList.appendChild(pioneerWhole);

    // Jeep 4-door Info
    const jeep4Half = document.createElement("li");
    jeep4Half.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["reserve-half"]}`;
    jeep4ReservedList.appendChild(jeep4Half);
    const jeep4Whole = document.createElement("li");
    jeep4Whole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["reserve-whole"]}`;
    jeep4ReservedList.appendChild(jeep4Whole);

    // Jeep 2-door Info
    const jeep2Half = document.createElement("li");
    jeep2Half.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["reserve-half"]}`;
    jeep2ReservedList.appendChild(jeep2Half);
    const jeep2Whole = document.createElement("li");
    jeep2Whole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["reserve-whole"]}`;
    jeep2ReservedList.appendChild(jeep2Whole);
}

const populateWalkPriceInfo = (rental) => {

    // Metro Info
    const metroHalf = document.createElement("li");
    metroHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[0].prices[0]["walk-half"]}`;
    metroWalkList.appendChild(metroHalf);
    const metroWhole = document.createElement("li");
    metroWhole.innerHTML = `Whole Day: ${rental.rentals[0].prices[0]["walk-whole"]}`;
    metroWalkList.appendChild(metroWhole);

    // Dio Info
    const dioHalf = document.createElement("li");
    dioHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[1].prices[0]["walk-half"]}`;
    dioWalkList.appendChild(dioHalf);
    const dioWhole = document.createElement("li");
    dioWhole.innerHTML = `Whole Day: ${rental.rentals[1].prices[0]["walk-whole"]}`;
    dioWalkList.appendChild(dioWhole);

    // PCX-150 Info
    const pcxHalf = document.createElement("li");
    pcxHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[2].prices[0]["walk-half"]}`;
    pcxWalkList.appendChild(pcxHalf);
    const pcxWhole = document.createElement("li");
    pcxWhole.innerHTML = `Whole Day: ${rental.rentals[2].prices[0]["walk-whole"]}`;
    pcxWalkList.appendChild(pcxWhole);

    // Pioneer Info
    const pioneerHalf = document.createElement("li");
    pioneerHalf.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["walk-half"]}`;
    pioneerWalkList.appendChild(pioneerHalf);
    const pioneerWhole = document.createElement("li");
    pioneerWhole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["walk-whole"]}`;
    pioneerWalkList.appendChild(pioneerWhole);

    // Jeep 4-door Info
    const jeep4Half = document.createElement("li");
    jeep4Half.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["walk-half"]}`;
    jeep4WalkList.appendChild(jeep4Half);
    const jeep4Whole = document.createElement("li");
    jeep4Whole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["walk-whole"]}`;
    jeep4WalkList.appendChild(jeep4Whole);

    // Jeep 2-door Info
    const jeep2Half = document.createElement("li");
    jeep2Half.innerHTML = `Half Day (3 Hours): ${rental.rentals[3].prices[0]["walk-half"]}`;
    jeep2WalkList.appendChild(jeep2Half);
    const jeep2Whole = document.createElement("li");
    jeep2Whole.innerHTML = `Whole Day: ${rental.rentals[3].prices[0]["walk-whole"]}`;
    jeep2WalkList.appendChild(jeep2Whole);
}

// Call the async functions
getPriceInformation(url);

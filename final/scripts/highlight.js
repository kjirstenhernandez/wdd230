const highlight = document.querySelector("#weather-highlight");
const closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", () => {
    highlight.style.display = "none";
})
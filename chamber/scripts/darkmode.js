const checkbox = document.querySelector("#checkbox");
const main = document.querySelector("main");

checkbox.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // if (this.checked) {
    //     console.log("checkbox is checked");
    // }
    // else {
    //     console.log("Checkbox is not checked");
    // }
});
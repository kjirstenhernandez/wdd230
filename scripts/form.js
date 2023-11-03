const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const submit = document.querySelector(".submitButton");

const error = document.querySelector("#error");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        error.textContent = "Passwords do not match!";
        error.style.display = "block";
        pass2.value = "";
        pass1.focus();
    }
    else {
        error.style.display = "none";
    }
}
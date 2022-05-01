import './style.css'

//SELECTORS INPUT-FIELDS
const emailField = document.querySelector("#email") as HTMLInputElement
const zipCodeField = document.querySelector("#zip-code") as HTMLInputElement
const passwordField = document.querySelector("#password") as HTMLInputElement
const passwordValidationField = document.querySelector("#password-validation") as HTMLInputElement

//SELECTORS ERROR-SPANS
const emailErrorSpan = document.querySelector(".error-email")
const zipErrorSpan = document.querySelector(".error-zip-code")
const paswordErrorSpan = document.querySelector(".error-password")
const passwordValidationErrorSpan = document.querySelector(".error-password-validation")

//EVENT LISTENER
emailField.addEventListener("input", () => {
    if (emailField.validity.valid) {
        emailErrorSpan!.textContent = "";
    } else {
        showEmailError()
    }
})





//FUNCTIONS

function showEmailError() {
    if (emailField.validity.valueMissing) {
        emailErrorSpan!.textContent="Please enter an e-mail.";
    }
    else if (emailField.validity.typeMismatch) {
        emailErrorSpan!.textContent="Please enter a valid e-mail format.";
    }
}
import './style.css'
const form = document.querySelector("form")
form?.addEventListener("submit", (event) => {
    if (!emailField.validity.valid || !zipCodeField.validity.valid || !passwordField.validity.valid || !passwordValidationField.validity.valid) {
        event.preventDefault();
    } else {
        alert("High five")
    }
})


//SELECTORS INPUT-FIELDS
const emailField = document.querySelector("#email") as HTMLInputElement
const zipCodeField = document.querySelector("#zip-code") as HTMLInputElement
const passwordField = document.querySelector("#password") as HTMLInputElement
const passwordValidationField = document.querySelector("#password-validation") as HTMLInputElement

//SELECTORS ERROR-SPANS
const emailErrorSpan = document.querySelector(".error-email")
const zipErrorSpan = document.querySelector(".error-zip-code")
const passwordErrorSpan = document.querySelector(".error-password")
const passwordValidationErrorSpan = document.querySelector(".error-password-validation")

//EVENT LISTENER
emailField.addEventListener("input", () => {
    if (emailField.validity.valid) {
        emailErrorSpan!.textContent = "";
        emailErrorSpan!.className="error"
        emailField.className=""
    } else {
        showEmailError()
    }
})

zipCodeField.addEventListener("input", () => {
    const correctZipCode = /[0-9]{5}/
    const validZipCode = correctZipCode.exec(zipCodeField.value)
    if (validZipCode) {
        zipErrorSpan!.textContent = "";
        zipErrorSpan!.className="error"
        zipCodeField.className=""
    } else {
        showZipCodeError()
    }
})

passwordField.addEventListener("input", () => {
    const passwordFormat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    const validPassword = passwordFormat.exec(passwordField.value)
    if (validPassword) {
        passwordErrorSpan!.textContent = "";
        passwordErrorSpan!.className="error"
        passwordField.className=""
    } else {
        showPasswordError()
    }
})

passwordValidationField.addEventListener("input",() => {
    if (passwordValidationField.value === passwordField.value) {
        passwordValidationErrorSpan!.textContent = "";
        passwordValidationErrorSpan!.className="error"
        passwordValidationField.className=""
    } else {
        showPasswordValidationError()
    }
})

//FUNCTIONS

function showEmailError() {
    if (emailField.validity.valueMissing) {
        emailErrorSpan!.textContent = "Please enter an e-mail.";
    } else if (emailField.validity.typeMismatch) {
        emailErrorSpan!.textContent = "Please enter a valid e-mail format.";
    }
    emailErrorSpan!.className="error active"
    emailField.className="active"
}

function showZipCodeError() {
    const correctZipCode = /[0-9]{5}/
    const validZipCode = correctZipCode.exec(zipCodeField.value)

    if (zipCodeField.validity.valueMissing) {
        zipErrorSpan!.textContent = "Please enter a Zip Code."

    } else if (!validZipCode) {
        zipErrorSpan!.textContent = "Please enter a valid zip code."
    }
    zipErrorSpan!.className="error active"
    zipCodeField.className="active"
}

function showPasswordError() {
    const passwordFormat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    const validPassword = passwordFormat.exec(passwordField.value)
    if (passwordField.validity.valueMissing) {
        passwordErrorSpan!.textContent="Please enter a password."
    } else if (!validPassword) {
        passwordErrorSpan!.textContent="Should include at least 8 characters, a lowercase & uppercase character, a number & a special character."
    }
    passwordErrorSpan!.className="error active"
    passwordField.className="active"
}

function showPasswordValidationError() {
    if (passwordValidationField.validity.valueMissing) {
        passwordValidationErrorSpan!.textContent="Please repeat the password above."
    } else if (passwordValidationField.value !== passwordField.value) {
        passwordValidationErrorSpan!.textContent="This password does not match the password above."
    }
    passwordValidationErrorSpan!.className="error active"
    passwordValidationField.className="active"

}
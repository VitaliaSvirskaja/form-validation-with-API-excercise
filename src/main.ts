import './style.css'

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
    } else {
        showEmailError()
    }
})

zipCodeField.addEventListener("input", () => {
    const correctZipCode = /[0-9]{5}/
    const validZipCode = correctZipCode.exec(zipCodeField.value)
    if (validZipCode) {
        zipErrorSpan!.textContent = "";
    } else {
        showZipCodeError()
    }
})

passwordField.addEventListener("input", () => {
    const passwordFormat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    const validPassword = passwordFormat.exec(passwordField.value)
    if (validPassword) {
        passwordErrorSpan!.textContent = "";
    } else {
        showPasswordError()
    }
})

passwordValidationField.addEventListener("input",() => {
    if (passwordValidationField.value === passwordField.value) {
        passwordValidationErrorSpan!.textContent = "";
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
}

function showZipCodeError() {
    const correctZipCode = /[0-9]{5}/
    const validZipCode = correctZipCode.exec(zipCodeField.value)

    if (zipCodeField.validity.valueMissing) {
        zipErrorSpan!.textContent = "Please enter a Zip Code."
    } else if (!validZipCode) {
        zipErrorSpan!.textContent = "Please enter a valid zip code."
    }
}

function showPasswordError() {
    const passwordFormat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    const validPassword = passwordFormat.exec(passwordField.value)
    if (passwordField.validity.valueMissing) {
        passwordErrorSpan!.textContent="Please enter a password."
    } else if (!validPassword) {
        passwordErrorSpan!.textContent="Should include at least 8 characters, a lowercase & uppercase character, a number & a special character."
    }
}

function showPasswordValidationError() {
    if (passwordValidationField.validity.valueMissing) {
        passwordValidationErrorSpan!.textContent="Please repeat the password above."
    } else if (passwordValidationField.value !== passwordField.value) {
        passwordValidationErrorSpan!.textContent="This password does not match the password above."
    }
}
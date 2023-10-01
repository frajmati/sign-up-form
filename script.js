// #AEFFAA = GREEN
// rgb(221, 101, 101) = RED

let nameValidation = false, surnameValidation = false, mailValidation = false, numValidation = false, passwordValidation = false, confirmPasswordValidation = false;

// SCRIPT PARA QUE LOS INPUTS DE TEXT EMPIECEN CON MAYÚSCULA INICIAL Y SE PONGAN VERDES

let inputNombre = document.querySelector(".input__first__name");
let inputApellido = document.querySelector(".input__last__name");

function convertirPrimeraLetra(nombreClase) {   

    nombreInput = document.querySelector(nombreClase);

    if (nombreInput.value.length > 0) {
        let textoConvertido = nombreInput.value.charAt(0).toUpperCase() + nombreInput.value.slice(1).toLowerCase();

        nombreInput.value = textoConvertido;
    }
}

inputNombre.addEventListener("input", () => {
    convertirPrimeraLetra(".input__first__name");
    if (inputNombre.value == "") {
        inputNombre.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        nameValidation = false;
        checkbtnCreateAccount();
    }
    else {
        inputNombre.style.cssText = "outline: 1px solid #AEFFAA";
        nameValidation = true;
        checkbtnCreateAccount();
    }
});

inputApellido.addEventListener("input", () => {
    convertirPrimeraLetra(".input__last__name");
    if (inputApellido.value == "") {
        inputApellido.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        surnameValidation = false;
        checkbtnCreateAccount();
    }
    else {
        inputApellido.style.cssText = "outline: 1px solid #AEFFAA";
        surnameValidation = true;
        checkbtnCreateAccount();
    }
});



// SCRIPT PARA QUE EL BOTÓN DE CREATE ACCOUNT VERIFIQUE SI LAS CONTRASEÑAS SON IGUALES

const btnCreateAccount = document.querySelector(".btn__submit");

btnCreateAccount.style.backgroundColor = "rgb(221, 101, 101)";

function checkbtnCreateAccount() {
    if (nameValidation && surnameValidation && mailValidation && numValidation && infoValidation.innerText == "* Passwords match") {
            
        btnCreateAccount.style.backgroundColor = "#2F89FF";
        btnCreateAccount.removeAttribute("disabled");
    }
    else {
        btnCreateAccount.style.backgroundColor = "rgb(221, 101, 101)";
    }
}





//SCRIPT PARA EL NÚMERO DE CELULAR

const phoneInput = document.querySelector(".input__number");


phoneInput.addEventListener("input", () => {
    var phoneNumber = phoneInput.value.replace(/\D/g, '');

    // Añade espacios en el tercer y sexto dígito si es necesario
    if (phoneNumber.length >= 3) {
        phoneNumber = phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3);
    }
    if (phoneNumber.length >= 7) {
        phoneNumber = phoneNumber.substring(0, 7) + ' ' + phoneNumber.substring(7);
    }

    // Limita la longitud máxima del número de teléfono a 11 caracteres
    if (phoneNumber.length > 12) {
        phoneNumber = phoneNumber.substring(0, 12);
    }

    // Actualiza el valor del input con el número formateado
    phoneInput.value = phoneNumber;
})


//SCRIPT PARA CAMBIAR EL ESTILO DE LOS INPUTS


const passwordInput = document.querySelector(".input__password");
const confirmPasswordInput = document.querySelector(".input__confirm__password");
const infoValidation = document.querySelector(".info__validation");


passwordInput.addEventListener("input", () => {

    if (passwordInput.value == "") {
        passwordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        confirmPasswordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        infoValidation.style.color = "rgb(221, 101, 101)";
        infoValidation.innerText = "* Type a password";
        checkbtnCreateAccount();
    }
    else if (passwordInput.value != confirmPasswordInput.value) {
        passwordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        confirmPasswordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        infoValidation.style.color = "rgb(221, 101, 101)";
        infoValidation.innerText = "* Passwords do not match";
        checkbtnCreateAccount();
    }
    else if (passwordInput.value == confirmPasswordInput.value) {
        passwordInput.style.cssText = "outline: 1px solid #AEFFAA";
        confirmPasswordInput.style.cssText = "outline: 1px solid #AEFFAA";
        infoValidation.style.color = "#AEFFAA";
        infoValidation.innerText = "* Passwords match";
        checkbtnCreateAccount();
    }
})

confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value == "") {
        passwordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        confirmPasswordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        infoValidation.style.color = "rgb(221, 101, 101)";
        infoValidation.innerText = "* Type a password";
        checkbtnCreateAccount();
    }
    else if (passwordInput.value != confirmPasswordInput.value) {
        passwordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        confirmPasswordInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        infoValidation.style.color = "rgb(221, 101, 101)";
        infoValidation.innerText = "* Passwords do not match";
        checkbtnCreateAccount();
    }
    else if (passwordInput.value == confirmPasswordInput.value) {
        passwordInput.style.cssText = "outline: 1px solid #AEFFAA";
        confirmPasswordInput.style.cssText = "outline: 1px solid #AEFFAA";
        infoValidation.style.color = "#AEFFAA";
        infoValidation.innerText = "* Passwords match";
        checkbtnCreateAccount();
    }
})

const emailInput = document.querySelector(".input__email");

emailInput.addEventListener("input", () => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expresión regular para validar el correo electrónico
            
    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        mailValidation = false;
        checkbtnCreateAccount();
    }
    else {
        emailInput.style.cssText = "outline: 1px solid #AEFFAA";
        mailValidation = true;
        checkbtnCreateAccount();
    }
})
    

       
var phonePattern = /^261\s\d{3}\s\d{4}$/; // Expresión regular para el formato 261xxxxxxxx
        
var inputValue = phoneInput.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos

phoneInput.addEventListener("input", () => {
    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.style.cssText = "outline: 1px solid rgb(221, 101, 101)";
        numValidation = false;
        checkbtnCreateAccount();
    }
    else {
        phoneInput.style.cssText = "outline: 1px solid #AEFFAA";
        numValidation = true;
        checkbtnCreateAccount();
    }
})


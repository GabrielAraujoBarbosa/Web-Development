/* Default Login */
let defaultUser = "admin";
let defaultPassword = 1234;

/* DOM Elements */
const errorIcon = document.getElementById('errorIcon');
const sucessIcon = document.getElementById('sucessIcon');
const form = document.querySelector('form');
let inputUser = document.getElementById('textBox')
let inputPassword = document.getElementById('passwordBox');

/* Event Listeners (form)*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let typedUser = inputUser.value;
    let typedPassword = inputPassword.value;
    
    const loginResponse = document.getElementById('statusLogin');
    
    if (typedUser == defaultUser && typedPassword == defaultPassword) {
        errorIcon.classList.add('hideElement');
        sucessIcon.classList.remove('hideElement');
        loginResponse.innerHTML = "Você fez login com sucesso! Seja bem-vindo, <b>administrador</b>.";
    }
    else {
        sucessIcon.classList.add('hideElement');
        errorIcon.classList.remove('hideElement');
        loginResponse.textContent = "As informações de login que você inseriu estão incorretas."
    }
});
form.addEventListener('reset', (event) => {
    event.preventDefault();

    errorIcon.classList.add('hideElement');
    sucessIcon.classList.add('hideElement');
    const loginResponse = document.getElementById('statusLogin');
    loginResponse.textContent = "";
    inputUser.value = "";
    inputPassword.value = "";
});



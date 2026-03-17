let defaultUser = "admin";
let defaultPassword = 1234;

const errorIcon = document.getElementById('errorIcon');
const sucessIcon = document.getElementById('sucessIcon');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    let typedUser = document.getElementById('textBox').value;
    let typedPassword = document.getElementById('passwordBox').value;
    
    const loginResponse = document.getElementById('statusLogin');
    
    if (typedUser == defaultUser && typedPassword == defaultPassword) {
        errorIcon.classList.add('hideElement');
        sucessIcon.classList.remove('hideElement');
        loginResponse.textContent = "Você fez login com sucesso! Seja bem-vindo, admin.";
    }
    else {
        sucessIcon.classList.add('hideElement');
        errorIcon.classList.remove('hideElement');
        loginResponse.textContent = "As informações de login que você inseriu estão incorretas."
    }
});
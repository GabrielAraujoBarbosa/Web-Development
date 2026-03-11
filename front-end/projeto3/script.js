const button = document.querySelector('button');
const body = document.querySelector('body');
const jsText = document.querySelector('.js-light');

button.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');

    button.classList.toggle('button-light');
    button.classList.toggle('button-dark');

    jsText.classList.toggle('js-light');
    jsText.classList.toggle('js-dark');
});

const button = document.querySelector('#test');
button.addEventListener('click', event => {
    button.classList.toggle('active');
});
const button = document.querySelector('#test');
const avatar = document.querySelector('#avatar');

button.addEventListener('click', event => {
    button.disabled = true;
    fetch('/api/user')
    .then(response => response.json())
    .then(data => loadUser(data));
});

function loadUser(config) {
    avatar.src = config.avatar;
    avatar.alt = config.username;
    avatar.title = config.username;
}
function validatePassword() {
    const password = document.getElementById('password').value;
    const password_verify = document.getElementById('password_verify').value;
    if (password !== password_verify) {
        alert('Las contraseñas no coinciden');
    }
}
function save() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_verify = document.getElementById('password_verify').value;

    const user = {
        email: email,
        username: username,
        password: password,
        password_verify: password_verify
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Se ha registrado exitosamente');
    window.location = 'index.html';
}
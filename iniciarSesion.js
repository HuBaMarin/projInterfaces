/*comprobar la contraseña y el usuario al iniciar sesion*/
function comprobarContrasenia(username, password) {
    const users = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}
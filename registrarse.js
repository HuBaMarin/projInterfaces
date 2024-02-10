function save() {
    const email = document.getElementById('correo').value;
    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contrasenia').value;
    const verificar_password = document.getElementById('verificar_password').value;



    let id = Math.random().toString(36).substring(2, 15);


    const usuario = {
        correo: email,
        nombre: username,
        password: password,
        verificar_password: verificar_password
    };



    document.getElementById('Registrarse').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!/^(?=[a-zA-Z0-9]+$)[a-zA-Z0-9]+$/.test(usuario.nombre)) {
            document.getElementById('error1').innerHTML = "El nombre solo puede contener letras y números";
        }else if (!/^(?=.*[a-zA-Z\d!#()%?])[a-zA-Z0-9!#()%?]{8,20}$/.test(usuario.password)) {
            document.getElementById('error2').innerHTML = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un caracter especial de aquí !#()%? ";
        }
        else if (usuario.password !== usuario.verificar_password) {
            document.getElementById('error3').innerHTML = "Las contraseñas no coinciden";
        } else {
            localStorage.setItem(id, JSON.stringify(usuario));
            alert("Usuario registrado exitosamente!");
            window.location.href = 'index.html';

        }
    });



}


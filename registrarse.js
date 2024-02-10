function save() {
    const email = document.getElementById('correo').value;
    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contrasenia').value;
    const verificar_password = document.getElementById('verificar_password').value;


    const usuario = {
        id: 0,
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
            usuario.id++;
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alert("Usuario registrado exitosamente!");
            window.location.href = 'index.html';
        }
    });



}


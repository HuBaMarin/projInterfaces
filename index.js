setInterval(function () {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString() + "<br>" + d.toLocaleTimeString();
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.body.classList.add('fade-in');
    }, 500);
});


function comprobarUsuario() {
    return localStorage.getItem('visitadoLogin');
}

function updateUI() {

    if (comprobarUsuario()) {

        //si vengo de la página de iniciarSesion, esconder el boton de iniciarSesion


        //recoger login de localStorage y esconder los elementos register y login
        let nombre = JSON.parse(localStorage.getItem('usuario')).nombre;
        const loginButton = document.querySelector('a[href="iniciarSesion.html"]');
        const registerButton = document.querySelector('a[href="registrarse.html"]');

        loginButton.style.display = 'none';
        registerButton.style.display = 'none';

        //recoger un texto de index y poner el nombre
        let texto = document.querySelector("h1");

        texto.textContent = "¡Bienvenido/a a la Tienda de Bicicletas " + nombre + " ! 🚴‍♂️🚴‍♀️";
        // mostrar una imagen y poner la funcion de cerrar sesión debajo

        //recoger un elemento del index del nav y poner la imagen
        let ponerImagen =
            `<div>
                  <img src="imagen_usuario.jpg" class="dropbtn"  alt="imagen"/>
                  <li id="desplegable">
                    <a href="#">Cerrar Sesión</a>
                  </li>
                </div>`;

        let nav = document.querySelector(".indexNav");

        nav.innerHTML += ponerImagen;

        let desplegable = document.getElementById("desplegable");
        desplegable.style.display = "block";


        //cerrar sesion
        desplegable.addEventListener("click", function () {
            desplegable.style.display = "none";
            loginButton.style.display = 'block';
            registerButton.style.display = 'block';
            localStorage.removeItem('visitadoLogin');
            location.reload();
        });


    }
}

$(document).ready(function () {
    $('.indexNav > a').click(function () {
        $(this).animate({backgroundColor: '#ffffff'}, 200);
    });
});

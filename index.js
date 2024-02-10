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
    return !!JSON.parse(localStorage.getItem('usuario')).id;
}

function updateUI() {

    if (comprobarUsuario()) {
        //recoger login de localStorage y esconder los elementos register y login
        let nombre = JSON.parse(localStorage.getItem('usuario')).nombre;
        const loginButton = document.querySelector('a[href="iniciarSesion.html"]');
        const registerButton = document.querySelector('a[href="registrarse.html"]');

        loginButton.style.display = 'none';
        registerButton.style.display = 'none';


        //recoger un texto de index y poner el nombre
        let texto = document.querySelector("h1");

        texto.textContent = "¡Bienvenido/a a la Tienda de Bicicletas " +nombre+" ! 🚴‍♂️🚴‍♀️";
        // mostrar una imagen y poner la funcion de cerrar sesión debajo


        //recoger un elemento del index y poner la imagen
        let ponerImagen =
            `<div class="dropdown">
          <img src="bruhhh.jpg" class="dropbtn" onclick="toggleDropdown()"  alt="imagen"/>
          <div id="myDropdown">
            <a href="#">Cerrar Sesión</a>
          </div>
        </div>`;


    }
}

$(document).ready(function () {
    $('.indexNav > a').click(function () {
        $(this).animate({backgroundColor: '#ffffff'}, 200);
    });
});

/*comprobar la contraseña y el usuario al iniciar sesion*/
function comprobarContrasenia() {
    const users = JSON.parse(localStorage.getItem('usuario'));
    //para saber si ya he visitado la pagina
    localStorage.setItem('visitadoLogin', 'true');
    document.getElementById("iniciarSesion").addEventListener("submit", (e) => {
        e.preventDefault();
        const nom = document.querySelector("#nombre").value;
        const pass = document.querySelector("#password").value;



        //comprobar usuario y contraseña
        if (users.nombre !== nom && users.password !== pass) {
            document.querySelector(".error1").innerHTML = "usuario incorrecto";

            document.querySelector(".error2").innerHTML = "contraseña incorrecta";
        }

        if (users.nombre !== nom) {
            document.querySelector(".error1").innerHTML = "usuario incorrecto";
        } else if (users.password !== pass) {
            document.querySelector(".error2").innerHTML = "contraseña incorrecta";
        } else {
            document.querySelector(".error1").innerHTML = "";
            document.querySelector(".error2").innerHTML = "";

            window.location.href = "index.html";
        }
    });

}
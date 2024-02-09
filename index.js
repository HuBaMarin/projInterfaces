setInterval(function() {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString()+"<br>"+d.toLocaleTimeString();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.add('fade-in');
    },  500);
  });


function comprobarUsuario() {
    return localStorage.getItem('nombre') === 'true';
}

function updateUI() {
    if (comprobarUsuario()) {
        // Replace login button with image
        const loginButton = document.getElementById('login_button');
        loginButton.outerHTML = '<img src="pato.jpg" alt="Logged In">';

        // Replace register button with dropdown menu
        const registerButton = document.getElementById('register_button');
        registerButton.outerHTML = `
      <div class="dropdown">
        <button class="dropbtn">Desplegar</button>
        <div class="dropdown-content">
          <a href="#">Perfil</a>
          <a href="index.html">Logout</a>
        </div>
      </div>
    `;
    }
}


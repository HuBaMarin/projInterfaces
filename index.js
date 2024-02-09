setInterval(function() {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString()+"<br>"+d.toLocaleTimeString();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.add('fade-in');
    },  500);
  });
setInterval(function() {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString()+"<br>"+d.toLocaleTimeString();
}, 1000);

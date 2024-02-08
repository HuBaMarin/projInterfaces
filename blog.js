$(function() {
    $(".blog1").hover(function () {
        alert("Youtube. (2022, 8 de mayo). Cómo usar los cambios de la bicicleta correctamente. Curso de conducción de bicicleta #7 [Archivo de video]. Youtube. [https://www.youtube-nocookie.com/embed/P9o2plZjTHs?si=WgV-4Z3wWbmD7Cuu].")
    });

    $(".blog2").hover(function () {
        alert("Youtube. (2022, 8 de mayo). Consejos básicos para disfrutar del mtb desde el primer día | Nivel básico [Archivo de video]. Youtube. [https://www.youtube-nocookie.com/embed/r86bXwPOaHY?si=j3l5_3hbhLHNVMYs].")
    });
});

setInterval(function() {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString()+"<br>"+d.toLocaleTimeString();
}, 1000);

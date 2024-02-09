$(function () {
   

    $(".blog1").hover(
        function () {
            $(".mitexto").show();
        }, function () {
            $(".mitexto").hide();
        }
    );

    $(".blog2").hover(
        function () {
            $(".mitexto2").show();
        }, function () {
            $(".mitexto2").hide();
        }
    );

});

setInterval(function () {
    const d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString() + "<br>" + d.toLocaleTimeString();
}, 1000);

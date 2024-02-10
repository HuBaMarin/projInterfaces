$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    var formData = $(this).serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});


    let timestamp = new Date().toLocaleDateString();
    let hora = new Date().toLocaleTimeString();
    let localStorageKey = '//fecha' + timestamp+"//hora"+hora;

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const link = document.getElementById('transicionAlIndex');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.add('fade-out');

    setTimeout(function () {
      window.location.href = link.href;
    }, 50);
  });
});

$('nav a').click(function() {
  $(this).animate({backgroundColor: '#ffffff'},  500);
});

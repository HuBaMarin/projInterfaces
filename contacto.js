$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    var formData = $(this).serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});


    var timestamp = new Date().getTime();
    var localStorageKey = 'contacto_' + timestamp;


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
    }, 500);
  });
});
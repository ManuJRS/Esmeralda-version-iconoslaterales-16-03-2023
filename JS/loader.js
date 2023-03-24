window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    
    setTimeout(function() {
      alert("¡Hey!, debes ser MAYOR de edad para entrar a la página 😎🍻");
    }, 1000);
  };

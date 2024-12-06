$(document).ready(function (e) {

  // // Verifica si la URL contiene el parámetro 'animate=true'
  const urlParams = new URLSearchParams(window.location.search);
  const animate = urlParams.get('animate');
  const animate1 = urlParams.get('animate1');
  const animate2 = urlParams.get('animate2');
  const animate3 = urlParams.get('animate3');
  // animate = $("#tipo_animacion").val();
  if (animate === 'true') {
    document.body.style.overflow = 'hidden';
    // Si el parámetro 'animate=true' está presente, añade la clase 'active' a #image1
    $("#image1").addClass('zoom');
    setTimeout(function () {
      $("#image1").addClass('close');
    }, 500); // Total 3 segundos después de cargar la página
    setTimeout(function () {
      $("#image1").removeClass('close');
      $("#image1").removeClass('zoom');
    }, 3000);
    setTimeout(function () {
      // Modifica la URL sin recargar la página
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      document.body.style.overflow = '';
    }, 3500);
  }
  if (animate1 === 'true') {
    // Si el parámetro 'animate=true' está presente, añade la clase 'active' a #image1
    document.body.style.overflow = 'hidden';
    $("#image2").addClass('zoom');
    setTimeout(function () {
      $("#image2").addClass('close1');
    }, 500); // Total 3 segundos después de cargar la página
    setTimeout(function () {
      $("#image2").removeClass('close1');
      $("#image2").removeClass('zoom');
    }, 3000);
    setTimeout(function () {
      // Modifica la URL sin recargar la página
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      document.body.style.overflow = '';
    }, 3500);
  }
  if (animate2 === 'true') {
    // Si el parámetro 'animate=true' está presente, añade la clase 'active' a #image1
    document.body.style.overflow = 'hidden';
    $("#image3").addClass('zoom');
    setTimeout(function () {
      $("#image3").addClass('close2');
    }, 500); // Total 3 segundos después de cargar la página
    setTimeout(function () {
      $("#image3").removeClass('close2');
      $("#image3").removeClass('zoom');
    }, 3000);
    setTimeout(function () {
      // Modifica la URL sin recargar la página
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      document.body.style.overflow = '';
    }, 3500);
  }
  if (animate3 === 'true') {
    // Si el parámetro 'animate=true' está presente, añade la clase 'active' a #image1
    document.body.style.overflow = 'hidden';
    $("#image4").addClass('zoom');
    setTimeout(function () {
      $("#image4").addClass('close3');
    }, 500); // Total 3 segundos después de cargar la página
    setTimeout(function () {
      $("#image4").removeClass('close3');
      $("#image4").removeClass('zoom');
    }, 3000);
    setTimeout(function () {
      // Modifica la URL sin recargar la página
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      document.body.style.overflow = '';
    }, 3500);
  }
  // else if(animate == '2'){
  //   $("#image2").addClass('zoom');
  //   setTimeout(function() {
  //    $("#image2").addClass('close');
  //   }, 500); // Total 3 segundos después de cargar la página
  //   setTimeout(function() {
  //    $("#image2").removeClass('close');
  //    $("#image2").removeClass('zoom');
  //   }, 3000);
  // }

  

  $("body").on("click", "#analisisNecesidad", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');

    $(".flipper").html('<img id="collage">');
    rotarImagenes3();
    $("#desarrolloSoftware").removeClass('open');
    $("#PuestaMarcha").removeClass('open');
    $("#mantenimiento").removeClass('open');

    $("#desarrolloSoftware").removeClass('cerrar');
    $("#PuestaMarcha").removeClass('cerrar');
    $("#mantenimiento").removeClass('cerrar');

    $("#desarrolloSoftware").addClass('abrir');
    $("#PuestaMarcha").addClass('abrir');
    $("#mantenimiento").addClass('abrir');

    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });

  $("body").on("click", "#analisisNecesidad2", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');

    $("#flipper2").html('<img id="collage2">');
    rotarImagenes7();
    $("#desarrolloSoftware2").removeClass('open');
    $("#PuestaMarcha2").removeClass('open');
    $("#mantenimiento2").removeClass('open');

    $("#desarrolloSoftware2").removeClass('cerrar');
    $("#PuestaMarcha2").removeClass('cerrar');
    $("#mantenimiento2").removeClass('cerrar');

    $("#desarrolloSoftware2").addClass('abrir');
    $("#PuestaMarcha2").addClass('abrir');
    $("#mantenimiento2").addClass('abrir');

    $("#flipper3").html('');
    $("#flipper4").html('');
    $("#flipper5").html('');
   
    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });


  $("body").on("click", "#desarrolloSoftware", function (e) {
    e.preventDefault();
    $(".flipper").html('<img id="collage">');
    rotarImagenes1();
    $(this).toggleClass('open');

    $("#analisisNecesidad").removeClass('open');
    $("#PuestaMarcha").removeClass('open');
    $("#mantenimiento").removeClass('open');

    $("#analisisNecesidad").removeClass('cerrar');
    $("#PuestaMarcha").removeClass('cerrar');
    $("#mantenimiento").removeClass('cerrar');

    $("#analisisNecesidad").addClass('abrir');
    $("#PuestaMarcha").addClass('abrir');
    $("#mantenimiento").addClass('abrir');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });

  $("body").on("click", "#desarrolloSoftware2", function (e) {
    e.preventDefault();
    $("#flipper3").html('<img id="collage3">');
    rotarImagenes8();
    $(this).toggleClass('open');

    $("#analisisNecesidad2").removeClass('open');
    $("#PuestaMarcha2").removeClass('open');
    $("#mantenimiento2").removeClass('open');

    $("#analisisNecesidad2").removeClass('cerrar');
    $("#PuestaMarcha2").removeClass('cerrar');
    $("#mantenimiento2").removeClass('cerrar');

    $("#analisisNecesidad2").addClass('abrir');
    $("#PuestaMarcha2").addClass('abrir');
    $("#mantenimiento2").addClass('abrir');
    
    $("#flipper2").html('');
    $("#flipper4").html('');
    $("#flipper5").html('');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });

  $("body").on("click", "#PuestaMarcha", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(".flipper").html('<img id="collage">');
    rotarImagenes2();

    $("#analisisNecesidad").removeClass('open');
    $("#desarrolloSoftware").removeClass('open');
    $("#mantenimiento").removeClass('open');

    $("#analisisNecesidad").removeClass('cerrar');
    $("#desarrolloSoftware").removeClass('cerrar');
    $("#mantenimiento").removeClass('cerrar');

    $("#analisisNecesidad").addClass('abrir');
    $("#desarrolloSoftware").addClass('abrir');
    $("#mantenimiento").addClass('abrir');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });

  $("body").on("click", "#PuestaMarcha2", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $("#flipper4").html('<img id="collage4">');
    rotarImagenes9();

    $("#analisisNecesidad2").removeClass('open');
    $("#desarrolloSoftware2").removeClass('open');
    $("#mantenimiento").removeClass('open');

    $("#analisisNecesidad2").removeClass('cerrar');
    $("#desarrolloSoftware2").removeClass('cerrar');
    $("#mantenimiento2").removeClass('cerrar');

    $("#analisisNecesidad2").addClass('abrir');
    $("#desarrolloSoftware2").addClass('abrir');
    $("#mantenimiento2").addClass('abrir');
    
    $("#flipper2").html('');
    $("#flipper3").html('');
    $("#flipper5").html('');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus4").removeClass('no_mostrar');
    $(".plus4").addClass('mostrar');

    $(".minus4").removeClass('mostrar');
    $(".minus4").addClass('no_mostrar');
  });


  $("body").on("click", "#mantenimiento", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(".flipper").html('<img id="collage">');
    rotarImagenes6();
    $("#analisisNecesidad").removeClass('open');
    $("#desarrolloSoftware").removeClass('open');
    $("#PuestaMarcha").removeClass('open');

    $("#analisisNecesidad").removeClass('cerrar');
    $("#desarrolloSoftware").removeClass('cerrar');
    $("#PuestaMarcha").removeClass('cerrar');

    $("#analisisNecesidad").addClass('abrir');
    $("#desarrolloSoftware").addClass('abrir');
    $("#PuestaMarcha").addClass('abrir');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');
  });

  $("body").on("click", "#mantenimiento2", function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $("#flipper5").html('<img id="collage5">');
    rotarImagenes10();
    $("#analisisNecesidad2").removeClass('open');
    $("#desarrolloSoftware2").removeClass('open');
    $("#PuestaMarcha2").removeClass('open');

    $("#analisisNecesidad2").removeClass('cerrar');
    $("#desarrolloSoftware2").removeClass('cerrar');
    $("#PuestaMarcha2").removeClass('cerrar');

    $("#analisisNecesidad2").addClass('abrir');
    $("#desarrolloSoftware2").addClass('abrir');
    $("#PuestaMarcha2").addClass('abrir');

    $("#flipper2").html('');
    $("#flipper3").html('');
    $("#flipper4").html('');

    $(".plus1").removeClass('no_mostrar');
    $(".plus1").addClass('mostrar');

    $(".minus1").removeClass('mostrar');
    $(".minus1").addClass('no_mostrar');

    $(".plus2").removeClass('no_mostrar');
    $(".plus2").addClass('mostrar');

    $(".minus2").removeClass('mostrar');
    $(".minus2").addClass('no_mostrar');

    $(".plus3").removeClass('no_mostrar');
    $(".plus3").addClass('mostrar');

    $(".minus3").removeClass('mostrar');
    $(".minus3").addClass('no_mostrar');
  });

  $("body").on("click", ".abrir", function (e) {
    e.preventDefault();
    num = $(this).attr('data-num');
    $(this).removeClass('abrir');
    $(this).addClass('cerrar');


    $(".plus" + num).removeClass('mostrar');
    $(".plus" + num).addClass('no_mostrar');

    $(".minus" + num).removeClass('no_mostrar');
    $(".minus" + num).addClass('mostrar');
  });

  $("body").on("click", ".cerrar", function (e) {
    e.preventDefault();
    num = $(this).attr('data-num');
    $(this).removeClass('cerrar');
    $(this).addClass('abrir');
    $(".flipper").html('');
    $("#flipper2").html('');
    $("#flipper3").html('');
    $("#flipper4").html('');
    $("#flipper5").html('');
    // rotarImagenes5();
    $(".minus" + num).removeClass('mostrar');
    $(".minus" + num).addClass('no_mostrar');


    $(".plus" + num).removeClass('no_mostrar');
    $(".plus" + num).addClass('mostrar');
  });

  $("body").on("click", "#image1", function (e) {
    e.preventDefault();
    // console.log('hola');
    const image = document.getElementById('image1');
    if (image.classList.contains('active')) {
      // Espera un momento antes de eliminar la clase para asegurar que la transición se vea bien
      image.classList.remove('active');
    } else {
      // Si la imagen no está activa, agrega la clase active para hacer zoom
      image.classList.add('active');
    }
    // setTimeout(window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/desarrollo.html', 15000);
    setTimeout(function () {
      window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/desarrollo.html';
    }, 1500);
    // $("#image1").addClass('active');
  });

  $("body").on("click", "#image2", function (e) {
    e.preventDefault();
    const image = document.getElementById('image2');
    if (image.classList.contains('active')) {
      // Espera un momento antes de eliminar la clase para asegurar que la transición se vea bien
      image.classList.remove('active');
      // image.classList.add('vibra');
    } else {
      // Si la imagen no está activa, agrega la clase active para hacer zoom
      image.classList.add('active');
      // image.classList.remove('vibra');
    }
    // setTimeout(window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/diseno.html', 15000);
    setTimeout(function () {
      window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/diseno.html';
    }, 1500);
  });

  $("body").on("click", "#image3", function (e) {
    e.preventDefault();
    const image = document.getElementById('image3');
    if (image.classList.contains('active')) {
      // Espera un momento antes de eliminar la clase para asegurar que la transición se vea bien
      image.classList.remove('active');
      // image.classList.add('vibra');
    } else {
      // Si la imagen no está activa, agrega la clase active para hacer zoom
      image.classList.add('active');
      // image.classList.remove('vibra');
    }
    // setTimeout(window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/diseno.html', 15000);
    setTimeout(function () {
      window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/analitica.html';
    }, 1500);
  });
  $("body").on("click", "#image4", function (e) {
    e.preventDefault();
    const image = document.getElementById('image4');
    if (image.classList.contains('active')) {
      // Espera un momento antes de eliminar la clase para asegurar que la transición se vea bien
      image.classList.remove('active');
      // image.classList.add('vibra');
    } else {
      // Si la imagen no está activa, agrega la clase active para hacer zoom
      image.classList.add('active');
      // image.classList.remove('vibra');
    }
    // setTimeout(window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/diseno.html', 15000);
    setTimeout(function () {
      window.location.href = 'https://qualiticsolution.com/qualiticsolution.com/nuevo/hosting.html';
    }, 1500);
  });

  // $("body").on("mousemove", "#image1", function(e) {
  //   const offset = $(this).offset();
  //   const x = e.pageX - offset.left;
  //   const y = e.pageY - offset.top;

  //   $(this).css({
  //       transform: `translate(${x * 0.1}px, ${y * 0.1}px)` // Ajusta el multiplicador para el efecto deseado
  //   });
  // });

  // Añadir el siguiente código para manejar el scroll
  let lastScrollTop = 0; // Guarda la posición del scroll anterior
  const menu = $('.menu-header'); // Selecciona el menú

  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo
      menu.addClass('hidden'); // Oculta el menú
    } else {
      // Scroll hacia arriba
      menu.removeClass('hidden'); // Muestra el menú
    }
    lastScrollTop = scrollTop; // Actualiza la posición del scroll
  });
  
  $("body").on("click", ".mobile-btn", function (e) {
    e.preventDefault();
    $(this).toggleClass('active')
    $('.menu-mobile').toggleClass('active')
  });  
});


var imagenes1 = new Array(
  'imagenes/DesarolloSoftware.jpeg'
);

var imagenes2 = new Array(
  'imagenes/puestaMarcha_fondo.jpg'
);

var imagenes3 = new Array(
  'imagenes/AnalisisiNecesidad.jpeg'
);

// var imagenes5 = new Array(
//   'imagenes/fondo_codigo.png'
// );

var imagenes6 = new Array(
  'imagenes/mantenimiento1.jpg'
);

function rotarImagenes1() {

  var index = Math.floor((Math.random() * imagenes1.length));

  $("#collage").fadeOut(300, function () {
    $(this).attr('src', imagenes1[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

function rotarImagenes2() {

  var index = Math.floor((Math.random() * imagenes2.length));

  $("#collage").fadeOut(300, function () {
    $(this).attr('src', imagenes2[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

function rotarImagenes3() {

  var index = Math.floor((Math.random() * imagenes3.length));

  $("#collage").fadeOut(300, function () {
    $(this).attr('src', imagenes3[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}


// function rotarImagenes5() {
//   var index = Math.floor((Math.random() * imagenes5.length));

//   $("#collage").fadeOut(300, function () {
//     $(this).attr('src', imagenes5[index]);
//     $(this).removeClass('text-focus-in'); // Reiniciar la animación
//   }).fadeIn(0, function () {
//     $(this).addClass('text-focus-in');
//   });
// }

function rotarImagenes6() {

  var index = Math.floor((Math.random() * imagenes6.length));

  $("#collage").fadeOut(300, function () {
    $(this).attr('src', imagenes6[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

function rotarImagenes7() {

  var index = Math.floor((Math.random() * imagenes3.length));

  $("#collage2").fadeOut(300, function () {
    $(this).attr('src', imagenes3[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

function rotarImagenes8() {

  var index = Math.floor((Math.random() * imagenes1.length));

  $("#collage3").fadeOut(300, function () {
    $(this).attr('src', imagenes1[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}
function rotarImagenes9() {

  var index = Math.floor((Math.random() * imagenes2.length));

  $("#collage4").fadeOut(300, function () {
    $(this).attr('src', imagenes2[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

function rotarImagenes10() {

  var index = Math.floor((Math.random() * imagenes6.length));

  $("#collage5").fadeOut(300, function () {
    $(this).attr('src', imagenes6[index]);
    $(this).removeClass('roll-in'); // Reiniciar la animación
  }).fadeIn(0, function () {
    $(this).addClass('roll-in');
  });
}

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function () {
    const accordion = this.parentElement.parentElement;
    accordion.classList.toggle('open');

    const content = accordion.querySelector('.accordion-content');
    if (accordion.classList.contains('open')) {
      const contentHeight = content.scrollHeight;
      content.style.height = contentHeight + 'px';
    } else {
      content.style.height = '0';
    }
  });

  $('.toggle-button').on('click', function () {
    $('.toggle-div').toggleClass('open');

    if ($('.toggle-div').hasClass('open')) {
      $('.toggle-div').css('max-height', $('.toggle-div')[0].scrollHeight + 'px');
    } else {
      $('.toggle-div').css('max-height', '0');
    }
  });

});

$(document).ready(function() {
  $('#switch').change(function() {
      if ($(this).is(':checked')) {
          $('.clientes-general p:nth-child(3)').text('Con nosotros');
          $('.clientes-general p:nth-child(2)').text('Trabajan');
      } else {
          $('.clientes-general p:nth-child(3)').text('Con nosotros');
          $('.clientes-general p:nth-child(2)').text('Trabajaron');
      }
  });
});

$(document).ready(function() {
  // Asegurarse de que el estado inicial sea el correcto
  $('.logos-clientes-anteriores').hide(); // Oculta inicialmente
  $('.logos-clientes').show(); // Muestra logos-clientes inicialmente

  $('#switch').change(function() {
      if ($(this).is(':checked')) {
          // Si el switch está activado, mostrar logos-clientes y ocultar logos-clientes-anteriores
          $('.logos-clientes').show();
          $('.logos-clientes-anteriores').hide();
      } else {
          // Si el switch está desactivado, ocultar logos-clientes y mostrar logos-clientes-anteriores
          $('.logos-clientes').hide();
          $('.logos-clientes-anteriores').show();
      }
  });
});

$(document).ready(function() {
  $('#switch').change(function() {
    if ($(this).is(':checked')) {
      $('#trabajan-text1').css('color', '#bada55'); // Cambia 'initial' al color que desees cuando el switch está activado
    } else {
      $('#trabajan-text1').css('color', 'initial'); // Cambia 'red' al color que desees cuando el switch está desactivado
    }
  });
});

$(document).ready(function() {
  $('#switch').change(function() {
    if ($(this).is(':checked')) {
      $('#trabajan-text').css('color', '#cf90d8'); // Cambia 'initial' al color que desees cuando el switch está activado
    } else {
      $('#trabajan-text').css('color', '#000'); // Cambia 'red' al color que desees cuando el switch está desactivado
    }
  });
});

$(document).ready(function() {
  $('#switch').change(function() {
    // Agregar la clase de animación a las imágenes
    $('.client-logo').each(function(index) {
      // Usar un retraso para que las imágenes aparezcan una tras otra
      $(this).delay(index * 200).addClass('fade-in');
    });
    $('.animation-text').each(function(index) {
      $(this).delay(index * 200).addClass('fade-in');
    });
  });
});

$(document).ready(function(e) {
  $("body").on("click", ".modal-trigger-1", function(e){
    e.preventDefault();
    $("#modal-name-1").css({"display": "block"}); // Mostrar el modal
    // $("body").css({"overflow-y": "hidden"}); // Prevenir doble scrollbar
  });
 
  $(".close-modal-1, .modal-sandbox").click(function(){
    $("#modal-name-1").css({"display": "none"}); // Ocultar el modal
    // $("body").css({"overflow-y": "auto"}); // Prevenir doble scrollbar
  });


  $("body").on("click", ".modal-trigger-2", function(e){
    e.preventDefault();
    $("#modal-name-2").css({"display": "block"}); // Mostrar el modal
    // $("body").css({"overflow-y": "hidden"}); // Prevenir doble scrollbar
  });
 
  $(".close-modal-2, .modal-sandbox").click(function(){
    $("#modal-name-2").css({"display": "none"}); // Ocultar el modal
    // $("body").css({"overflow-y": "auto"}); // Prevenir doble scrollbar
  });



  $("body").on("click", ".modal-trigger-3", function(e){
    e.preventDefault();
    $("#modal-name-3").css({"display": "block"}); // Mostrar el modal
    // $("body").css({"overflow-y": "hidden"}); // Prevenir doble scrollbar
  });
 
  $(".close-modal-3, .modal-sandbox").click(function(){
    $("#modal-name-3").css({"display": "none"}); // Ocultar el modal
    // $("body").css({"overflow-y": "auto"}); // Prevenir doble scrollbar
  });
});



document.querySelectorAll('.modal-trigger').forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Mostrar el modal
    modal.querySelector('.modal-box').classList.add('despliegue-arriba'); // Añadir clase de animación
  });
});

$(document).ready(function (e) {
  let lastScrollTop = 100; // Guarda la posición del scroll anterior
  const menu = $('.menu-header'); // Selecciona el menú

  $(window).on('scroll', function() {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo
    menu.addClass('hidden'); // Oculta el menú
  } else {
    // Scroll hacia arriba
    menu.removeClass('hidden'); // Muestra el menú
  }
  lastScrollTop = scrollTop; // Actualiza la posición del scroll
});
});

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelectorAll(".servicio1, .servicio4");
 
//   // Crear y añadir el tooltip
//   const tooltip = document.createElement("div");
//   tooltip.className = "tooltip";
//   tooltip.textContent = container.getAttribute("data-tooltip");
//   container.appendChild(tooltip);
 
//   // Mostrar y mover el tooltip según el cursor
//   container.addEventListener("mousemove", (e) => {
//     const containerRect = container.getBoundingClientRect();
//     const tooltipX = e.clientX - containerRect.left;
//     const tooltipY = e.clientY - containerRect.top;
 
//     // Ajusta la posición para que aparezca arriba del cursor
//     tooltip.style.left = `${tooltipX}px`;
//     tooltip.style.top = `${tooltipY - 20}px`; // Desplaza 20px arriba del cursor
//     tooltip.style.opacity = 1;
//   });
 
//   // Ocultar el tooltip cuando el mouse sale del contenedor
//   container.addEventListener("mouseleave", () => {
//     tooltip.style.opacity = 0;
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los contenedores con las clases ".servicio1" y ".servicio4"
  const containers = document.querySelectorAll(".servicio1, .servicio2, .servicio3, .servicio4");

  containers.forEach((container) => {
    // Crear y añadir el tooltip
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = container.getAttribute("data-tooltip");
    container.appendChild(tooltip);

    // Mostrar y mover el tooltip según el cursor
    container.addEventListener("mousemove", (e) => {
      const containerRect = container.getBoundingClientRect();
      const tooltipX = e.clientX - containerRect.left;
      const tooltipY = e.clientY - containerRect.top;

      // Ajustar la posición del tooltip (arriba del cursor)
      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY - 20}px`; // Desplaza 20px arriba
      tooltip.style.opacity = 1;
    });

    // Ocultar el tooltip cuando el mouse sale del contenedor
    container.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
});





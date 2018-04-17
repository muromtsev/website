$('.parallax-window').parallax({imageSrc: './img/bg-parallax2.jpg'});

$('.menu li > .submenu').parent().hover(function() {
  var submenu = $(this).children('.submenu');
  if ( $(submenu).is(':hidden') ) {
    $(submenu).slideDown(200);
  } else {
    $(submenu).slideUp(200);
  }
});
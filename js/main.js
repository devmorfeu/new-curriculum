var beforeScroll = 0;
var afterScroll;
var $navbar = $('.navbar');

$(function () {
  $.scrollify({
    section: ".example-classname",
    scrollSpeed: 40,
    scrollbars: false
  });
});

document.addEventListener("scroll", this.scroll.bind(this), { passive: false });

$(window).on("scroll", function () {

  afterScroll = $(this).scrollTop();
  if (beforeScroll < afterScroll) {
    $navbar.removeClass('slideDown').addClass('slideUp');
  } else if (beforeScroll > afterScroll) {
    $navbar.removeClass('slideUp').addClass('slideDown');
  }
  beforeScroll = afterScroll;
});

const intro = document.querySelector('.text-intro');
typeWrite(intro);

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {

    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i)

  });
}
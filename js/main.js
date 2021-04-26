var beforeScroll = 0;
var afterScroll;
var $navbar = $('.navbar');

$(function() {
  $.scrollify({
    section : ".example-classname",
    scrollSpeed: 20,
    scrollbars: false
  });
});

$(window).on("scroll", function(){
    
  afterScroll = $(this).scrollTop();
    if (beforeScroll < afterScroll) {
      $navbar.removeClass('slideDown').addClass('slideUp');
    } else if (beforeScroll > afterScroll) {
      $navbar.removeClass('slideUp').addClass('slideDown');
    }
    beforeScroll = afterScroll;
  });


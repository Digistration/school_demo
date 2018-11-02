$(document).ready(function(){
  $('#sticky_nav').click(function(){
    $('html, body').animate({
      scrollTop: $('header').offset().top
    }, 1000)
  })
});

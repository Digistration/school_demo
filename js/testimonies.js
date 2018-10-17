$("#testimonies").hover(function(){
  $("#testimonies").toggleClass("testimonies_hover");
});

$('#testimonies_button_open').click(function(){
  $('#testimonies').animate({left: '11.5vw'}, 500);
  $('#founder').fadeOut(400, 0);
  $('#philosophy').fadeOut(400, 0);
  $('#vision').fadeOut(400, 0);
  setTimeout(function(){
    $('#testimonies').toggleClass("testimonies_disabled");
    $('#testimonies').animate({width: '75vw'}, 500);
  }, 400);
  setTimeout(function(){
    $('#testimonies_p').fadeTo(400, 1);
  }, 500);
});

$('#testimonies_button_close').click(function(){
  $('#testimonies_p').css("display", "none");
  $('#testimonies').animate({width: '17vw'}, 500);
  setTimeout(function(){
    $('#testimonies').animate({left: '70vw'}, 500);
    $('#testimonies').toggleClass("testimonies_disabled");
  }, 400);
  setTimeout(function(){
    $('#founder').fadeTo(400, 1);
    $('#philosophy').fadeTo(400, 1);
    $('#vision').fadeTo(400, 1);
  }, 600);
});

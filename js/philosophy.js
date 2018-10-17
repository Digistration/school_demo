$("#philosophy").hover(function(){
  $("#philosophy").toggleClass("philosophy_hover");
});

$('#philosophy_button_open').click(function(){
  $('#philosophy').animate({left: '11.5vw'}, 500);
  $('#founder').fadeOut(400, 0);
  setTimeout(function(){
    $('#vision').fadeOut(400, 0);
    $('#testimonies').fadeOut(400, 0);
    $('#philosophy').toggleClass("philosophy_disabled");
    $('#philosophy').animate({width: '75vw'}, 500);
  }, 400);
  setTimeout(function(){
    $('#philosophy_p').fadeTo(400, 1);
  }, 500);
});

$('#philosophy_button_close').click(function(){
  $('#philosophy_p').css("display", "none");
  $('#philosophy').animate({width: '17vw'}, 500);
  setTimeout(function(){
    $('#philosophy').animate({left: '31vw'}, 500);
    $('#philosophy').toggleClass("philosophy_disabled");
    $('#founder').fadeTo(400, 1);
    $('#vision').fadeTo(400, 1);
    $('#testimonies').fadeTo(400, 1);
  }, 400);
});

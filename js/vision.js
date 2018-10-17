$("#vision").hover(function(){
  $("#vision").toggleClass("vision_hover");
});

$('#vision_button_open').click(function(){
  $('#vision').animate({left: '11.5vw'}, 500);
  $('#founder').fadeOut(400, 0);
  $('#philosophy').fadeOut(400, 0);
  $('#testimonies').fadeOut(400, 0);
  setTimeout(function(){
    $('#vision').toggleClass("vision_disabled");
    $('#vision').animate({width: '75vw'}, 500);
  }, 400);
  setTimeout(function(){
    $('#vision_p').fadeTo(400, 1);
  }, 500);
});

$('#vision_button_close').click(function(){
  $('#vision_p').css("display", "none");
  $('#vision').animate({width: '17vw'}, 500);
  setTimeout(function(){
    $('#vision').animate({left: '50.5vw'}, 500);
    $('#vision').toggleClass("vision_disabled");
    $('#testimonies').fadeTo(400, 1);
  }, 400);
  setTimeout(function(){
    $('#founder').fadeTo(400, 1);
    $('#philosophy').fadeTo(400, 1);
  }, 600);
});

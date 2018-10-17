$("#founder").hover(function(){
  $("#founder").toggleClass("founder_hover");
});

$('#founder_button_open').click(function(){
  $('#philosophy').fadeOut(200, 0);
  $('#vision').fadeOut(200, 0);
  $('#testimonies').fadeOut(200, 0);
  $('#founder').toggleClass("founder_disabled");
  $('#founder').animate({width: '75vw'}, 500);
  $('#founder_p').fadeTo(400, 1);
});

$('#founder_button_close').click(function(){
  $('#founder_p').css("display", "none");
  $('#founder').animate({width: '17vw'}, 500);
  setTimeout(function(){
    $('#founder').toggleClass("founder_disabled");
    $('#philosophy').fadeTo(400, 1);
    $('#vision').fadeTo(400, 1);
    $('#testimonies').fadeTo(400, 1);
  }, 500);
});

$("#founder").hover(function(){
  $("#founder").toggleClass("founder_hover");
});
$("#philosophy").hover(function(){
  $("#philosophy").toggleClass("philosophy_hover");
});
$("#vision").hover(function(){
  $("#vision").toggleClass("vision_hover");
});
$("#testimonies").hover(function(){
  $("#testimonies").toggleClass("testimonies_hover");
});

var x = window.matchMedia("(min-width: 501px)")

function myFunction(x) {
    if (x.matches) {
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
    } else {
      $('#founder_button_open').click(function(){
        $('#founder').toggleClass("founder_disabled");
        $('#founder_p').fadeTo(400, 1);
      });
      $('#philosophy_button_open').click(function(){
        $('#philosophy').toggleClass("philosophy_disabled");
        $('#philosophy_p').fadeTo(400, 1);
      });
      $('#vision_button_open').click(function(){
        $('#vision').toggleClass("vision_disabled");
        $('#vision_p').fadeTo(400, 1);
      });
      $('#testimonies_button_open').click(function(){
        $('#testimonies').toggleClass("testimonies_disabled");
        $('#testimonies_p').fadeTo(400, 1);
      });
    }
}
myFunction(x);
x.addListener(myFunction)

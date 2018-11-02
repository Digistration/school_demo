var x = window.matchMedia("(min-width: 501px)")

function myFunction(x) {
    if (x.matches) {

      $('.background_yellow').mouseenter(function(){
        $(this).removeClass("attention1");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.profile1').css("display", "block");
          $('#profile_1').animate({left:'32.5vw'}, 600);
          $('#profile1p').fadeTo(1000, 1);
        }, 400);
      });
      $('.background_yellow').mouseleave(function(){
        $('#profile1p').fadeOut(1000, 0);
        $('#profile_1').animate({left:'25.25vw'}, 600);
        setTimeout(function(){
          $('.background_yellow').css("transform", "rotate(-40deg)");
          $('.profile1').css("display", "none");
        }, 600);
      });

      $('.background_green').mouseenter(function(){
        $(this).removeClass("attention2");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.profile2').css("display", "block");
          $('#profile_2').animate({left:'25vw'}, 600);
          $('#profile2p').fadeTo(1000, 1);
        }, 400);
      });
      $('.background_green').mouseleave(function(){
        $('#profile2p').fadeOut(1000, 0);
        $('#profile_2').animate({left:'15vw'}, 600);
        setTimeout(function(){
          $('.background_green').css("transform", "rotate(10deg)");
          $('.profile2').css("display", "none");
        }, 600);
      });

      $('.background_blue').mouseenter(function(){
        $(this).removeClass("attention3");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.profile3').css("display", "block");
          $('#profile_3').animate({left:'30vw'}, 600);
          $('#profile3p').fadeTo(1000, 1);
        }, 400);
      });
      $('.background_blue').mouseleave(function(){
        $('#profile3p').fadeOut(1000, 0);
        $('#profile_3').animate({left:'15vw'}, 600);
        setTimeout(function(){
          $('.background_blue').css("transform", "rotate(-30deg)");
          $('.profile3').css("display", "none");
        }, 600);
      });

    } else {

      $('.background_yellow').mouseenter(function(){
        $(this).removeClass("attention1");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.background_yellow').animate({left: '10vw'}, 600);
        }, 500);
        setTimeout(function(){
          $('.profile1').css("display", "block");
          $('.profile1').css("z-index", "100");
          $('#profile1p').fadeTo(1000, 1);
        }, 800);
      });

      $('.background_green').mouseenter(function(){
        $(this).removeClass("attention2");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.background_green').animate({left: '10vw'}, 600);
        }, 500);
        setTimeout(function(){
          $('.profile2').css("display", "block");
          $('.profile2').css("z-index", "100");
          $('#profile2p').fadeTo(1000, 1);
        }, 800);
      });

      $('.background_blue').mouseenter(function(){
        $(this).removeClass("attention3");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
          $('.background_blue').animate({left: '10vw'}, 600);
        }, 500);
        setTimeout(function(){
          $('.profile3').css("display", "block");
          $('.profile3').css("z-index", "100");
          $('#profile3p').fadeTo(1000, 1);
        }, 800);
      });
    }
}
myFunction(x);
x.addListener(myFunction)

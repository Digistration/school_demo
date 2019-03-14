// TEST FOR DESKTOP OR MOBILE
var x = window.matchMedia("(min-width: 501px)")

function myFunction(x) {
// DESKTOP FUNCTION
    if (x.matches) {
// PROFILE 1 ANIMATIONS
    // OPEN ANIMATION
      $('.background_yellow').mouseenter(function(){
        $(this).removeClass("attention1");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
            $('#profile_1').css("display", "block");
        }, 250);
        setTimeout(function(){
          $('#profile_1').animate({left:'32.5vw'}, 600);
          $('#profile1p').fadeTo(1000, 1);
        }, 500);
      });
  // CLOSE ANIMATION
      $('.background_yellow').mouseleave(function(){
        $('#profile1p').fadeOut(1000, 0);
        $('#profile_1').animate({left:'22.5vw'}, 600);
        setTimeout(function(){
          $('.background_yellow').css("transform", "rotate(-40deg)");
          $('#profile_1').css("display", "none");
        }, 600);
      });
// PROFILE 2 ANIMATIONS
    // OPEN ANIMATION
      $('.background_green').mouseenter(function(){
        $(this).removeClass("attention2");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
            $('#profile_2').css("display", "block");
        }, 250);
        setTimeout(function(){
          $('#profile_2').animate({left:'25vw'}, 600);
          $('#profile2p').fadeTo(1000, 1);
        }, 500);
      });
    // CLOSE ANIMATION
      $('.background_green').mouseleave(function(){
        $('#profile2p').fadeOut(1000, 0);
        $('#profile_2').animate({left:'15vw'}, 600);
        setTimeout(function(){
          $('.background_green').css("transform", "rotate(10deg)");
          $('#profile_2').css("display", "none");
        }, 600);
      });
// PROFILE 3 ANIMATIONS
    // OPEN ANIMATION
      $('.background_blue').mouseenter(function(){
        $(this).removeClass("attention3");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
            $('#profile_3').css("display", "block");
        }, 250);
        setTimeout(function(){
          $('#profile_3').animate({left:'30vw'}, 600);
          $('#profile3p').fadeTo(1000, 1);
        }, 500);
      });
    // CLOSE ANIMATION
      $('.background_blue').mouseleave(function(){
        $('#profile3p').fadeOut(1000, 0);
        $('#profile_3').animate({left:'15vw'}, 600);
        setTimeout(function(){
          $('.background_blue').css("transform", "rotate(-30deg)");
          $('#profile_3').css("display", "none");
        }, 600);
      });
// MOBILE FUNCTION
    } else {
      // PROFILE 1 ANIMATIONS
          // OPEN ANIMATION
            $('.background_yellow').mouseenter(function(){
              $(this).removeClass("attention1");
              $(this).css("transform", "rotate(0deg)");
              setTimeout(function(){
                  $('#profile_1').css("display", "block");
              }, 250);
              setTimeout(function(){
                $('#profile_1').animate({left:'27.5vw'}, 600);
                $('#profile1p').fadeTo(1000, 1);
              }, 500);
            });
// PROFILE 2 ANIMATIONS
        // OPEN ANIMATION
          $('.background_green').mouseenter(function(){
            $(this).removeClass("attention2");
            $(this).css("transform", "rotate(0deg)");
            setTimeout(function(){
                $('#profile_2').css("display", "block");
            }, 250);
            setTimeout(function(){
              $('#profile_2').animate({left:'27.5vw'}, 600);
              $('#profile2p').fadeTo(1000, 1);
            }, 500);
          });
// PROFILE 3 ANIMATIONS
    // OPEN ANIMATION
      $('.background_blue').mouseenter(function(){
        $(this).removeClass("attention3");
        $(this).css("transform", "rotate(0deg)");
        setTimeout(function(){
            $('#profile_3').css("display", "block");
        }, 250);
        setTimeout(function(){
          $('#profile_3').animate({left:'27.5vw'}, 600);
          $('#profile3p').fadeTo(1000, 1);
        }, 500);
      });
    }
  }
myFunction(x);
x.addListener(myFunction)

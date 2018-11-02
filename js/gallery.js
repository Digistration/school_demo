$('#button_next').click(function(){
  var currentImg = $('.active');
  var nextImg = currentImg.next();
  var firstImg = currentImg.siblings('.first');

  if(nextImg.length){
    currentImg.removeClass('active').css("z-index", -10);
    nextImg.addClass('active').css("z-index", 10);
  } else{
    currentImg.removeClass('active').css("z-index", -10);
    firstImg.addClass('active').css("z-index", 10);
  }
});

$('#button_previous').click(function(){
  var currentImg = $('.active');
  var prevImg = currentImg.prev();
  var lastImg = currentImg.siblings('.last');

  if(prevImg.length){
    currentImg.removeClass('active').css("z-index", -10);
    prevImg.addClass('active').css("z-index", 10);
  } else{
    currentImg.removeClass('active').css("z-index", -10);
    lastImg.addClass('active').css("z-index", 10);
  }
});

window.onload=function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<i id="slide_back" class="slick-prev fa fa-arrow-circle-left"></i>',
    nextArrow: '<i id="slide_forward" class="slick-prev fa fa-arrow-circle-right"></i>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    ]
  });
};

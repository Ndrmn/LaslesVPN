$(document).ready(function(){
  $('.customers__cards').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      appendArrows: $('.buttons__right'),
      prevArrow: $('.left'),
      nextArrow: $('.right'),
      appendDots: $('.buttons__left'),
      variableWidth: true,
      adaptiveHeight: true,
    });

});


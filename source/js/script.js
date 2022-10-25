$(document).ready(function(){
  $('.customers__block').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      appendArrows: $('.buttons__right'),
      prevArrow: $('.left'),
      nextArrow: $('.right'),
      appendDots: $('.buttons__left'),
      variableWidth: true,
      adaptiveHeight: true
    });

});

let menuButton = document.querySelector('.header__menuButton');
let menuList = document.querySelector('.header__menu');

menuButton.addEventListener('click', function() {
  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden');
    menuButton.classList.remove('icon__close');
    menuButton.classList.add('icon__open');
  } else {
    menuList.classList.add('hidden');
    menuButton.classList.add('icon__close');
    menuButton.classList.remove('icon__open');
  }
  
});
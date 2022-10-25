// Slider

var $carousel = $('.customers__block');

var settings = {
  dots: true,
  arrows: true,
  slide: '.customers__card',
  slidesToShow: 3,
  infinite: true,
  appendArrows: $('.buttons__right'),
  prevArrow: $('.left'),
  nextArrow: $('.right'),
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
     }
  ]
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.customers__card[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 0);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});

// Menu

let menuButton = document.querySelector('.header__menuButton');
let menuList = document.querySelector('.header__menu');
let menuArrow = document.querySelector('.arrow')

menuButton.addEventListener('click', function() {
  if (menuList.classList.contains('hidden')) {
    menuList.classList.remove('hidden');
    menuArrow.classList.remove('icon__close');
    menuArrow.classList.add('icon__open');
  } else {
    menuList.classList.add('hidden');
    menuArrow.classList.add('icon__close');
    menuArrow.classList.remove('icon__open');
  }
  
});
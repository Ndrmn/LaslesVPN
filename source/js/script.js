//Network request

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

async function loadInfo () {
  let response = await fetch('https://testimonialapi.toolcarton.com/api', requestOptions);
  let json = await response.json();
  console.log(json);

  for (let i = 0; i<10; i++) {

    let card = document.createElement('div');
    card.className = 'customers__card';

    let user = document.createElement('div');
    user.className = 'customer__user';

    let info =  document.createElement('div');
    info.className = 'customer__info';

    let rating =  document.createElement('div');
    rating.className = 'customer__rating';

    let photo =  document.createElement('div');
    photo.className = 'customer__photo';

    let img = document.createElement('img');
    img.className = 'img';
    img.src = json[i].avatar;
    
    let text = document.createElement('div');
    text.className = 'customer__text';

    let name = document.createElement('span');
    name.className = 'customer__name';
    name.innerText = json[i].name;

    let location = document.createElement('span');
    location.className = 'customer__location';
    location.innerText = json[i].location;

    let rate = document.createElement('span');
    rate.className = 'customer__rate';
    rate.innerText = json[i].rating;

    let star = document.createElement('div');
    star.className = 'customer__star';

    let starImage = document.createElement('img');
    starImage.className = 'img';
    starImage.src = "img/star.svg";

    let comentWrapper = document.createElement('div');
    comentWrapper.className = 'comentWrapper';

    let coment = document.createElement('span');
    coment.className = 'customer__comment';
    coment.classList.add('visibleComent');
    coment.innerText = `"${json[i].message}"`;

    let comentSmall = document.createElement('span');
    comentSmall.className = 'customer__comment';
    comentSmall.classList.add('hiddenComent');

    if (json[i].message.length > 62) {
      comentSmall.innerText = `"${json[i].message.slice(0, 61)} ... `;
    } else {
      comentSmall.innerText = coment.innerText;
    };


    let more = document.createElement('span');
    more.className = 'more';
    more.innerText = 'more';

    let drop = document.createElement('p');
    drop.className = 'drop';
    drop.innerText = `"${json[i].message}"`;


    

    rating.append(rate);
    rating.append(star);
    star.append(starImage);
    text.append(name);
    text.append(location);
    info.append(photo);
    info.append(text);
    photo.append(img);
    user.append(info);
    user.append(rating);
    card.append(user);
    card.append(comentWrapper);
    comentWrapper.append(coment);
    comentWrapper.append(comentSmall);

    if (comentSmall.innerText != coment.innerText) {
      comentWrapper.append(more);      
    }

    comentWrapper.append(drop);

    let cards = document.querySelector('.customers__block');
    cards.append(card);
  }

  $carousel.slick(settings);
  $carousel.slick('slickGoTo', 0);
  setSlideVisibility();

  $carousel.on('afterChange', function() {
    setSlideVisibility();
  });

};

loadInfo();


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
  centerPadding: '50px',
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
  // $(visibleSlides).first().prev().css('opacity', 0);
};

// Menu

let menuButton = document.querySelector('.header__menuButton');
let menuList = document.querySelector('.header__nav');
let sign = document.querySelector('.header__sign');
let burger = document.querySelector('.burger');

function toggleClass () {
    burger.classList.toggle('burger__close');
    burger.classList.toggle('burger__open');
    menuList.classList.toggle('hidden');
    sign.classList.toggle('hidden');
}



menuButton.addEventListener('click', function(e) {

    // burger.classList.toggle('burger__close');
    // burger.classList.toggle('burger__open');
    // menuList.classList.toggle('hidden');
    // sign.classList.toggle('hidden');
    e.stopPropagation();
    toggleClass();
});

document.addEventListener('click', function (e) {
  
  const target = e.target;
  const thsmenu = target == menuList || menuList.contains(target);
  const thssign = target == sign || sign.contains(target);
  const menuIsActive = menuList.classList.contains('hidden');

  if (!thsmenu && !menuIsActive && !thssign) {
    toggleClass();
  };

});
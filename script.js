$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').addClass("active");
    if (scrolled < 200) $('.go-top').removeClass("active");
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1611: {
        spaceBetween: 40
      },
      1350:{
        spaceBetween:20
      },
      1012:{
          spaceBetween: 10,
          slidesPerView: 3
      },

      668:{
        spaceBetween: 10,
        slidesPerView: 2
      },

      300:{
        spaceBetween: 10,
        slidesPerView: 1
      }
    
    },
  });
});

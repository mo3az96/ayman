$(document).ready(function () {
  lazyLoad();
  /* ~~~~~~~~~~~~~~~ Fixed Header ~~~~~~~~~~~~~~~ */
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#'],.main-btn").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    }
  });

  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".nav,.menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav,.menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
  /* ~~~~~~~~~~~~~~~ Articles Slider ~~~~~~~~~~~~~~~ */
  var articleswiper = new Swiper(".articles-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".articles-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".articles-slider .swiper-button-next",
      prevEl: ".articles-slider .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Mobile Menu ~~~~~~~~~~~~~~~ */
  $(".search-trigger").on("click", function (e) {
    $("body").addClass("overflow");
    $(".search-overlay,.search-form").fadeIn(400);
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("overflow");
    $(".search-overlay,.search-form").fadeOut(400);
  });
});

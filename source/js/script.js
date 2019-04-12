(function() {
  "use strict";
  var toggles = document.querySelectorAll('.nav-open');
  var open = document.querySelector('#nav');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      open.classList.toggle('nav-hide');
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
    });
  }
})();

$(function() {
  $("#tabs").tabs();
});

$('.repair__buttons li').click(function() {
  $(this).addClass('repair__button--active');
  $('.repair__buttons li').not(this).removeClass('repair__button--active');
})

$('.repair__list button').click(function() {
  $('.modal').show();
  $(this).addClass('repair__active');
  $('.repair__list button').not(this).removeClass('repair__active');
});

$('.modal__close').click(function() {
  $('.modal').hide();
  $('.repair__list button').removeClass('repair__active');
});

$('.buyup__choice').slick({
  // dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});

$(document).ready(function () {
    // Initialize wow js
    new WOW().init();
  });

  $(".menu-icon").click(function () {
    if ($("#mobile-menu").hasClass("collapsed")) {
      $("#mobile-menu").removeClass("collapsed");
      $("#mobile-menu").addClass("d-none").removeClass("d-block");
    } else {
      $("#mobile-menu").addClass("collapsed");
      $("#mobile-menu").removeClass("d-none").addClass("d-block");
    }
  });
$(document).ready(function () {

    //MainSlider
    var mainSlider = new Swiper(".mainSliderContainer", {
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      speed: 500,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mainSliderNext",
        prevEl: ".mainSliderPrev",
      },
    });

        // services slider
        var servicesSlider = new Swiper(".servicesSlider", {
          navigation: {
            nextEl: ".servicesSliderNext",
            prevEl: ".servicesSliderPrev",
          },
          pagination: {
            el: ".servicesSlidePagination",
            type: "fraction",
          },
          // loop: true,
          spaceBetween: 30,
          speed: 1000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          slidesPerView: "auto",
        });
        $(".servicesSlider").hover(
          function () {
            this.swiper.autoplay.stop();
          },
          function () {
            this.swiper.autoplay.start();
          }
        );

});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinner").fadeOut("slow");
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 150);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 1000,
    // easing: "linear",
    once: false,
  });
});

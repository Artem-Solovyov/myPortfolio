document.addEventListener("DOMContentLoaded", function () {
  const showSlider = new Swiper(".showcase__carousel", {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: ".showcase-navigation-next",
      prevEl: ".showcase-navigation-prev",
    },
  });
  document.querySelector("video").playbackRate = 2;
});

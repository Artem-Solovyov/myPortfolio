gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Smoother Scroll

//only pc
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true, // add html data-speed="0.6" data-lag="0.5"
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",

        start: "center",
        end: "1200",
        scrub: true,
      },
    }
  );
  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");
  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,

          start: "-1000",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");
  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,

          start: "-1000",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}

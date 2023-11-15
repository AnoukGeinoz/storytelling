const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

gsap.to(".l-section-horizontal", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});

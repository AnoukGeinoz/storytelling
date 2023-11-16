const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

// gsap.to(".l-section-horizontal", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//     repeat: 3,
//   },
//   x: amplitudeX + "%",
//   ease: "sine.inOut",
// });

let tl = gsap.timeline({});

tl.to(".l-section-horizontal", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    // markers: true,
    repeat: 3,
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});
tl.to(".l-section-horizontal-2", {
  scrollTrigger: {
    trigger: ".slider-mask-2",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    // markers: true,
    repeat: 3,
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});
tl.to(".l-section-horizontal-3", {
  scrollTrigger: {
    trigger: ".slider-mask-3",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    // markers: true,
    repeat: 3,
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});

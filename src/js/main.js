const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

let tl = gsap.timeline({});

const progressElement = document.querySelector(".progress-container");

tl.to(".l-section-horizontal", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
    onComplete: () => {
      // blockScroll.classList.add("slider-mask-2-hidden");
    },
    onUpdate: function (self) {
      document.querySelector(".progress-bar").style.transform =
        "scaleX(" + self.progress + ")";
      // document.querySelector(".progress-image").style.left =
      //   self.progress * 100 + "%";
    },
    onLeave: function () {
      progressElement.classList.add("hidden");
      slider1Button.classList.remove("hidden");
    },
    onEnterBack: function () {
      progressElement.classList.remove("hidden");
      slider1Button.classList.add("hidden");
    },
    onComplete: function () {
      console.log("Scroll completed!");
    },
  },
  x: amplitudeX + "%",
  ease: "sine.inOut",
});

var slider1Button = document.querySelector("#slider-1-button");

slider1Button.addEventListener("click", function () {
  document.querySelector(".slider-mask-2").classList.remove("hidden");
  tl.to(".l-section-horizontal-2", {
    scrollTrigger: {
      trigger: ".slider-mask-2",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      repeat: 3,
      onComplete: () => {
        // blockScroll.classList.add("slider-mask-2-hidden");
      },
      onUpdate: function (self) {
        document.querySelector(".progress-bar-2").style.transform =
          "scaleX(" + self.progress + ")";
        // document.querySelector(".progress-image").style.left =
        //   self.progress * 100 + "%";
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
});

var slider2Button = document.querySelector("#slider-2-button");

slider2Button.addEventListener("click", function () {
  document.querySelector(".slider-mask-3").classList.remove("hidden");
  tl.to(".l-section-horizontal-3", {
    scrollTrigger: {
      trigger: ".slider-mask-3",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      repeat: 3,
      onComplete: () => {
        // blockScroll.classList.add("slider-mask-2-hidden");
      },
      onUpdate: function (self) {
        document.querySelector(".progress-bar-3").style.transform =
          "scaleX(" + self.progress + ")";
        // document.querySelector(".progress-image").style.left =
        //   self.progress * 100 + "%";
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
});

var slider3Button = document.querySelector("#slider-3-button");

slider3Button.addEventListener("click", function () {
  document.querySelector(".shop").classList.remove("hidden");
});

slider3Button.addEventListener("click", function () {
  document.querySelector("footer").classList.remove("hidden");
});

// gsap.to(".slider-mask", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: "-66.6666%",
//   ease: "sine.inOut",
// });

gsap.to(".l-img-1-1", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=200%",
    // pin: true,
    // scrub: true,
    // markers: true,
  },
  x: "-30px",
  duration: 1,
  // delay: 1,
});

gsap.from(".l-img-1-1", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=200%",
    // markers: true,
  },
  opacity: 0,
  duration: 1,
  // delay: 1,
});

gsap.to(".l-img-1-2", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=250%",
    // pin: true,
    // scrub: true,
    // markers: true,
  },
  x: "-30px",
  duration: 1,
  // delay: 1,
});

gsap.from(".l-img-1-2", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=250%",
    // markers: true,
  },
  opacity: 0,
  duration: 1,
  // delay: 1,
});

// gsap.to(".l-img-1-3", {
//   scrollTrigger: {
//     trigger: ".l-img-1-3",
//     start: "top 50%",
//     markers: true,
//   },
//   x: "-30px",
//   duration: 1,
//   delay: 3.5,
// });

// gsap.from(".l-img-1-3", {
//   scrollTrigger: {
//     trigger: ".l-img-1-3",
//     start: "top 50%",
//     // markers: true,
//   },
//   opacity: 0,
//   duration: 1,
//   delay: 3.5,
// });

// gsap.to(".l-img-1-4", {
//   scrollTrigger: {
//     trigger: ".l-img-1-4",
//     start: "top 50%",
//     markers: true,
//   },
//   x: "-30px",
//   duration: 1,
//   delay: 4.5,
// });

// gsap.from(".l-img-1-4", {
//   scrollTrigger: {
//     trigger: ".l-img-1-4",
//     start: "top 50%",
//     // markers: true,
//   },
//   opacity: 0,
//   duration: 1,
//   delay: 4.5,
// });

// gsap.to(".l-img-1-5", {
//   scrollTrigger: {
//     trigger: ".l-img-1-5",
//     start: "top 50%",
//     markers: true,
//   },
//   x: "-30px",
//   duration: 1,
//   delay: 5.5,
// });

// gsap.from(".l-img-1-5", {
//   scrollTrigger: {
//     trigger: ".l-img-1-5",
//     start: "top 50%",
//     // markers: true,
//   },
//   opacity: 0,
//   duration: 1,
//   delay: 5.5,
// });

// gsap.to(".l-img-2-1", {
//   scrollTrigger: {
//     trigger: ".l-img-2-1",
//     start: "top 90%",
//     markers: true,
//   },
//   x: "-60px",
//   duration: 1,
//   delay: 12,
// });

// gsap.from(".l-img-2-1", {
//   scrollTrigger: {
//     trigger: ".l-img-2-1",
//     start: "top 90%",
//     // markers: true,
//   },
//   opacity: 0,
//   duration: 1,
//   delay: 12,
// });

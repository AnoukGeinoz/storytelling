const n = 3;
var amplitudeX = (-100 * (n - 1)) / n;

let tl = gsap.timeline({});

const progressElement = document.querySelector(".progress-container");
const progressElement2 = document.querySelector(".progress-container-2");
const progressElement3 = document.querySelector(".progress-container-3");
const buttonSection1 = document.querySelector("#button-section-1");
const buttonSection2 = document.querySelector("#button-section-2");
const buttonSection3 = document.querySelector("#button-section-3");

var audio = document.querySelector("audio");

var headerButton = document.querySelector("#slider-header-button");
headerButton.addEventListener("click", function () {
  document.querySelector(".l-img-music").classList.remove("hidden");
});

var headerButton = document.querySelector("#slider-header-button");
headerButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  }
});

var headerButton = document.querySelector("#slider-header-button");
headerButton.addEventListener("click", function () {
  document.querySelector("main").classList.remove("hidden");
  tl.to(".l-section-horizontal", {
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
      onComplete: () => {},
      onUpdate: function (self) {
        document.querySelector(".progress-bar").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement.classList.add("hidden");
        buttonSection1.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement.classList.remove("hidden");
        buttonSection1.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
      },
    },
    x: amplitudeX + "%",
    ease: "sine.inOut",
  });
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
      onComplete: () => {},
      onUpdate: function (self) {
        document.querySelector(".progress-bar-2").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement2.classList.add("hidden");
        buttonSection2.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement2.classList.remove("hidden");
        buttonSection2.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
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
      onComplete: () => {},
      onUpdate: function (self) {
        document.querySelector(".progress-bar-3").style.transform =
          "scaleX(" + self.progress + ")";
      },
      onLeave: function () {
        progressElement3.classList.add("hidden");
        buttonSection3.classList.remove("hidden");
      },
      onEnterBack: function () {
        progressElement3.classList.remove("hidden");
        buttonSection3.classList.add("hidden");
      },
      onComplete: function () {
        console.log("Scroll completed!");
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

document.querySelector(".l-img-music").addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
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

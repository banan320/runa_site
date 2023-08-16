"use strict";
import Swiper from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Autoplay, EffectCoverflow],
  spaceBetween: 100,
  loop: true,
  speed: 800,
  autoHeight: true,
  direction: "horizontal",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 100,
    slideShadows: false,
    depth: 300,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// scroll ==================
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("scroll__show");
    }
  });
}

let options = {
  threshold: [0.2],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".scroll");

for (let elm of elements) {
  observer.observe(elm);
}

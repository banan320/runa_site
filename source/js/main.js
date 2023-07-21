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

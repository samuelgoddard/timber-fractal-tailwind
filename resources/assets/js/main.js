// import $ from 'jquery';

// import Vue from 'vue';
// import App from './App.vue';

// new Vue({
//   el: '#app',
//   render: h => h(App),
// });

// // Toggle mobile menu
// $('.navbar-burger').on('click', () => $('.navbar-burger, .navbar-menu').toggleClass('is-active'));

import Vue from "vue";
import svg4everybody from "svg4everybody";

import polyfill from "./polyfills";
// import "@/assets/styles/app.postcss";
// import "@/lib/svg-sprite";
import initModules from "./lib/init-modules";
import modulesEnabled from "./modulesEnabled";

Vue.config.productionTip = false;

const setJsDocumentClasses = () => {
  const docEl = document.documentElement;

  docEl.classList.remove("js-loading");
  docEl.classList.add("js-loaded");
};

/* eslint-disable no-param-reassign */
const init = (APP) => {
  APP.DEBUG = typeof APP.DEBUG !== "undefined" ? APP.DEBUG : !process.env.NODE_ENV === "production";

  APP.modules = initModules(APP.modules, modulesEnabled, APP.DEBUG);
};

window.addEventListener("DOMContentLoaded", () => {
  setJsDocumentClasses();
  svg4everybody();

  polyfill().then(() => {
    init(window.APP);
  });
});

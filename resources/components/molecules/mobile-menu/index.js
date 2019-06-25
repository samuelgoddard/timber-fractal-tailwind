import Vue from "vue";
import MobileMenu from "./vue-components/MobileMenu";

import store from "@/store";

export const mobileMenu = (configs) =>
  configs.map(({ items, el }) => {
    store.commit("mobileMenu/SET_ITEMS", items);

    return new Vue({
      el,
      store,
      render(h) {
        h("<div/>");
        return h(MobileMenu);
      },
    });
  });

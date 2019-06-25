import enquire from "enquire.js";
import Vue from "vue";

const BREAKPOINTS = require("@/design-tokens/screens.json");

/* eslint-disable no-param-reassign */

const BreakpointPlugin = Vue.extend({
  data() {
    return {
      breakpoints: BREAKPOINTS,
    };
  },
  created() {
    Object.entries(this.breakpoints).forEach(([name, px]) => {
      this.registerBreakpoint(name, px);
    });
  },
  methods: {
    registerBreakpoint(name, pxStr) {
      const $vm = this;
      const ems = parseInt(pxStr, 10) / 16;
      const breakpoint = `(min-width: ${ems}em)`;
      const { matches } = window.matchMedia(breakpoint);

      // set initial state
      this.$store.commit("ui/SET_BREAKPOINT", { name, matches });
      // track changes
      enquire.register(breakpoint, {
        match() {
          $vm.$store.commit("ui/SET_BREAKPOINT", { name, matches: true });
        },
        unmatch() {
          $vm.$store.commit("ui/SET_BREAKPOINT", { name, matches: false });
        },
      });
    },
  },
});

export const breakpointPlugin = (store) => {
  store.breakpointPlugin = new BreakpointPlugin({ store });
};

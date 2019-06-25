const BREAKPOINTS = require("@/design-tokens/screens.json");

const generateBreakpoints = (breakpoints) =>
  Object.keys(breakpoints).reduce((acc, name) => {
    acc[name] = false;
    return acc;
  }, {});

const generateBreakpointGetters = (breakpoints) =>
  Object.keys(breakpoints).reduce((acc, name) => {
    acc[`is${name}`] = (state) => state.breakpoints[name];

    return acc;
  }, {});

export const ui = {
  namespaced: true,
  state: {
    breakpoints: generateBreakpoints(BREAKPOINTS),
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    SET_BREAKPOINT(state, { name, matches }) {
      state.breakpoints[name] = matches;
    },
  },
  actions: {},
  getters: {
    ...generateBreakpointGetters(BREAKPOINTS),
    isMobile(state, getters) {
      return !getters.isTablet && !getters.isDesktop;
    },
    isTablet(state, getters) {
      return getters.isMd && !getters.isDesktop;
    },
    isDesktop(state, getters) {
      return getters.isLg;
    },
  },
};

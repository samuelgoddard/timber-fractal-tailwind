/* eslint-disable no-param-reassign */
export const mobileMenu = {
  namespaced: true,
  state: {
    items: [],
    menuExpanded: false,
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    TOGGLE_MENU(state) {
      state.menuExpanded = !state.menuExpanded;
		},
		CLOSE_MENU(state) {
			state.menuExpanded = false
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit("TOGGLE_MENU");
		},
		closeMenu({ commit }) {
      commit("CLOSE_MENU");
    },
  },
};

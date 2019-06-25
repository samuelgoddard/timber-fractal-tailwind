import Vue from "vue";
import Vuex from "vuex";

import { mobileMenu } from "./modules/mobileMenu";
import { ui } from "./modules/ui";

import { breakpointPlugin } from "./plugins/breakpoint";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
		mobileMenu,
		ui,
	},
	plugins: [breakpointPlugin]
});

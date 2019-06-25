<template>
	<div>
		<transition name="fade">
			<div class="fixed top-0 bottom-0 left-0 right-0 w-full z-40" v-if="menuExpanded" @click="closeMenu">
				<div class="w-full h-full bg-black opacity-75">
				</div>
			</div>
		</transition>
		<transition name="slide-fade">
			<div
				class="fixed top-0 bottom-0 right-0 w-4/5 bg-white z-50 overflow-y-scroll"
				id="mobile-menu"
				v-if="menuExpanded">

				<menu-toggle-button />

				<nav
					class="m-nav"
					role="navigation"
					aria-label="Main Navigation"
				>
					<ul>
						<nav-item v-for="item in items" :key="item.id" :item="item" />
					</ul>
				</nav>
			</div>
		</transition>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: mapMobileMenuState, mapActions: mapMobileMenuActions } = createNamespacedHelpers("mobileMenu");

import MenuToggleButton from "./MenuToggleButton";
import NavItem from "./NavItem";

export default {
	components: {
		MenuToggleButton,
		NavItem,
	},
  computed: {
    ...mapMobileMenuState(["menuExpanded", "items"]),
  },
  methods: {
		...mapMobileMenuActions(["toggleMenu", "closeMenu"]),
	},
	// @TODO this feels a bit janky but might be required?
	// watch: {
    // menuExpanded() {
		// 	if (this.menuExpanded) {
		// 		document.body.style.overflow = "hidden";
		// 	} else {
		// 		document.body.style.overflow = "";
		// 	}
    // }
  // }
};
</script>

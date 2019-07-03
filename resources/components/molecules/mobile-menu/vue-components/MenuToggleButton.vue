<template>
  <button
    :aria-label="label"
    class="btn ml-auto"
		:title="label"
    @click.prevent="toggleMenu"
  >
    <font-awesome-icon :icon="['far', icon]" />
  </button>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState: mapMobileMenuState, mapActions: mapMobileMenuActions } = createNamespacedHelpers("mobileMenu");

export default {
  computed: {
    ...mapMobileMenuState(["menuExpanded"]),
    label() {
      return this.menuExpanded ? "Hide Menu" : "Show Menu";
		},
		icon() {
			return this.menuExpanded ? "times" : "bars";
		}
  },
  methods: {
    ...mapMobileMenuActions(["toggleMenu"]),
  },
};
</script>

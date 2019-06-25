<template>
	<div v-if="!isMd">
		<menu-toggle-button />
		<menu-tray />
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import MenuToggleButton from "./MenuToggleButton";
import MenuTray from "./MenuTray";

const { mapGetters: mapUiGetters } = createNamespacedHelpers("ui");

export default {
  components: {
    MenuTray,
    MenuToggleButton,
	},
	computed: {
    ...mapUiGetters(["isMd"]),
  },
};
</script>

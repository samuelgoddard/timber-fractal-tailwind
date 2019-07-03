<template>
	<h6 :id="id" class="w-full block">
		<button
			:aria-controls="'accordion-panel-' + id"
      :aria-expanded="isExpanded"
      :aria-label="ariaLabel + ' ' + toggleLabel"
      :class="[...htmlClasses, isExpanded ? 'is--active' : '']"
      class="block btn--reset font-bold no-underline w-full border-b border-grey-base py-3 flex"
      @click.prevent="toggle">
				<span v-html="text" />
				<div class="ml-auto">
					<font-awesome-icon :icon="['far', expandIcon]"></font-awesome-icon>
				</div>
		</button>
	</h6>
</template>
<script>
import ToggleBase from "./ToggleBase";

export default {
	extends: ToggleBase,
};
</script>

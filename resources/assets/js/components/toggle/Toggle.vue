<template>
  <button
    :id="id"
    :aria-controls="'inner-' + id"
    :aria-label="ariaLabel"
    :aria-expanded="isExpanded"
    :class="[...htmlClasses, isExpanded ? 'is--active' : '']"
    class="block w-full
        text-left
        flex items-center"
    @click.prevent="toggle"
  >
    <span class="mr-2 text-accent-blue">
      <icon
        :icon="expandIcon"
        aria-role="presentational"
        width="6"
        height="6"
        class="text-accent-blue inline-block w-4"
      />
    </span>
    <!-- eslint-disable vue/no-v-html -->
    <span class="block trim font-bold" v-html="text" />
    <span class="text-accent-blue ml-auto text-sm">{{ isExpanded ? "Close" : "More" }}</span>
  </button>
</template>
<script>
import ToggleBase from "./ToggleBase";

export default {
  extends: ToggleBase,
};
</script>

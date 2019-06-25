<template>
	<li class="relative">
		<div v-if="item.children">
			<div class="flex">
				<a class="nav-item flex-1 has--dropdown" :class="item.class" :href="item.url" aria-haspopup="true" tabindex="0">
					{{ item.title }}
				</a>
				<button class="ml-auto" @click="toggle"><font-awesome-icon :icon="['far', 'angle-down']" /></button>
			</div>

			<ul aria-hidden="true" aria-label="subnav" v-if="isExpanded">
				<li v-for="item in item.children" :key="item.id">
					<a class="nav-item" :class="item.class" :href="item.url" tabindex="0">
					- {{ item.title }}
					</a>
				</li>
			</ul>
		</div>
		<div v-else>
			<a class="nav-item" :class="item.class" :href="item.url" tabindex="0">{{ item.title }}</a>
		</div>
	</li>
</template>

<script>
export default {
	props: {
    item: {
      type: Object,
      required: true,
		},
	},
	data: () => ({
    isExpanded: false,
	}),
	methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
  },
}
</script>

<style>

</style>

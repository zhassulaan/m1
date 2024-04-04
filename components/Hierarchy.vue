<template>
	<div class="hierarchy" v-if="isDevice">
		<nuxt-link to="/" class="hierarchy-link">{{ $t('main') }}</nuxt-link>
		<div v-for="(item, idx) in props.path" :key="idx">
			<span class="hierarchy-delimiter">·</span>
			<nuxt-link :to="generatePath(idx)" class="hierarchy-link" v-if="(idx < props.path.length - 1)">{{ item }}</nuxt-link>
			<span class="hierarchy-text" v-else>{{ item }}</span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	path: Array
});
const isDevice = useIsDevice();

function generatePath(idx) {
	// we don't need to count last element, cause its only text
	const levelsBack = (props.path.length - 1) - idx;
	const path = "./".repeat(levelsBack);
	return path;
}
</script>

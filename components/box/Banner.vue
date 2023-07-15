<template>
	<div class="banner-box" :class="(props.type == 1) ? 'box1' : 'box2'">
		<slot></slot>
	</div>
</template>

<script setup>
	const props = defineProps({
		type: Number,
	});
</script>

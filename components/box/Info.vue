<template>
	<div class="info-box">
		<h6 class="info-box__title">{{ item.title }}</h6>
		<div class="textbox">
			<p class="info-box__description">{{ item.text }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object
	});
</script>

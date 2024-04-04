<template>
	<div class="car-button">
		<h6 class="text" v-if="type">{{ $t('replace_oil') }}</h6>
		<h6 class="text" v-if="!type">{{ $t('replace_wheel') }}</h6>
		<icon-oil class="icon" v-if="type" />
		<icon-wheel class="icon" v-if="!type" />
		<Button :type="1" :text="$t('replace')" />
	</div>
</template>

<script setup>
const props = defineProps({
	type: Number
});
</script>

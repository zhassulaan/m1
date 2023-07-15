<template>
	<div class="header">
		<Navbar v-if="isDevice"/>
		<Control @open="emit('open');" />
	</div>
</template>

<script setup>
	const isDevice = useIsDevice();
	const emit = defineEmits("open");
</script>
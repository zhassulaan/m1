<template>
	<div class="contact-boxes" v-if="isDevice">
		<div class="box" :class="{ 'active': address === 1 }" @click="address = 1">
			<h6 class="box-address">М1 Рыскулова</h6>
			<p class="box-location">Жарокова, 151, уг. ул. Сатпаева</p>
		</div>
		<div class="box" :class="{ 'active': address === 2 }" @click="address = 2">
			<h6 class="box-address">М1 Рыскулова</h6>
			<p class="box-location">Рыскулова 57В</p>
		</div>
		<div class="box" :class="{ 'active': address === 3 }" @click="address = 3">
			<h6 class="box-address">М1 Жарокова</h6>
			<p class="box-location">Байтурсынова, 131</p>
		</div>
		<div class="box" :class="{ 'active': address === 4 }" @click="address = 4">
			<h6 class="box-address">М1 Рыскулова</h6>
			<p class="box-location">Рыскулова 57В</p>
		</div>
		<div class="box" :class="{ 'active': address === 5 }" @click="address = 5">
			<h6 class="box-address">М1 Садовникова</h6>
			<p class="box-location">Садовникова, 99</p>
		</div>
	</div>
	<div class="contact-boxes" v-else>
		<span>
			<h6 class="contact-boxes__title">{{ branch.title }}</h6>
			<p class="contact-boxes__description">{{ branch.description }}</p>
		</span>
		<icon-chevron-blue class="btn" @click="openModal" />
	</div>
	<div class="contact-map">
		<img src="@/assets/images/map.png" alt="map">
	</div>
</template>

<script setup>
	const props = defineProps({
		branch: Object,
	});
	const emit = defineEmits(["open"]);
	const isDevice = useIsDevice();
	const address = ref(1);

	function openModal() {
		emit("open");
	};
</script>

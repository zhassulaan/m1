<template>
	<div class="car-description">
		<img :src="car.mark.image" alt="Logo" class="car-description__logo" />
		<div class="car-description__info">
			<h6 class="title">{{ car.mark.name }}</h6>
			<p class="text">
				{{ $t('mileage') }}
				<b>{{ car.mileage }}</b>
			</p>
			<p class="text">
				{{ $t('issue_year') + ':' }}
				<b>{{ car.year_manufacture }}</b>
			</p>
			<p class="text">
				VIN: 
				<b>{{ car.vin_code }}</b>
			</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		car: Object
	});
</script>

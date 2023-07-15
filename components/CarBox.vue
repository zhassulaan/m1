<template>
	<div class="car btn">
		<img :src="item.mark.image" :alt="item.name" class="car-image" />
		<div class="car-info">
			<h6 class="car-info__title">{{ item.mark.name }} {{ item.model }}</h6>
			<p class="car-info__description">Пробег: {{ item.mileage }} тыс.км.</p>
			<p class="car-info__description">Год выпуска: {{ item.year_manufacture }}</p>
			<p class="car-info__description">VIN: {{ item.vin_code }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object,
	});
</script>

<style scoped lang="scss">
	.car {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		width: 424px;
		height: 156px;
		background-color: #FFF;
		border: 2px solid #FFF;
		border-radius: 12px;
		padding: 18px 18px 21px;
		&.active {
			border: 2px solid #EC3832;
		}
		&-image {
			margin: auto;
		}
		&-info {
			width: 243px;
			&__title,
			&__description {
				line-height: 100%;
			}
			&__title {
				font-size: 20px;
				margin-bottom: 21px;
			}
			&__description {
				font-size: 16px;
				margin-top: 12px;
			}
		}
	}

</style>

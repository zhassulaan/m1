<template>
	<div class="button btn" :class="type === 1 ? 'blue' : 'red'">
		<h6 class="button-text">{{ props.text }}</h6>
  </div>
</template>

<script setup>
	const props = defineProps({
		type: Number,
		text: String,
	});
</script>

<style scoped lang="scss">
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		&-text {
			white-space: nowrap;
			font-size: 18px;
			color: #FFF;
		}
	}
	.blue {
		background-color: #325BEC;
	}
	.red {
		background-color: #EC3832;
	}
	@media screen and (max-width: 1279px) {
		.button-text {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 1023px) {
		.button {
			&-text {
				font-size: 14px;
			}
			&.active {
				border-width: 1px;
			}
		}
	}
	@media screen and (max-width: 991px) {
		.button-text {
			font-size: 11px;
		}
	}
	@media screen and (max-width: 767px) {
		.button-text {
			font-size: 9px;
		}
	}
	@media screen and (max-width: 480px) {
		.button-text {
			font-size: 12px;
		}
	}
</style>

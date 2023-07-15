<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="input"
    v-model="input"
  />
</template>

<script setup>
	const props = defineProps({
		placeholder: String,
		type: String,
	});

	const input = "";

	watch(input, () => {
		getValue();
	});
	function getValue() {
		emit("input", input);
	}
	</script>

	<style scoped lang="scss">
	.input {
		width: 100%;
		font-size: 15px;
		font-weight: 400;
		line-height: 18px;
		color: #2C2C2C;
		&::placeholder {
			color: #2C2C2C75;
		}
	}
	@media screen and (max-width: 1279px) {
		.input {
			font-size: 14px;
			line-height: 17px;
		}
	}
	@media screen and (max-width: 1023px) {
		.input {
			font-size: 13px;
		}
	}
	@media screen and (max-width: 1023px) {
		.input {
			font-size: 12px;
			line-height: 15px;
		}
	}
	@media screen and (max-width: 767px) {
		.input {
			font-size: 11px;
			line-height: 13px;
		}
	}
	@media screen and (max-width: 480px) {
		.input {
			font-size: 15px;
			line-height: 18px;
		}
	}
</style>

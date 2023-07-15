<template>
  <textarea
    :placeholder="placeholder"
    class="textarea"
    v-model="input"
  >
  </textarea>
</template>

<script setup>
	const props = defineProps({
		placeholder: String,
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
	.textarea {
		width: 100%;
		height: 100%;
		background-color: #EDEDED;
		border: none;
		border-radius: 10px;
		padding: 13.33px .972222vw;
		font-size: 15px;
		font-weight: 400;
		line-height: 18px;
		color: #7B7C85;
		&::placeholder {
			color: #7B7C85;
		}
	}
	@media screen and (max-width: 1279px) {
		.textarea {
			font-size: 14px;
			line-height: 17px;
		}
	}
	@media screen and (max-width: 1023px) {
		.textarea {
			font-size: 13px;
		}
	}
	@media screen and (max-width: 991px) {
		.textarea {
			font-size: 12px;
			line-height: 15px;
		}
	}
	@media screen and (max-width: 767px) {
		.textarea {
			font-size: 11px;
			line-height: 13px;
		}
	}
	@media screen and (max-width: 480px) {
		.textarea {
			font-size: 15px;
			line-height: 18px;
			padding: 14px 3.589744vw;
		}
	}
</style>

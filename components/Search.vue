<template>
  <label for="search" class="search" :class="{ 'active': isActive }">
		<icon-search-black class="icon" v-if="isDevice" />
    <input
      type="text"
      :placeholder="placeholder"
      id="search"
      class="search-input"
      v-model="input"
      @focus="isActive = true"
      @blur="isActive = false"
    />
		<div class="button btn" v-if="!isDevice">
			<icon-search-white class="button-icon" />
		</div>
		<Button :type="1" :text="$t('search')" v-if="isDevice" />
  </label>
</template>

<script setup>
const props = defineProps({
	placeholder: String
});
const isDevice = useIsDevice();
const isActive = ref(false);
const input = "";

watch(input, () => {
	getValue();
});
function getValue() {
	emit("input", input);
}
</script>

<style scoped lang="scss">
.search {
	display: flex;
	align-items: center;
	gap: 11px;
	width: 100%;
	background-color: #FFF;
	border: 2px solid #FFF;
	border-radius: 6px;
	padding: 2px 2px 2px 18px;
	&-input {
		width: 100%;
		font-size: 14px;
		font-weight: 400;
		line-height: 19px;
		color: #5B5B5B;
		&::placeholder {
			color: #5B5B5B;
		}
	}
	.button {
		min-width: 6.597222vw;
		height: 46px;
	}
	&.active {
		border: 2px solid #325BEC;
	}
}
@media screen and (max-width: 1280px) {
	.search {
		&-input {
			font-size: 13px;
		}
		.button {
			height: 42px;
		}
	}
}
@media screen and (max-width: 1024px) {
	.search {
		border-width: 1px;
		&-input {
			font-size: 12px;
		}
		.button {
			height: 36px;
		}
	}
}
@media screen and (max-width: 992px) {
	.search {
		&-input {
			font-size: 10px;
		}
		.button {
			height: 30px;
		}
	}
}
@media screen and (max-width: 768px) {
	.search .button {
		min-width: 40px;
		height: 28px;
	}
}
@media screen and (max-width: 480px) {
	.search {
		gap: 2vw;
		border-radius: 6px;
		padding: 1px 1px 1px 19px;
		&-input {
			font-size: 12px;
			line-height: 16px;
		}
		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 33px;
			height: 33px;
			background-color: #325BEC;
			border-radius: 6px;
		}
	}
}
</style>

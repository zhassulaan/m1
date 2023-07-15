<template>
	<div class="lang btn" @click="isOpen = !isOpen">
		<label class="lang-text" for="locale-select">{{ $t('lang') }}</label>
		<icon-chevron-grey class="lang-icon" />
		<lang-dropdown v-if="isOpen" />
	</div>
</template>

<script setup>
	const isOpen = ref(false);
</script>

<style scoped lang="scss">
	.lang {
		position: relative;
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 1px 0;
		margin: 0 0 26px .5555556vw;
		&-text {
			width: 20px;
			text-align: center;
			font-size: 14px;
			font-weight: 500;
			line-height: 18px;
			color: #39424B;
		}
		&-icon {
			width: 20px;
		}
	}
</style>

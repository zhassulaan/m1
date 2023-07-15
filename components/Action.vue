<template>
	<div class="action btn">
		<slot name="icon"></slot>
		<slot name="text" class="action-text"></slot>
		<slot name="icon2"></slot>
	</div>
</template>

<style scoped lang="scss">
	.action {
		display: flex;
		align-items: center;
	}
</style>

<template>
	<div class="opener btn">
		<icon-chevron-blue class="opener-icon" />
  </div>
</template>

<style scoped lang="scss">
.opener {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	background-color: rgba(255, 255, 255, .8);
	border-radius: 50%;
	&-icon {
		width: 80%;
		transform: rotate(-90deg);
	}
}
@media screen and (max-width: 1439px) {
	.opener {
		width: 39px;
		height: 39px;
	}
}
@media screen and (max-width: 1279px) {
	.opener {
		width: 36px;
		height: 36px;
	}
}
@media screen and (max-width: 1279px) {
	.opener {
		width: 28px;
		height: 28px;
	}
}
@media screen and (max-width: 1279px) {
	.opener {
		width: 24px;
		height: 24px;
	}
}
</style>

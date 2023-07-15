<template>
	<div class="dropdown">
		<p class="dropdown-text btn" @click="$i18n.locale = 'ru'; saveLang('ru');">RU</p>
		<p class="dropdown-text btn" @click="$i18n.locale = 'kz'; saveLang('kz');">KZ</p>
  </div>
</template>

<style scoped lang="scss">
	.dropdown {
		position: absolute;
		top: 23px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		width: 45px;
		height: 35px;
		background-color: #FFF;
		box-shadow: 0 1px 4px rgba(59, 74, 103, .25);
		border-radius: 3px;
		padding: 2px 3px;
		&-text {
			font-size: 12px;
			font-weight: 500;
			line-height: 14px;
			color: #39424B;
		}
	}
</style>

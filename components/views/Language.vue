<template>
	<div class="language views">
		<div class="views-header">
			<icon-chevron-grey class="close btn" @click="closeView" />
			<h3 class="title">{{ $t('languages') }}</h3>
		</div>
		<div class="language-item" :class="{ 'active': $i18n.locale === 'kz' }" @click="$i18n.locale = 'kz'; saveLang('ru');">
			<p class="text">{{ $t('kz') }}</p>
			<p class="checkbox"></p>
		</div>
		<div class="language-item" :class="{ 'active': $i18n.locale === 'ru' }" @click="$i18n.locale = 'ru'; saveLang('kz');">
			<p class="text">{{ $t('ru') }}</p>
			<p class="checkbox"></p>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits("close");

	function closeView() {
		emit("close");
	};
</script>


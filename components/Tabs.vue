<template>
	<div class="tabs">
		<div class="tabs-content" @click="moveTo('')">
			<icon-mobile-home />
			<p class="text">{{ $t('main') }}</p>
		</div>
		<div class="tabs-content" @click="moveTo('profile/garage')">
			<icon-mobile-garage />
			<p class="text">{{ $t('garage') }}</p>
		</div>
		<div class="tabs-content" @click="moveTo('profile/bonuses')">
			<icon-mobile-sale />
			<p class="text">{{ $t('bonuses') }}</p>
		</div>
		<div class="tabs-content" @click="moveTo('support')">
			<icon-mobile-support />
			<p class="text">{{ $t('support') }}</p>
		</div>
		<div class="tabs-content" @click="moveTo('profile')">
			<icon-mobile-user />
			<p class="text">{{ $t('profile') }}</p>
		</div>
	</div>
</template>

<script setup>
	const router = useRouter();
	const emit = defineEmits("close");

	function moveTo(url) {
		emit("close");
		router.push(`/${ url }`)
	}
</script>

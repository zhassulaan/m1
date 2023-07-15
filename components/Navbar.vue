<template>
	<nav class="navbar">
		<div class="navbar-left">
			<icon-logo-white class="navbar-left__logo btn" @click="router.push('/')" />
			<div class="navbar-left__list">
				<p @click="router.push('/#advantages')" class="text">{{ $t('advantages')}}</p>
				<p @click="router.push('/services')" class="text">{{ $t('services')}}</p>
				<p @click="router.push('/#bonuses')" class="text">{{ $t('bonuses')}}</p>
				<p @click="router.push('/works')" class="text">{{ $t('works')}}</p>
				<p @click="router.push('/discount')" class="text">{{ $t('discounts')}}</p>
				<p @click="router.push('/news')" class="text">{{ $t('news')}}</p>
			</div>
		</div>
		<div class="navbar-right">
			<div class="location">
				<icon-location-grey class="icon" />
				<p class="text">{{ $t('country') }}</p>
			</div>
			<nuxt-link to="mailto:info_m1mobil@mail.ru" class="text">info_m1mobil@mail.ru</nuxt-link>
			<nuxt-link to="tel:+77008008080" class="text">+7 700 800 80 80</nuxt-link>
			<nuxt-link to="tel:+77990090909" class="text">+7 799 009 09 09</nuxt-link>
		</div>
  </nav>
</template>

<script setup>
	const router = useRouter();
</script>

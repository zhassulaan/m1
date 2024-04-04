<template>
	<footer class="footer">
		<div class="footer-left">
			<icon-logo-white class="footer-left__logo btn" @click="router.push('/')" />
			<div class="footer-left__list">
				<div class="location">
					<icon-location-grey />
					<p class="text">{{ $t('country') }}</p>
				</div>
				<nuxt-link to="mailto:info_m1mobil@mail.ru" class="text">info_m1mobil@mail.ru</nuxt-link>
				<nuxt-link to="tel:+77008008080" class="text">+7 700 800 80 80</nuxt-link>
				<nuxt-link to="tel:+77990090909" class="text">+7 799 009 09 09</nuxt-link>
			</div>
		</div>
		<div class="footer-right">
			<p @click="router.push('/#advantages')" class="text">{{ $t('advantages')}}</p>
			<p @click="router.push('/#bonuses')" class="text">{{ $t('bonuses')}}</p>
			<p @click="router.push('/discount')" class="text">{{ $t('discounts')}}</p>
			<p @click="router.push('/services')" class="text">{{ $t('services')}}</p>
			<p @click="router.push('/works')" class="text">{{ $t('works')}}</p>
			<p @click="router.push('/news')" class="text">{{ $t('news')}}</p>
			<p @click="router.push('/contacts')" class="text">{{ $t('contacts') }}</p>
		</div>
  </footer>
</template>

<script setup>
const router = useRouter();
</script>

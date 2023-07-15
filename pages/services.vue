<template>
	<div class="services container">
		<hierarchy :pahh="[$t('services')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/')" />
		<h3 class="container-title">{{ $t('services') }}</h3>
		<search :placeholder="'Поиск по услугам'" />
		<p class="services-text" v-if="isDevice">{{ $t('services_text') }}</p>
		<p class="services-text" v-if="!isDevice">{{ $t('services') }}</p>
		<div class="services-content">
			<box-service :item="serviceItem" :withImage="true" v-for="(serviceItem, idx) in services.results" :key="idx" />
		</div>
	</div>
</template>

<script setup>
	const isDevice = useIsDevice();
	const router = useRouter();
	const { data: services } = await useFetch('http://86.107.45.124:8007/api/service/category/');
</script>

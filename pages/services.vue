<template>
	<div class="services container">
		<hierarchy :path="[$t('services')]"/>
		<icon-chevron-grey v-if="!isDevice" class="close btn" @click="router.push('/')" />
		<h3 class="container-title">{{ $t('services') }}</h3>
		<search :placeholder="'Поиск по услугам'" />
		<p v-if="isDevice" class="services-text">{{ $t('services_text') }}</p>
		<p v-if="!isDevice" class="services-text">{{ $t('services') }}</p>
		<div class="services-content">
			<box-service :item="serviceItem" :withImage="true" v-for="(serviceItem, id) in services.results" :key="id" />
		</div>
	</div>
</template>

<script setup>
	const isDevice = useIsDevice();
	const router = useRouter();
	const { data: services } = await useFetch('http://86.107.45.124:8007/api/service/category/');
</script>

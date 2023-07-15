<template>
	<div class="discount-detail container">
		<hierarchy :path="[$t('company_discount'), $t('discount')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/discount')" />
		<h3 class="container-title">{{ $t('discount') }}</h3>
		<box-discount :item="detail" />
		<p class="discount-detail__subtitle">{{ detail.subtitle }}</p>
		<p class="discount-detail__text">{{ detail.text }}</p>
	</div>
</template>

<script setup>
	const route = useRoute();
	const router = useRouter();
	const isDevice = useIsDevice();
	const { data: discounts } = await useFetch('http://86.107.45.124:8007/api/service/action/');
	const detail = discounts.value.results.find(item => (item.id == route.params.id));
</script>

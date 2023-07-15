<template>
	<div class="discount container">
		<hierarchy :path="[$t('company_discount')]"/>
		<h3 class="container-title">{{ $t('company_discount') }}</h3>
		<pagination :items="discounts.results" :itemsPerPage="5">
			<template v-slot="{ paginationObject }">
				<box-discount :item="paginationObject" />
				<p class="text">{{ paginationObject.text }}</p>
			</template>
		</pagination>
	</div>
</template>

<script setup>
const { data: discounts } = await useFetch('http://86.107.45.124:8007/api/service/action/');
</script>
	
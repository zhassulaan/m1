<template>
	<div class="works container">
		<hierarchy :path="[$t('works')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/')" />
		<h3 class="container-title">{{ $t('works') }}</h3>
		<pagination :items="works.results" :itemsPerPage="5">
			<template v-slot="{ paginationObject }">
				<box-work :item="paginationObject" />
			</template>
		</pagination>
	</div>
</template>

<script setup>
	const isDevice = useIsDevice();
	const router = useRouter();
	const { data: works } = await useFetch('http://86.107.45.124:8007/api/main_page/our_works/');
</script>
	
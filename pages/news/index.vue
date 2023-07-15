<template>
	<div class="news container">
		<hierarchy :path="[$t('news')]"/>
		<h3 class="container-title">{{ $t('news') }}</h3>
		<pagination :items="news.results" :itemsPerPage="computedItemsPerPage">
			<template v-slot="{ paginationObject }">
				<box-news :item="paginationObject" />
			</template>
		</pagination>
	</div>
</template>

<script setup>
	import { useI18n } from "vue-i18n";

	const { locale } = useI18n();
	const { data: news } = await useFetch('http://86.107.45.124:8007/api/main_page/news/', {
		headers: {
			"Accept-Language": locale.value,
		},
	});

	const computedItemsPerPage = computed(() => {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 768) {
				return 9;
			} else if (window.innerWidth < 768 && window.innerWidth > 480) {
				return 8;
			} else {
				return 5;
			}
		}
	});
</script>
	
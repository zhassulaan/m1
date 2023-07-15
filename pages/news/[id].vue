<template>
	<div class="news-detail container">
		<hierarchy :path="[$t('news')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/news')" />
		<h3 class="container-title">{{ $t('news') }}</h3>
		<div class="news-detail__content">
			<box-news :item="detail" :detail="true" />
		</div>
		<div class="news-detail__similar">
			<h6 class="title">{{ $t('other_news') }}</h6>
			<div class="boxes">
				<box-news :item="newsItem" v-for="(newsItem, idx) in news.results.slice(0, 3)" :key="idx"/>
			</div>
		</div>
	</div>
</template>

<script setup>
	const router = useRouter();
	const route = useRoute();
	const isDevice = useIsDevice();
	const { data: news } = await useFetch('http://86.107.45.124:8007/api/main_page/news/');
	const detail = news.value.results.find(item => (item.id == route.params.id));
</script>

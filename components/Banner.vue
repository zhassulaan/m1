<template>
	<swiper :modules="modules" :pagination="paginationOptions" :loop="true" class="banner">
		<swiper-slide v-for="item in items" :key="item?.id">
			<slot :swipperObject="item"></slot>
		</swiper-slide>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		items: Array
	});
	const paginationOptions = {
		clickable: true,
		dynamicBullets: false
	};
	const modules = [SwiperPagination];
</script>

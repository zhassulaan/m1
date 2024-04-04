<template>
	<swiper v-bind="swiperOptions" :modules="hasPagination && modules" :pagination="hasPagination && paginationOptions" class="slider" :class="{ 'active': hasPagination }" @swiper="onSwiper">
		<swiper-slide v-for="(item, id) in items" :key="id">
			<slot :sliderObject="item"></slot>
		</swiper-slide>
		
		<div v-if="hasPagination" class="swiper-button-prev" @click="goToPrevSlide">
			<icon-prev />
		</div>
		<div v-if="hasPagination" class="swiper-button-next" @click="goToNextSlide">
			<icon-next />
		</div>
	</swiper>
</template>

<script setup>
const props = defineProps({
	items: Array,
	hasPagination: {
		type: Boolean,
		default: true
	}
});
const swiperOptions = {
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 0
};
const paginationOptions = {
	clickable: true,
	dynamicBullets: false
};
const modules = [SwiperPagination];
let swiperInstance;

function onSwiper(swiper) {
	swiperInstance = swiper;
}
function goToPrevSlide() {
	if (swiperInstance)
		swiperInstance.slidePrev();
}
function goToNextSlide() {
	if (swiperInstance)
		swiperInstance.slideNext();
}
</script>

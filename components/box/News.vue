<template>
	<div class="news-box" @click="moveTo()">
		<img :src="item.image" alt="" class="news-box__image" />
		<div class="news-box__content">
			<p class="news-box__content-date">{{ item.created_at }}</p>
			<h6 class="news-box__content-title">{{ item.title }}</h6>
			<p :class=" detail ? 'news-box__content-text' : 'news-box__content-description'">{{ item.text }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
		item: Object,
		detail: Boolean
	});
	const route = useRouter();
	const moveTo = () => route.push({ name: "news-id", params: { id: props.item.id } });
</script>

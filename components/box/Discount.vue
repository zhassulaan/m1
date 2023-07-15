<template>
	<div class="discount-box">
		<img :src="item.image" :alt="item.title" class="discount-box__image" />
		<div class="discount-box__info">
			<h6 class="date">{{ `${ item.started_at } - ${ item.ended_at }` }}</h6>
			<h1 class="title">{{ item.title }}</h1>
			<p class="subtitle">{{ item.text }}</p>
			<Button :text="$t('more')" @click="moveTo()" />
		</div>
		<div class="discount-box__background"></div>
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object,
	});

	const route = useRouter();
	const moveTo = () => route.push({ name: "discount-id", params: { id: props.item.id } });
</script>

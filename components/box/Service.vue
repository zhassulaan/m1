<template>
	<div class="service-box" :class="{ 'not_active': !isOpen }">
		<img :src="item.image" class="service-box__image" v-if="withImage" />
		<div class="service-box__info">
			<div class="service-box__info-header">
				<img :src="item.icon" :alt="item.name" class="icon" />
				<h6 class="title">{{ item.name }}</h6>
				<icon-chevron-blue class="btn" :class="{ 'active': isOpen }" v-if="!isDevice" @click="isOpen = !isOpen" />
			</div>

			<div
				class="service-box__info-body"
				:class="{ 'show': mouseOver }"
				v-if="isDevice || isOpen"
				@mouseover="mouseOver = true"
				@mouseleave="mouseOver = false"
			>
				<div class="textbox">
					<p :key="id" v-for="(serviceItem, id) in item.services" class="text">
						<input type="checkbox" v-if="withCheckbox" v-model="isChecked[id]" />
						{{ serviceItem.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object,
		withImage: Boolean,
		withCheckbox: Boolean
	});
	const isDevice = useIsDevice();
	const isOpen = ref(false);
	const isChecked = ref([]);
	const mouseOver = ref(false);
</script>

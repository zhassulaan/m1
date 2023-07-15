<template>
	<div class="schedule_modal">
		<div class="schedule_modal-background" @click="closeModal"></div>
		<div class="schedule_modal-content">
			<div class="schedule_modal-content__header">
				<icon-x @click="closeModal" />
			</div>
			<div class="schedule_modal-content__list">
				<div class="schedule_modal-content__list-item btn" :class="{ 'active': item === time }" v-for="(item, idx) in props.items" :key="idx" @click="select(item)">
					<h6 class="title" :class="{ 'active-text': item === time }">{{ item }}</h6>
				</div>
			</div>
			<Button :type="1" :text="$t('choose')" @click="submitScedule" />
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		items: Array,
		time: String,
	});
	const emit = defineEmits(["close", "confirm"]);
	const time = ref(props.time);

	function closeModal() {
		emit("close");
	};
	function select(item) {
		time.value = item;
	};
	function submitScedule() {
		emit("confirm", time.value);
		emit("close");
	};
</script>

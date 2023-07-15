<template>
	<div class="branch">
		<div class="branch-background" @click="closeModal"></div>
		<div class="branch-content">
			<div class="branch-content__header">
				<h6 class="branch-content__header-text">{{ $t('choose_filial') }}</h6>
				<icon-x @click="closeModal" />
			</div>
			<div class="branch-content__list">
				<div class="branch-content__list-item btn" :class="{ 'active': item.id === branch?.id }" v-for="item in props.branches" :key="item.id" @click="select(item)">
					<h6 class="title" :class="{ 'active-text': item.id === branch?.id }">{{ item.title }}</h6>
					<p class="description" v-if="item.description ">{{ item.description }}</p>
				</div>
			</div>
			<Button :type="1" :text="$t('choose')" @click="submitBranch" />
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		branches: Array,
		branch: Object,
	});
	const emit = defineEmits(["close", "confirm"]);
	const branch = ref(props.branch);

	function closeModal() {
		emit("close");
	};
	function select(item) {
		branch.value = item;
	};
	function submitBranch() {
		emit("confirm", branch.value);
		emit("close");
	};
</script>

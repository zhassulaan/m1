<template>
	<div class="notification-modal">
		<div class="notification-modal__background" @click="closeModal"></div>
		<div class="notification-modal__content">
			<icon-x class="close btn" @click="closeModal" />
			<h6 class="title">{{ $t('rate_service') + '!' }}</h6>
			<div class="star">
				<icon-star
					v-for="i in 5"
					:key="i"
					:class="{ 'active': i <= rating }"
					@click="updateRating(i)"
				/>
			</div>
			<p class="text">{{ $t('comment') }}</p>
			<Txtarea :placeholder="$t('write') + '...'" v-model="comment" />
			<Button :type="1" :text="$t('rate')" @click="submit" />
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits("close");
	const rating = ref(0);
	const comment = ref("");

	function updateRating(rate) {
		rating.value = rate;
	};
	function closeModal() {
		emit("close");
		document.body.classList.remove("freeze");
	};
	function submit() {
		closeModal();
		console.log(rating, comment);
	};
</script>

<template>
	<div class="modify">
		<div class="modify-background" @click="closeModal"></div>
		<div class="modify-content">
			<h6 class="modify-content__header">{{ $t('change') }}</h6>
			<div class="modify-content__form">
				<Input :type="'text'" :placeholder="$t('name') + ':'" v-model="item.name" />
				<!-- <Input :type="'text'" :placeholder="$t('phone_number') + ':'" v-model="item.phone" /> -->
				<Input :type="'text'" :placeholder="$t('city') + ':'" v-model="item.city" />
			</div>
			<div class="modify-content__footer">
				<Button :type="1" :text="$t('save')" @click="modify" />
				<Button :type="1" :text="$t('cancel')" @click="closeModal" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits(["close"]);
	const item = {
		name: "",
		city: ""
	};

	function closeModal() {
		emit("close");
	};
	async function modify() {
		if (item.name) {
			const response = await useFetch('http://86.107.45.124:8007/api/user/user_information/', {
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${ getAccessToken() }`
				},
				body: JSON.stringify({
					"name": item.name
				})
			});
			closeModal();
		}
	};
</script>

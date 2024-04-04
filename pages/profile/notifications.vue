<template>
	<div class="notifications container">
		<hierarchy :path="[$t('card'), $t('notification')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/')" />
		<h4 class="container-title">{{ $t('notification') }}</h4>
		<div v-if="user" class="profile-content">
			<div class="notifications-container">
				<div class="notifications-container__box" v-for="(notificationItem, idx) in notifications" :key="idx">
					<p class="date">{{ notificationItem.date }}</p>
					<div class="notifications-container__box-content">
						<p class="title">{{ notificationItem.title }}</p>
						<p class="service" :class="{ 'active': notificationItem.rated }"  v-for="(text, idx) in notificationItem.services" :key="idx">{{ text }}</p>
					</div>
					<p class="time" v-if="!isDevice">{{ notificationItem.time }}</p>
					<Button :type="1" :text="$t('rate_work')" v-if="!notificationItem.rated" @click="openModal" />
				</div>
			</div>
			<modal-notification v-if="modal" @close="modal = false" />
			<Menu :canEdit="false" />
		</div>
	</div>
</template>

<script setup>
	import { notifications } from "@/assets/data";

	const router = useRouter();
	const isDevice = useIsDevice();
	const modal = ref(false);

	const user = await getUserInfo();
	if (!user) {
		router.push('/profile');
  };

	function openModal() {
		modal.value = true;
		document.body.classList.add("freeze");
	};
</script>

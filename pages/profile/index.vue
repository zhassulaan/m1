<template>
	<div v-if="user" class="profile container">
		<hierarchy :path="[$t('card')]"/>
		<h3>{{ $t('card') }}</h3>
		<div class="profile-content">
			<div class="profile-content__mainbox">
				<p class="label">{{ $t('client') }}:</p>
				<h6 class="name">{{ user.name || user.username }}</h6>
				<div class="avatar">
					<input type="file" accept="image/*" class="btn" @change="changeAvatar">
					<img :src="user.image" alt="Avatar" class="avatar-image" v-if="user.image" />
					<icon-mobile-user class="avatar-icon" v-if="!user.image" />
				</div>
				<div class="notification">
					<p class="notification-text">{{ $t('notifications') }}</p>
					<div class="notification-button btn" :class="{ 'active': user.allow_massages }" @click="notify()">
						<div class="notification-button__switch"></div>
					</div>
				</div>
				<Button :text="$t('logout')" v-if="isDevice" @click="removeAuthTokens()" />
				<action class="menu-edit" v-if="!isDevice" @click="edit = true">
					<template #icon>
						<icon-pencil />
					</template>
					<template #text>
						<h6	class="action-text">{{ $t('change') }}</h6>
					</template>
				</action>
			</div>
			<div class="profile-content__infobox">
				<div class="profile-content__infobox-row">
					<p class="label">{{ $t('reg_date') }}:</p>
					<h6 class="text">07.05.2023</h6>
				</div>
				<div class="profile-content__infobox-row">
					<p class="label">{{ $t('city') }}:</p>
					<h6 class="text">Алматы</h6>
				</div>
				<div class="profile-content__infobox-row">
					<p class="label">{{ $t('phone_number') }}:</p>
					<h6 class="text">{{ user.username }}</h6>
				</div>
				<div class="profile-content__infobox-row">
					<p class="label">{{ $t('region_filial') }}:</p>
					<h6 class="text">{{ selecctedBranch.title + ", " + selecctedBranch.description }}</h6>
				</div>
				<action @click="modal = true">
					<template #icon>
						<icon-location-blue />
					</template>
					<template #text>
						<h6 class="action-text">{{ $t('choose_another_filial') }}</h6>
					</template>
				</action>
			</div>
			<Menu :canEdit="true" @editing="edit = true" />
		</div>
		<modal-modify v-if="edit" @close="edit = false"/>
		<modal-branch v-if="modal" :branches="branches" :branch="selecctedBranch" @close="modal = false" @confirm="selectBranch"/>
	</div>
	<div v-else class="profile container">
		<hierarchy :path="[$t('profile')]"/>
		<modal-auth />
	</div>
</template>

<script setup>
	import { branches } from "~/data";

	const isDevice = useIsDevice();
	const user = await getUserInfo();
	const modal = ref(false);
	const edit = ref(false);
	let selecctedBranch = branches[0];

	async function notify() {
		const response = await useFetch('http://86.107.45.124:8007/api/user/user_information/', {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ getAccessToken() }`
			},
			body: JSON.stringify({
				"allow_massages": !user.value.allow_massages,
			}),
		});
		user = await getUserInfo();
	};
	function selectBranch(branch) {
		selecctedBranch = branch;
	}
	async function changeAvatar(event) {
		const file = event.target.files[0];
		let formData = new FormData();
		formData.append('avatar', file, "avatar.png");

		const response = await useFetch('http://86.107.45.124:8007/api/user/user_information/', {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ getAccessToken() }`
			},
			body: JSON.stringify({
				"image": formData,
			}),
		});
	};
</script>

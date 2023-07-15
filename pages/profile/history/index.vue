<template>
	<div class="history container">
		<hierarchy :path="[$t('card'), $t('history')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/profile')" />
		<h4 class="container-title">{{ $t('history') }}</h4>
		<div v-if="user" class="profile-content">
			<div class="history-container">
				<div class="history-container__date">
					<action @click="dropdown = !dropdown">
						<template #icon>
							<icon-chevron-blue />
						</template>
						<template #text>
							<h6	class="action-text">{{ $t('date') }}</h6>
						</template>
					</action>
					<div class="history-container__date-dropdown" v-if="dropdown">
						<p class="text">{{ $t('yesterday') }}</p>
						<p class="text">{{ $t('week_ago') }}</p>
						<p class="text">{{ $t('month_ago') }}</p>
						<p class="text">{{ $t('year_ago') }}</p>
					</div>
				</div>
				<pagination :items="histories" :itemsPerPage="6">
					<template v-slot="{ paginationObject }">
						<div class="info">
							<p class="text">{{ `${ $t('date') }: ${ paginationObject.start }` }}</p>
							<p class="text">{{ `${ $t('mark') }: ${ paginationObject.car }` }}</p>
						</div>
						<div class="more" @click="moveTo(paginationObject.id)">
							<p class="text">{{ $t('more') }}</p>
							<icon-chevron-blue class="icon" />
						</div>
					</template>
				</pagination>
			</div>
			<Menu :canEdit="true" />
		</div>
	</div>
</template>

<script setup>
	const dropdown = ref(false);
	const router = useRouter();
	const isDevice = useIsDevice();

	const user = await getUserInfo();
	if (!user) {
		router.push('/profile');
	}
	const { data: histories } = await useFetch('http://86.107.45.124:8007/api/reserve/user_history/', {
		headers: {
			Authorization: `Bearer ${ getAccessToken() }`
		},
	});

	function moveTo(url) {
		router.push(`/profile/history/${ url }`);
	}
</script>

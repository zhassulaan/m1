<template>
	<div class="garage container">
		<hierarchy :path="[$t('card'), $t('garage')]"/>
		<div class="garage-header">
			<h3>{{ $t('garage') }}</h3>
			<action>
				<template #icon>
					<icon-x-red />
				</template>
				<template #text>
					<h6	class="action-text">{{ $t('delete_all') }}</h6>
				</template>
			</action>
		</div>
		<div v-if="user" class="garage-container">
			<div class="garage-container__box" v-for="(carItem, idx) in garage.cars" :key="idx">
				<div class="close btn">
					<icon-x-red />
				</div>
				<box-car-description :car="carItem" />
				<action class="garage-container__box-history">
					<template #icon>
						<icon-pointers />
					</template>
					<template #text>
						<h6	class="action-text">{{ $t('history') }}</h6>
					</template>
					<template #icon2>
						<icon-chevron-blue class="action-icon" />
					</template>
				</action>
				<action class="garage-container__box-recomendation">
					<template #icon>
						<icon-setting-red />
					</template>
					<template #text>
						<h6	class="action-text">{{ $t('recomendation') }}</h6>
					</template>
				</action>
				<car-button :type="1" />
				<car-button :type="0" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const router = useRouter();
	const user = await getUserInfo();
	if (!user) {
		router.push('/profile');
  }
	const { data: garage } = await useFetch('http://86.107.45.124:8007/api/garage/', {
		headers: {
			Authorization: `Bearer ${ getAccessToken() }`
		},
	});
</script>

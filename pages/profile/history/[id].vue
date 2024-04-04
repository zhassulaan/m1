<template>
	<div class="history-detail container">
		<hierarchy :path="[$t('card'), $t('history')]"/>
		<div class="history-detail__header" v-if="isDevice" @click="router.push('/profile/history')">
			<icon-chevron-grey class="btn" />
			<h4 @click="router.push('./')">{{ $t('back') }}</h4>
		</div>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/profile/history')" />
		<h4 class="container-title" v-if="!isDevice" @click="router.push('./')">{{ $t('history') }}</h4>
		<div v-if="user" class="profile-content">
			<div class="history-detail__box">
				<div class="history-detail__box-left">
					<box-car-description :car="car" v-if="isDevice" />
					<action>
						<template #icon>
							<icon-setting-red />
						</template>
						<template #text>
							<h6	class="action-text">{{ $t('recomendation') }}</h6>
						</template>
					</action>
					<car-button :type="1" />
					<car-button :type="0" />
					<div class="signature" v-if="!isDevice">
						<p class="text">{{ $t('filial') }}: Севастопольский пер. 34, Астана 020000, Казахстан</p>
						<p class="text">{{ $t('signature') }}:</p>
						<img src="@/assets/images/signature.png" alt="Signature" class="image" />
					</div>
				</div>
				<div class="history-detail__box-right">
					<box-car-description :car="car" v-if="!isDevice" />
					<div class="info">
						<p class="text">{{ $t('holding_date') }}: {{ history.start }}</p>
						<p class="text">{{ $t('mileage') + ':' }}: {{ history.mileage_at_moment }} тыс.км.</p>
						<p class="text">{{ $t('engine_oil') }}: Castrol 3500 км</p>
						<p class="text">{{ $t('transmission_oil') }}: Mobil 4000 км.</p>
						<p class="text">{{ $t('special_marks') }}: </p>
					</div>
					<div class="service">
						<p class="text">{{ $t('services') }}: <span>замена шин</span></p>
						<p class="text">{{ $t('goods') }}: <span>масло, шины</span></p>
					</div>
					<div class="signature" v-if="isDevice">
						<p class="text">{{ $t('filial') }}: {{ history.filial }}</p>
						<p class="text">{{ $t('signature') }}:</p>
						<img src="@/assets/images/signature.png" alt="Signature" class="image" />
					</div>
				</div>
			</div>
			<Menu :canEdit="true" />
		</div>
	</div>
</template>

<script setup>
	const route = useRoute();
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

	const history = ref(null)
	const car = ref(null)
	if (histories.value) {
		history.value = histories.value.find(item => (item.id == route.params.id));
		const { data: garage } = await useFetch('http://86.107.45.124:8007/api/garage/', {
			headers: {
				Authorization: `Bearer ${ getAccessToken() }`
			},
		});
		car.value = garage.value.cars[history.car];
	}
</script>

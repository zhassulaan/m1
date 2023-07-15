<template>
	<div class="bonuses container">
		<hierarchy :path="[$t('card'), $t('bonuses')]"/>
		<icon-chevron-grey class="close btn" v-if="!isDevice" @click="router.push('/profile')" />
		<h4 class="container-title">{{ $t('bonuses') }}</h4>
		<div v-if="user" class="profile-content">
			<div class="bonuses-container">
				<div class="bonuses-container__box" v-for="bonus in bonuses.results" :key="bonus.id">
					<p class="bonuses-container__box-header">Бонусов: {{ user.total_bonuses }} b</p>
					<div class="bonuses-container__box-background"></div>
					<img :src="bonus.image" :alt="bonus.title" class="bonuses-container__box-image" />
					<div class="bonuses-container__box-content">
						<icon-money class="icon" />
						<h6 class="title">{{ `${ bonus.percent }%` }}</h6>
						<h6 class="text">Механика</h6>
						<h6 class="text">До следующего статуса вам осталось собрать еще 50 000 тенге до следующего уровня</h6>
					</div>
				</div>
			</div>
			<Menu />
		</div>
	</div>
</template>

<script setup>
	const { data: bonuses } = await useFetch('http://86.107.45.124:8007/api/main_page/bonus/');

	const router = useRouter();
	const isDevice = useIsDevice();

	const user = await getUserInfo();
	if (!user) {
		router.push('/profile');
	}
</script>

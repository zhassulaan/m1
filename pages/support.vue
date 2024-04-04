<template>
	<div class="support container">
		<hierarchy :path="[$t('support')]"/>
		<h4 class="support-title">{{ $t('support') }}</h4>
		<div class="support-content">
			<form class="support-content__left">
				<div class="input-container">
					<Input :type="'text'" :placeholder="$t('name') + ':'" v-model="item.name" />
				</div>
				<div class="input-container">
					<Input :type="'text'" :placeholder="$t('city') + ':'" v-model="item.city" />
				</div>
				<div class="input-container">
					<Input :type="'number'" :placeholder="$t('phone_number') + ':'" v-model="item.phone" />
				</div>
				<Select :label="$t('choose_cause')" :items="reasons" v-model="item.reason" @select="selectReason" />
				<Txtarea :placeholder="$t('write') + '...'" v-model="item.message" />
				<Button :type="2" :text="$t('send')" @click="submit" />
			</form>
			<div class="support-content__right">
				<div class="map" v-if="isDevice">
					<img src="@/assets/images/map.png" alt="Map" />
				</div>
				<div class="info">
					<div class="info-address">
						<span>
							<h6 class="info-address__title">{{ selecctedBranch.title }}</h6>
							<p class="info-address__description">{{ selecctedBranch.description }}</p>
						</span>
						<icon-chevron-blue class="btn" @click="modal = !modal" />
					</div>
					<div class="info-map" v-if="!isDevice">
						<img src="@/assets/images/map.png" alt="Map" />
					</div>
					<div class="info-contacts">
						<span class="info-contact">
							<nuxt-link to="mailto:info_m1mobil@mail.ru">
								<icon-whatsapp class="icon" />
							</nuxt-link>
							<nuxt-link to="mailto:info_m1mobil@mail.ru" class="info-contact__email">info_m1mobil@mail.ru</nuxt-link>
						</span>
						<span class="info-contact">
							<nuxt-link to="tel:+77008008080" class="info-contact__phone">+7 700 800 80 80</nuxt-link>
							<nuxt-link to="tel:+77990090909" class="info-contact__phone">+7 799 009 09 09</nuxt-link>
						</span>
					</div>
				</div>
			</div>
		</div>
		<modal-branch v-if="modal" :branches="branches" :branch="selecctedBranch" @close="modal = !modal" @confirm="selectBranch" />
	</div>
</template>

<script setup>
import { branches } from "~/data";

const isDevice = useIsDevice();
const item = {};
const reasons = ["Не поменяли колеса", "Плохая чистка салона", "Не приходит код", "Другое"];
let modal = ref(false);
let selecctedBranch = branches[0];

function selectReason(reason) {
	item.reason = reason;
}
function selectBranch(branch) {
	selecctedBranch = branch;
}
function submit() {
	item.branch = selecctedBranch
	console.log(item);
}
</script>

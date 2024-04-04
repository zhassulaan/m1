<template>
	<div class="contacts container">
		<hierarchy :path="[$t('contacts')]"/>
		<h3 class="support-title">{{ $t('contacts') }}</h3>
		<ul class="contacts-header">
			<li class="contacts-header__line">
				<h6 class="title">Колл-центр:</h6>
				<h6 class="title"></h6>
				<h6 class="title">E-mail:</h6>
			</li>
			<li class="contacts-header__line">
				<nuxt-link to="tel:+77008008080" class="cell">+7 700 800 80 80</nuxt-link>
				<nuxt-link to="tel:+77990090909" class="cell">+7 799 009 09 09</nuxt-link>
				<nuxt-link to="mailto:info_m1mobil@mail.ru" class="cell">info_m1mobil@mail.ru</nuxt-link>
			</li>
		</ul>
		<div class="contacts-body">
			<box-contact :branch="selecctedBranch" @open="modal = true" />
		</div>
		<div class="contacts-footer">
			<h5 class="contacts-footer__title">Задать вопрос:</h5>
			<div class="contacts-footer__inputs">
				<Input :type="'text'" :placeholder="'Ваше имя:'" v-model="item.name" />
				<Input :type="'text'" :placeholder="'Ваше e-mail:'" v-model="item.email" />
				<Input :type="'number'" :placeholder="'Ваш номер телефона:'" v-model="item.phone" />
			</div>
			<Txtarea placeholder="Задайте вопрос" v-model="item.message" />
			<Button :type="2" :text="'Задать вопрос'" @click="submit" />
		</div>
		<modal-branch v-if="modal && !isDevice" :branches="branches" :branch="selecctedBranch" @close="modal = false" @confirm="selectBranch" />
	</div>
</template>

<script setup>
import { branches } from "@/assets/data";

const isDevice = useIsDevice();
const item = {};
let modal = ref(false);
let selecctedBranch = branches[0];

function selectBranch(branch) {
	selecctedBranch = branch;
}
function submit() {
	item.branch = selecctedBranch
	console.log(item);
}
</script>

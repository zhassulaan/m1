<template>
	<div class="auth">
		<div class="auth-resend" v-if="type == 2">
			<icon-chevron-red class="close btn" @click="type = 1" />
			<p class="auth-resend__title">{{ $t('code_notreceive') }}</p>
			<p class="auth-resend__counter" v-if="seconds">{{ $t('resend') }} {{ $t('after') }} {{ seconds }}</p>
			<p class="auth-resend__counter btn" v-if="!seconds" @click="sendCode()">{{ $t('resend') }}</p>
			<p class="auth-resend__subtitle">{{ $t('code_send') }}</p>
		</div>
		<div class="auth-header" v-else>
			<h6 class="auth-header__title btn" :class="{ 'active': type }" @click="type = 1">{{ $t('signup') }}</h6>
			<h6 class="auth-header__title btn" :class="{ 'active': !type }" @click="type = 0">{{ $t('login') }}</h6>
		</div>
		<div class="auth-body" v-if="!type">
			<div class="auth-body__form">
				<div class="auth-body__form-row">
					<p class="label">{{ $t('username') }}</p>
					<Input :type="'text'" :placeholder="'+7 777 7777 777'" v-model="authIitem.phone" />
				</div>
				<div class="auth-body__form-row">
					<p class="label">{{ $t('password') }}</p>
					<Input :type="'password'" :placeholder="$t('password')" v-model="authIitem.password" />
				</div>
			</div>
		</div>
		<div class="auth-body" v-if="type === 1">
			<div class="auth-body__form">
				<div class="auth-body__form-row">
					<p class="label">{{ $t('phone_number') }}</p>
					<Input :type="'text'" :placeholder="'+7 777 7777 777'" v-model="authIitem.phone" />
				</div>
			</div>
		</div>
		<div class="auth-body" v-if="type === 2">
			<div class="auth-body__form">
				<div class="auth-body__form-row">
					<Input :type="'text'" :placeholder="$t('code')" v-model="code" />
				</div>
				<div class="auth-body__form-row">
					<Input :type="'text'" :placeholder="$t('name')" v-model="authIitem.name" />
				</div>
				<div class="auth-body__form-row">
					<Input :type="'password'" :placeholder="$t('password_new')" v-model="authIitem.password" />
				</div>
				<div class="auth-body__form-row">
					<Input :type="'password'" :placeholder="$t('password_confirm')" v-model="authIitem.passwordConfirm" />
				</div>
			</div>
		</div>
		<Button :text="$t('continue')" @click="submit()" />
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object,
	});
	const type = ref(0);
	const authIitem = {
		name: "",
		phone: "",
		password: "",
		passwordConfirm: "",
	};
	let code = "";
	const seconds = ref(60);
	
	function countdown() {
		seconds.value = 60;
		const timer = setInterval(() => {
			seconds.value--;
			if (seconds.value === 0) {
				clearInterval(timer);
			}
		}, 1000);
	}
	async function login() {
		const { data: loginData } = await useFetch('http://86.107.45.124:8007/api/user/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: authIitem.phone,
				password: authIitem.password,
			}),
		});
		if (loginData.value) {
			saveAuthTokens(loginData.value.access, loginData.value.refresh);
		}
	}
	async function check_user() {
		const { error } = await useFetch('http://86.107.45.124:8007/api/user/check_user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: authIitem.phone,
			}),
		});
		if (authIitem.phone !== "" && error) {
			console.log(error.value.data);
			type.value = 2;
			sendCode();
		}
	}
	async function sendCode() {
		const response = await useFetch('http://86.107.45.124:8007/api/user/sms/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: authIitem.phone,
			}),
		});
		countdown();
	}
	async function verifyCode() {
		const { data } = await useFetch('http://86.107.45.124:8007/api/user/sms/verify/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: authIitem.phone,
				code: code,
			}),
		});
		if (data.value) {
			signup();
		}
	}
	async function signup() {
		if (authIitem.password && authIitem.password === authIitem.passwordConfirm) {
			const { data: signupData } = await useFetch('http://86.107.45.124:8007/api/user/register/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: authIitem.phone,
					name: authIitem.name,
					password: authIitem.password,
				}),
			});
			if (signupData.value) {
				saveAuthTokens(signupData.value.access, signupData.value.refresh);
			}
		}
	}
	function submit() {
		switch (type.value) {
			case 0:
				login();
				break;
			case 1:
				check_user();
				break;
			case 2:
				verifyCode();
				break;
			default:
				break;
		}
	}
</script>
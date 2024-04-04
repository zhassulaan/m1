<template>
	<div class="control">
		<div class="control-services btn">
			<p class="text" v-if="isDevice" @click="router.push('/booking')">{{ $t('services') }}</p>
			<icon-burger class="icon" @click="openSidebar" />
		</div>
		<search :placeholder="$t('searching') + '...'" />
		<div class="control-list" v-if="isDevice">
			<div class="control-list__item btn" @click="router.push('/support')">
				<icon-support class="icon" />
				<p class="text">{{ $t('support') }}</p>
			</div>
			<div class="control-list__item btn" @click="router.push('/profile')">
				<icon-user class="icon" />
				<p class="text">{{ $t('profile') }}</p>
			</div>
		</div>
		<lang v-if="isDevice" />
		<icon-logo-black class="control-logo btn" v-if="!isDevice" />
  </div>
</template>

<script setup>
const emit = defineEmits("open");
const isDevice = useIsDevice();
const router = useRouter();

function openSidebar() {
	emit("open");
	document.body.classList.add("freeze");
};
</script>


<template>
	<div class="sidebar">
		<div class="sidebar-background btn" @click="closeSidebar"></div>
		<div class="sidebar-content">
			<div class="sidebar-content__header">
				<icon-mobile-x class="btn" @click="closeSidebar" />
				<icon-logo-black class="logo btn" />
			</div>
			<div class="sidebar-content__item btn" @click="moveTo('profile/notifications')">
				<icon-bell />
				<p class="text">{{ $t('notification') }}</p>
			</div>
			<div class="sidebar-content__item btn" @click="openLang()">
				<icon-mobile-globe />
				<p class="text">{{ $t('languages') }}</p>
			</div>
			<div class="sidebar-content__item btn" @click="moveTo('contacts')">
				<icon-mobile-phone />
				<p class="text">{{ $t('contacts') }}</p>
			</div>
			<div class="sidebar-content__item btn" @click="moveTo('works')">
				<icon-setting-blue />
				<p class="text">{{ $t('works') }}</p>
			</div>
		</div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "open"]);
const router = useRouter();

function closeSidebar() {
	emit("close");
	document.body.classList.remove("freeze");
};
function openLang() {
	emit("open");
	closeSidebar();
};
function moveTo(url) {
	router.push(`/${ url }`)
	closeSidebar();
};
</script>

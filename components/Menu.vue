<template>
	<div class="menu">
		<action class="menu-edit" v-if="canEdit && isDevice" @click="edit">
			<template #icon>
				<icon-pencil />
			</template>
			<template #text>
				<h6	class="action-text">{{ $t('change') }}</h6>
			</template>
		</action>
		<action @click="router.push('/profile/bonuses')">
			<template #icon>
				<icon-bonus />
			</template>
			<template #text>
				<h6	class="action-text">{{ $t('bonuses') }}</h6>
			</template>
		</action>
		<action @click="router.push('/profile/history')">
			<template #icon>
				<icon-history />
			</template>
			<template #text>
				<h6	class="action-text">{{ $t('history') }}</h6>
			</template>
		</action>
		<action @click="router.push('/profile/garage')">
			<template #icon>
				<icon-steering />
			</template>
			<template #text>
				<h6	class="action-text">{{ $t('garage') }}</h6>
			</template>
		</action>
		<action @click="router.push('/profile/notifications')">
			<template #icon>
				<icon-bell />
			</template>
			<template #text>
				<h6	class="action-text">{{ $t('notification') }}</h6>
				<div class="action-count">
					<p class="text">{{ notifications.length }}</p>
				</div>
			</template>
		</action>
		<div class="menu-link">
			<action>
				<template #icon>
					<icon-link />
				</template>
				<template #text>
					<h6	class="action-text">{{ $t('share') }}</h6>
				</template>
			</action>
		</div>
		<Button :text="$t('logout')" v-if="!isDevice" @click="removeAuthTokens()" />
	</div>
</template>

<script setup>
	import { notifications } from "~/data";

	const isDevice = useIsDevice();
	const props = defineProps({
		canEdit: Boolean,
	});
	const emit = defineEmits(["editing"]);
	const router = useRouter();

	function edit() {
		emit("editing");
	};
</script>

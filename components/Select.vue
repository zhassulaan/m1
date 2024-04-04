<template>
  <div class="select">
    <div class="select-label" :class="{ 'active': show }" @click="show = !show">
      <p class="select-label__text">{{ selectedItem ? selectedItem : label }}</p>
      <icon-chevron-grey class="select-label__icon" />
    </div>
    <div v-if="show" class="select-dropdown">
			<input v-if="withSearch" type="text" placeholder="Введите марку авто вручную..." class="select-dropdown__search" v-model="search_query" />
      <ul class="select-dropdown__list">
        <li v-for="(item, index) in filteredItems" :key="index" class="select-dropdown__list-item" @click="selectItem(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
	label: String,
	items: Array,
	value: String,
	withSearch: Boolean
});
const emit = defineEmits(["select"]);
let selectedItem = "";
let show = ref(false);
const search_query = ref("");

const filteredItems = computed(() => {
	if (!props.withSearch)
		return props.items;
	const query = search_query.value.toLowerCase();
	return props.items.filter(item => item.toLowerCase().includes(query));
});
function selectItem(item) {
	selectedItem = item;
	show.value = false;
	emit("select", selectedItem);
}
</script>

<style scoped lang="scss">
.select {
	position: relative;
	width: 100%;
	background-color: #FFF;
	border-radius: 10px;
	&-label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		border: 1px solid #FFF;
		border-radius: 10px;
		padding: 12.5px 1.527778vw 12.5px .902778vw;
		&__text {
			font-size: 15px;
			line-height: 18px;
		}
		&.active {
			border: 1px solid #325BEC;
		}
	}
	&-dropdown {
		position: absolute;
		width: 100%;
		background-color: #FFF;
		border-radius: 12px;
		box-shadow: 0px 3px 6px 0px rgba(24, 25, 27, 0.25);
		margin-top: 6px;
		padding: 12px .833333vw 13px;
		&__search {
			width: 100%;
			min-height: 30px;
			background-color: #E8E9EF;
			border-radius: 12px;
			padding: 8px .416667vw 7px;
			margin-bottom: 11px;
		}
		&__list {
			display: flex;
			flex-direction: column;
			gap: 19px;
			&-item {
				font-size: 15px;
				font-weight: 400;
				line-height: 16px;
				color: #2C2C2C;
			}
		}
	}
}
@media screen and (max-width: 1279px) {
	.select {
		&-label {
			padding: 11px 1.527778vw 11px .902778vw;
			&__text {
				font-size: 14px;
			}
		}
		&-dropdown__list {
			gap: 16px;
			&-item {
				font-size: 14px;
			}
		}
	}
}
@media screen and (max-width: 1023px) {
	.select {
		&-label__text {
			font-size: 13px;
		}
		&-dropdown__list {
			gap: 13px;
			&-item {
				font-size: 13px;
			}
		}
	}
}
@media screen and (max-width: 991px) {
	.select {
		&-label {
			padding: 9.25px 1.527778vw 9.25px .902778vw;
			&__text {
				font-size: 12px;
			}
		}
		&-dropdown__list {
			gap: 11px;
			&-item {
				font-size: 12px;
			}
		}
	}
}
@media screen and (max-width: 767px) {
	.select {
		&-label {
			padding: 8px 1.527778vw 8px .902778vw;
			&__text {
				font-size: 11px;
			}
		}
		&-dropdown__list {
			&-item {
				font-size: 11px;
			}
		}
	}
}
@media screen and (max-width: 480px) {
	.select {
		&-label {
			padding: 13px 3.333333vw;
			&__text {
				font-size: 15px;
			}
		}
		&-dropdown {
			padding: 12px 3.076923vw 13px;
			&__list {
				gap: 19px;
				&-item {
					font-size: 15px;
				}
			}
		}
	}
}
</style>

<template>
  <div class="pagination">
    <div class="pagination-container">
			<div v-for="(item, id) in displayedItems" :key="id" class="pagination-container__item">
				<slot :paginationObject="item"></slot>
			</div>
    </div>

    <div class="pagination-controls">
			<icon-chevron-blue v-if="currentPage !== 1" class="pagination-controls__prev" @click="prevPage" />
      <div v-for="(page, id) in totalPages" :key="id" class="pagination-controls__item btn" :class="{ 'active': page === currentPage }" @click="goToPage(page)">
				<p class="text">{{ page }}</p>
			</div>
			<icon-chevron-blue v-if="currentPage !== totalPages" class="pagination-controls__next" @click="nextPage" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
  itemsPerPage: Number
});
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage));
const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage;
  const end = start + props.itemsPerPage;
  return props.items.slice(start, end);
});

function prevPage() {
  if (currentPage.value > 1)
    currentPage.value--;
}
function nextPage() {
  if (currentPage.value < totalPages.value)
    currentPage.value++;
}
function goToPage(pageNumber) {
  currentPage.value = pageNumber;
  // router.push(`/profile/history/${pageNumber}`);
}
</script>

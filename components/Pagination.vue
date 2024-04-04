<template>
  <div class="pagination">
    <div class="pagination-container">
			<div class="pagination-container__item" v-for="(item, idx) in displayedItems" :key="idx">
				<slot :paginationObject="item"></slot>
			</div>
    </div>

    <div class="pagination-controls">
			<icon-chevron-blue class="pagination-controls__prev" v-if="currentPage !== 1" @click="prevPage" />
      <div class="pagination-controls__item btn" :class="{ 'active': page === currentPage }" v-for="(page, idx) in totalPages" :key="idx" @click="goToPage(page)">
				<p class="text">{{ page }}</p>
			</div>
			<icon-chevron-blue class="pagination-controls__next" v-if="currentPage !== totalPages" @click="nextPage" />
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

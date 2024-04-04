<template>
	<div class="work-box">
		<img :src="item.car.images[0]" alt="" class="work-box__image" />

    <div class="work-box__info">
      <img :src="item.car.mark.image" :alt="item.car.mark.name" class="logo" />
      <div>
        <h6 class="label">{{ $t('mark') }}</h6>
        <p class="text">{{ `${ item.car.mark.name } ${ item.car.model } ${ item.car.year_manufacture } г.в.` }}</p>
      </div>
    </div>

    <div class="work-box__improvments">
      <h6 class="label">{{ $t('work_done') }}</h6>
      <p :key="id + 1" v-for="(service, id) in item.services" class="text">{{ id + 1 }}. {{ service }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    item: Object
  });
</script>

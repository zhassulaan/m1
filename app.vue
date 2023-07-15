<template>
  <div>
    <Header
      v-if="!language"
      @open="sidebar = true"
    />
    <Sidebar
      v-if="!isDevice && sidebar"
      @close="sidebar = false"
      @open="language = true"
    />
    <NuxtLayout v-if="!language">
      <NuxtPage />
    </NuxtLayout>
    <views-language
      v-if="!isDevice && language"
      @close="language = false; unfreeze();"
    />
    <Tabs
      v-if="!isDevice"
      @close="language = false"
    />
    <Footer v-if="isDevice" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDevice: useIsDevice(),
      sidebar: false,
      language: false,
    }
  },
  mounted() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
    if (localStorage.getItem("token")) {
      api.getUser().then((res) => {
        this.user = res.data
      });
    }
  },
  methods: {
    updateWidth() {
      if (window.innerWidth > 480
      ) {
        this.isDevice = true
      } else {
        this.isDevice = false
      }
    },
    unfreeze() {
      document.body.classList.remove("freeze");
    },
  }
}
</script>

<template>
  <MainPage :about="false" />
</template>

<script>
import MainPage from "./MainPage.vue";

export default {
  name: "app",
  components: {
    MainPage,
  },
};
</script>

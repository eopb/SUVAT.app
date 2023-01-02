<template>
  <MainPage :about="true" />
</template>

<script>
import MainPage from "./MainPage.vue";

export default {
  name: "aboutPage",
  components: {
    MainPage,
  },
};
</script>

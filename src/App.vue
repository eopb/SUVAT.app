<template>
  <Main :about="false" />
</template>

<script>
import Main from "./Main.vue";

export default {
  name: "app",
  components: {
    Main,
  },
};
</script>

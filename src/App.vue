<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    <LetterBox letter="s" />
    <LetterBox letter="u" />
    <LetterBox letter="v" />
    <LetterBox letter="a" />
    <LetterBox letter="t" />
  </div>
</template>

<script>
import LetterBox from "./components/LetterBox.vue";

export default {
  name: "app",
  components: {
    LetterBox
  }
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    <LetterBox @letter-value-changed="bruh" letter="s" />
    <LetterBox @letter-value-changed="bruh" letter="u" />
    <LetterBox @letter-value-changed="bruh" letter="v" />
    <LetterBox @letter-value-changed="bruh" letter="a" />
    <LetterBox @letter-value-changed="bruh" letter="t" />
  </div>
</template>

<script>
import LetterBox from "./components/LetterBox.vue";

class State {
  static s = null;
  static u = null;
  static v = null;
  static a = null;
  static t = null;
  static printOut() {
    console.log(this);
  }
}

export default {
  name: "app",
  components: {
    LetterBox
  },
  methods: {
    bruh(value, letter) {
      console.log(state);
    }
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

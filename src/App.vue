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
    <h1>{{ suvat.s }}</h1>
  </div>
</template>

<script>
import LetterBox from "./components/LetterBox.vue";

export default {
  name: "app",
  components: {
    LetterBox
  },
  data: () => ({
    creditLimit: "",
    suvat: {
      s: null,
      u: null,
      v: null,
      a: null,
      t: null
    }
  }),

  methods: {
    bruh(value, letter) {
      value = parseFloat(value);

      if (isNaN(value)) value = null;

      switch (letter) {
        case "s":
          this.suvat.s = value;
          break;
        case "u":
          this.suvat.u = value;
          break;
        case "v":
          this.suvat.v = value;
          break;
        case "a":
          this.suvat.a = value;
          break;
        case "t":
          this.suvat.t = value;
          break;
      }
      console.log(this.suvat);
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

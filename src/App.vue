<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    <div id="grid-wrap">
      <LetterBox @letter-value-changed="bruh" letter="s" />
      <Solution />
      <LetterBox @letter-value-changed="bruh" letter="u" />
      <Solution />
      <LetterBox @letter-value-changed="bruh" letter="v" />
      <Solution />
      <LetterBox @letter-value-changed="bruh" letter="a" />
      <Solution />
      <LetterBox @letter-value-changed="bruh" letter="t" />
      <Solution />
    </div>
    <!-- <h1>{{ suvat.s + 5}}</h1> -->
  </div>
</template>

<script>
import LetterBox from "./components/LetterBox.vue";
import Solution from "./components/Solution.vue";

export default {
  name: "app",
  components: {
    LetterBox,
    Solution
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

<style lang="sass">
body 
  margin: 0
  *,
  *::after,
  *::before
    box-sizing: inherit

#app 
  font-family: Roboto, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#grid-wrap 
  display: grid
  grid-template-columns: 300px 1fr
  grid-template-rows: repeat(5, 1fr)
  height: 100vh
</style>

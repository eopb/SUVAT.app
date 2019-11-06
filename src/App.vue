<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    <div id="grid-wrap">
      <LetterBox @letter-value-changed="bruh" letter="s">m</LetterBox>
      <Solution :suvat="suvat" letter="s" />
      <LetterBox @letter-value-changed="bruh" letter="u">
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution :suvat="suvat" letter="u" />
      <LetterBox @letter-value-changed="bruh" letter="v">
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution :suvat="suvat" letter="v" />
      <LetterBox @letter-value-changed="bruh" letter="a">
        ms
        <sup>-2</sup>
      </LetterBox>
      <Solution :suvat="suvat" letter="a" />
      <LetterBox @letter-value-changed="bruh" letter="t">s</LetterBox>
      <Solution :suvat="suvat" letter="t" />
    </div>
    <!-- <h1>{{ suvat.s + 5}}</h1> -->
  </div>
</template>

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
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
  background-color: #eee
  *:nth-child(4n),
  *:nth-child(4n - 1)
    background-color: #ccc
</style>

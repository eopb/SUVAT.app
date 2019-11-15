<template>
  <div id="app">
    <header>
      <div id="title">
        <p>
          <b>suvat calculator</b>
        </p>
      </div>
      <aside>
        <p>
          Designed by
          <a href="https://github.com/ethanboxx">Ethan Brierley</a>
        </p>
      </aside>
    </header>
    <div id="grid-wrap">
      <LetterBox @letter-value-changed="bruh" letter="s" name="Displacement"
        >m</LetterBox
      >
      <Solution
        v-show="solved.s || solved.u || solved.v || solved.a"
        @solved="upA"
        :suvat="suvat"
        letter="s"
      />
      <LetterBox
        @letter-value-changed="bruh"
        letter="u"
        name="Initial velocity"
      >
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution
        v-show="solved.s || solved.u || solved.v || solved.a"
        @solved="upA"
        :suvat="suvat"
        letter="u"
      />
      <LetterBox @letter-value-changed="bruh" letter="v" name="Final velocity">
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution
        v-show="solved.s || solved.u || solved.v || solved.a"
        @solved="upA"
        :suvat="suvat"
        letter="v"
      />
      <LetterBox @letter-value-changed="bruh" letter="a" name="Accelleration">
        ms
        <sup>-2</sup>
      </LetterBox>
      <Solution
        v-show="solved.s || solved.u || solved.v || solved.a"
        @solved="upA"
        :suvat="suvat"
        letter="a"
      />
      <LetterBox @letter-value-changed="bruh" letter="t" name="Time"
        >s</LetterBox
      >
      <Solution
        v-show="solved.s || solved.u || solved.v || solved.a"
        @solved="upA"
        :suvat="suvat"
        letter="t"
      />
      <div
        class="inputerr"
        v-if="!(solved.s || solved.u || solved.v || solved.a)"
      >
        <h1>Input at least three values to get solutions</h1>
      </div>
    </div>
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
    suvat: {
      s: null,
      u: null,
      v: null,
      a: null,
      t: null
    },
    solved: { s: false, u: false, v: false, a: false, t: false }
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
    },
    upA(v) {
      this.solved = {
        s: v.s !== null ? v.s : this.solved.s,
        u: v.u !== null ? v.u : this.solved.u,
        v: v.v !== null ? v.v : this.solved.v,
        a: v.a !== null ? v.a : this.solved.a,
        t: v.t !== null ? v.t : this.solved.t
      };
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
  display: grid
  grid-template-rows: 30px auto
  min-height: 750px
  height: 100vh
  header
    color: #fff
    background-color: #222
    #title
      float: left
    aside
      float: right
    > *
      display: flex
      align-items: center
      justify-content: center
      height: 100%
      p
        margin-left: 5px
        margin-right: 5px
        a
          transition: .5s
            timing-function: ease-out
          display: inline-block
          transition-timing-function: cubic-bezier(1,1.85,.34,-.03)
          transform: scale(1, 1)
          text-decoration: none
          color: inherit
          font-weight: bold
          &:hover,
          &:active
            transform: scale(1, 1.8)

#grid-wrap
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: repeat(auto-fill, 1fr)
  > div.inputerr
    display: none
  @media (min-width: 700px)
    grid-template-columns: 300px auto
    grid-template-rows: repeat(5, 1fr)
    > div.inputerr
      display: block
      grid-column: 2
      grid-row: 1 / 7
      display: flex
      align-items: center
      justify-content: center

  background-color: #eee
  > *:nth-child(4n),
  > *:nth-child(4n - 1)
    background-color: #ccc
</style>

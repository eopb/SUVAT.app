// TODO better support for zero acceleration using v=s/t // TODO support for g
and -g followed by a number for decimal places// rebuild

<template>
  <div id="app">
    <header>
      <div id="title">
        <p>
          <b>SUVAT.app</b>
        </p>
      </div>
      <div id="about">
        <p>
          <a v-if="!about" href="/about.html" class="button"> About suvat</a
          ><a v-else href="/" class="button"> Back </a>
        </p>
      </div>
      <aside>
        <template v-if="!about">
          <p>Decimal places</p>
          <input
            v-model="dp"
            type="number"
            step="1"
            max="16"
            min="0"
            value="3"
          />
        </template>
        <p class="credit">
          Designed by
          <a href="https://github.com/ethanboxx">Ethan Brierley</a>
        </p>
      </aside>
    </header>
    <div id="grid-wrap" v-if="!about">
      <LetterBox
        @letter-value-changed="updateLater"
        letter="s"
        name="Displacement"
        unit="m"
      />
      <Solution v-show="showSoloutions" :suvat="suvat" :dp="dp" letter="s" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="u"
        name="Initial velocity"
        unit="ms^{-1}"
      />
      <Solution v-show="showSoloutions" :suvat="suvat" :dp="dp" letter="u" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="v"
        name="Final velocity"
        unit="ms^{-1}"
      />
      <Solution v-show="showSoloutions" :suvat="suvat" :dp="dp" letter="v" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="a"
        name="Acceleration"
        unit="ms^{-2}"
      />
      <Solution v-show="showSoloutions" :suvat="suvat" :dp="dp" letter="a" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="t"
        name="Time"
        unit="s"
      />
      <Solution v-show="showSoloutions" :suvat="suvat" :dp="dp" letter="t" />
      <div class="inputerr" v-if="inputPrompt">
        <h1>Input three values to get solutions</h1>
      </div>
      <div class="inputerr" v-if="inputLessPrompt">
        <h1>Input only three values to get solutions</h1>
      </div>
    </div>
    <About id="about" v-else></About>
  </div>
</template>

<script>
import LetterBox from "./components/LetterBox.vue";
import Solution from "./components/Solution.vue";
import About from "./components/About.vue";

export default {
  name: "app",
  components: {
    LetterBox,
    Solution,
    About,
  },
  props: ["about"],
  data: () => ({
    suvat: {
      s: null,
      u: null,
      v: null,
      a: null,
      t: null,
    },
    dp: 3,
  }),

  methods: {
    updateLater(value, letter) {
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
  },
  computed: {
    numOfInputs: function () {
      return (
        (this.suvat.s === null ? 0 : 1) +
        (this.suvat.u === null ? 0 : 1) +
        (this.suvat.v === null ? 0 : 1) +
        (this.suvat.a === null ? 0 : 1) +
        (this.suvat.t === null ? 0 : 1)
      );
    },
    showSoloutions: function () {
      return this.numOfInputs === 3;
    },
    inputPrompt: function () {
      return this.numOfInputs < 3;
    },
    inputLessPrompt: function () {
      return this.numOfInputs > 3;
    },
  },
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
  grid-template-rows: 100px auto
  @media (min-width: 500px)
    grid-template-rows: 60px auto
    @media (min-width: 670px)
      grid-template-rows: 30px auto
  min-height: 750px
  height: 100vh
  header
    color: #fff
    background-color: #222
    display: grid
    @media (min-width: 500px)
      grid-auto-flow: column
      @media (min-width: 1200px)
        grid-template-columns: 450px auto 450px
    height: 100%
    > *
      display: flex
      align-items: center
      justify-content: center
      height: 100%
    :first-child
      justify-content: flex-start
    :last-child
      justify-content: flex-center
      @media (min-width: 500px)
        justify-content: flex-end
    p
      margin: 0 5px
      display: inline
      &.credit a
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
    a.button
      transition: .5s
      timing-function: ease-out
      display: inline-block
      background-color: #fff
      color: #111
      padding: 3px 21px
      text-decoration: none
      border-radius: 5px
      transform: scale(1)
      &:hover,
      &:active
        transform: scale(1.06)
        box-shadow: inset 0px 0px 0px 3px rgba(125,125,125,1)
    input
      width: 35px
      margin-right: 8px
      padding: 4px
      border: 0
        radius: 5px

#grid-wrap
  display: grid
  grid:
    template-columns: 1fr
    template-rows: repeat(auto-fill, 1fr)
  > div.inputerr
    display: none
  @media (min-width: 700px)
    grid-template-columns: 300px auto
    grid-template-rows: repeat(5, 1fr)
    > div.inputerr
      grid:
        column: 2
        row: 1 / 7
      display: flex
      align-items: center
      justify-content: center

  background-color: #eee
  > *:nth-child(4n),
  > *:nth-child(4n - 1)
    background-color: #ccc
</style>

<template>
  <div id="app">
    <header>
      <div id="title">
        <p>
          <b>suvat calculator</b>
        </p>
      </div>
      <div id="about">
        <p>
          <button @click="toggleAbout()">
            <template v-if="!about"
              >About suvat</template
            ><template v-else
              >Back</template
            >
          </button>
        </p>
      </div>
      <aside>
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
        >m</LetterBox
      >
      <Solution v-show="showSoloutions" :suvat="suvat" letter="s" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="u"
        name="Initial velocity"
      >
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution v-show="showSoloutions" :suvat="suvat" letter="u" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="v"
        name="Final velocity"
      >
        ms
        <sup>-1</sup>
      </LetterBox>
      <Solution v-show="showSoloutions" :suvat="suvat" letter="v" />
      <LetterBox
        @letter-value-changed="updateLater"
        letter="a"
        name="Accelleration"
      >
        ms
        <sup>-2</sup>
      </LetterBox>
      <Solution v-show="showSoloutions" :suvat="suvat" letter="a" />
      <LetterBox @letter-value-changed="updateLater" letter="t" name="Time"
        >s</LetterBox
      >
      <Solution v-show="showSoloutions" :suvat="suvat" letter="t" />
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
    About
  },
  data: () => ({
    suvat: {
      s: null,
      u: null,
      v: null,
      a: null,
      t: null
    },
    about: false
  }),

  methods: {
    toggleAbout: function() {
      if (this.about)
        this.suvat = {
          s: null,
          u: null,
          v: null,
          a: null,
          t: null
        };
      this.about = !this.about;
    },
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
    }
  },
  computed: {
    numOfInputs: function() {
      return (
        (this.suvat.s === null ? 0 : 1) +
        (this.suvat.u === null ? 0 : 1) +
        (this.suvat.v === null ? 0 : 1) +
        (this.suvat.a === null ? 0 : 1) +
        (this.suvat.t === null ? 0 : 1)
      );
    },
    showSoloutions: function() {
      return this.numOfInputs === 3;
    },
    inputPrompt: function() {
      return this.numOfInputs < 3;
    },
    inputLessPrompt: function() {
      return this.numOfInputs > 3;
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
    display: flex
    justify-content: space-between
    > *
      display: flex
      align-items: center
      justify-content: center
      height: 100%
      p
        margin-left: 5px
        margin-right: 5px
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

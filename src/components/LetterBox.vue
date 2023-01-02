<template>
  <div id="letter-box">
    <div id="title">
      <h3>{{ name }}</h3>
    </div>
    <div id="input-area">
      <h1>
        <MathR
          :formula="full_letter"
          :display="true"
          style="font-size: 0.6em; margin: 0; padding: 0"
        />
      </h1>
      <input
        v-model="letterValue"
        v-on:input="valuechange"
        type="number"
        step="any"
        :name="name"
      />
    </div>
  </div>
</template>

<script>
import MathR from "./MathR.vue";
export default {
  name: "LetterValue",
  props: ["letter", "name", "unit"],
  components: {
    MathR,
  },
  data: () => ({
    letterValue: null,
  }),
  methods: {
    valuechange: function () {
      this.$emit("letter-value-changed", this.letterValue, this.letter);
    },
  },
  computed: {
    full_letter: function () {
      return `\\Huge{${this.letter}}\\mathrm{\\tiny{(${this.unit})}}`;
    },
  },
};
</script>

<style scoped lang="sass">

#letter-box
  @media (min-width: 700px)
    border-right: 5px solid #1C6EA4
  #input-area
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    height: calc(100% - 29px)
    margin-top: -10px
  #title
    background-color: #888
    color: #222
    padding: 3px
    h3
      margin: 0


h1
  margin: 0
  font-size: 3em
  sub
    font-size: .35em
    margin-left: -8px
    sup
      font-size: .7em
      margin-left: -4px

input
  width: 80px
  border-radius: 30px
  border: 2px solid #999
  padding: 6px 8px
  margin-top: -10px
  &:invalid
    border-color: #c22
</style>

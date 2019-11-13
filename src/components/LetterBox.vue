<template>
  <div id="letter-box">
    <h1>
      {{ letter }}
      <sub>
        (
        <slot></slot>)
      </sub>
    </h1>
    <input
      v-model="letterValue"
      v-on:input="valuechange"
      type="number"
      step="any"
    />
  </div>
</template>

<script>
export default {
  name: "LetterValue",
  props: ["letter"],
  data: () => ({
    letterValue: null
  }),
  methods: {
    valuechange: function() {
      this.$emit("letter-value-changed", this.letterValue, this.letter);
    }
  }
};
</script>

<style scoped lang="sass">

#letter-box
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  border-right: 5px solid #1C6EA4

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
  &:invalid
    border-color: #c22
</style>

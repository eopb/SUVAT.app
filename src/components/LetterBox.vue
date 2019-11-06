<template>
  <div id="letter-box">
    <h1>{{ letter }}</h1>
    <input v-model="letterValue" v-on:input="valuechange" type="number" step="any" />
  </div>
</template>

<script>
export default {
  name: "LetterValue",
  props: ["letter"],
  data: () => ({
    creditLimit: "",
    letterValue: null
  }),
  methods: {
    valuechange: function() {
      this.$emit("letter-value-changed", this.letterValue, this.letter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

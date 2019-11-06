<template>
  <div id="letter-box">
    <h1>{{ letter }}</h1>
    <input v-model="letterValue" type="number" step="any" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LetterBox extends Vue {
  @Prop() private letter!: string;
  methods: {
    valueChange: () =>{
      console.log(this.letterValue);
    };
  }
}\
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

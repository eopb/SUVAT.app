<template>
  <div id="solution">
    <div>
      <template v-if="letterValue() !== null || formular() !== null">
        <transition appear name="fade">
          <h1>ans = {{letterValue()}}</h1>
        </transition>
        <transition appear name="fade">
          <h2>Solution</h2>
        </transition>
        <div>
          <math>
            <mi>a</mi>
            <mo>≠</mo>
            <mn>{{formular()}}</mn>
          </math>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  }),
  methods: {
    letterValue() {
      switch (this.letter) {
        case "s":
          return this.suvat.s;

        case "u":
          return this.suvat.u;

        case "v":
          return this.suvat.v;

        case "a":
          return this.suvat.a;

        case "t":
          return this.suvat.t;
      }
      console.log(this.suvat);
    },
    formular() {
      switch (this.letter) {
        case "s":
          if (
            this.suvat.u !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 2;
          break;

        case "u":
          return this.suvat.u;

        case "v":
          return this.suvat.v;

        case "a":
          return this.suvat.a;

        case "t":
          return this.suvat.t;
      }
      return null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


#solution
  overflow-x:  auto
  width: 100%
  > div
    display: inline flex
    align-items: center
    justify-content: flex-start
    flex-direction: row
    height: 100%
    min-width: 100%
    h1, h2
      margin: 0
    h1
      width: 300px
    h2
      writing-mode: vertical-lr
      text-orientation: sideways
      transform: rotate(180deg)
      width: 100px
    > *
      height: 100%
      width: 300px
      
      box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75)
      display: flex
      align-items: center
      justify-content: center
      math
        font-size: 5em

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

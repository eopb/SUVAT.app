<template>
  <div id="solution">
    <template v-if="formular() !== null">
      <Ssutat2 :suvat="suvat" :letter="letter"></Ssutat2>
    </template>
  </div>
</template>

<script>
import Ssutat2 from "./solutions/s/Ssutat2.vue";

export default {
  name: "Solution",
  components: {
    Ssutat2
  },
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
          break;

        case "v":
          break;

        case "a":
          break;

        case "t":
          break;
      }
      return null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">


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
    
    > *
      height: 100%
      min-width: 300px
      
      box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75)
      display: flex
      align-items: center
      justify-content: center
      math
        font-size: 3em
        white-space: nowrap
        padding: 10px
    h2
      writing-mode: vertical-lr
      text-orientation: sideways
      transform: rotate(180deg)
      width: 100px
      min-width: unset

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

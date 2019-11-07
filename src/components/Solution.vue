<template>
  <div id="solution">
    <template v-if="formular() !== null">
      <template v-if="letter === s">
        <Ssutat2
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
        ></Ssutat2>
        <Suvt
          v-else-if="formular() === 3"
          :suvat="suvat"
          :letter="letter"
        ></Suvt>
        <Sv2u22as
          v-else-if="formular() === 4"
          :suvat="suvat"
          :letter="letter"
        ></Sv2u22as>
        <Ssvtat2
          v-if="formular() === 5"
          :suvat="suvat"
          :letter="letter"
        ></Ssvtat2>
      </template>
      <template v-if="letter === u">
        <Uvuat v-if="formular() === 1" :suvat="suvat" :letter="letter"></Uvuat>
        <Usutat2
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
        ></Usutat2>
      </template>
    </template>
  </div>
</template>

<script>
import Ssutat2 from "./solutions/s/Ssutat2.vue";
import Suvt from "./solutions/s/Suvt.vue";
import Sv2u22as from "./solutions/s/Sv2u22as.vue";
import Ssvtat2 from "./solutions/s/Ssvtat2.vue";
import Uvuat from "./solutions/u/Uvuat.vue";
import Usutat2 from "./solutions/u/Usutat2.vue";
export default {
  name: "Solution",
  components: {
    Ssutat2,
    Suvt,
    Sv2u22as,
    Ssvtat2,
    Uvuat,
    Usutat2
  },
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: "",
    s: "s",
    u: "u"
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
          if (
            this.suvat.u !== null &&
            this.suvat.v !== null &&
            this.suvat.t !== null
          )
            return 3;
          if (
            this.suvat.v !== null &&
            this.suvat.u !== null &&
            this.suvat.a !== null
          )
            return 4;
          if (
            this.suvat.v !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 5;

          break;

        case "u":
          if (
            this.suvat.v !== null &&
            this.suvat.a !== null &&
            this.suvat.t !== null
          )
            return 1;
          if (
            this.suvat.s !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 2;
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
    h1, h2, h3
      margin: 0
      white-space: nowrap
    h3
      math
        display: inline-block
        font-size: 1.4em

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

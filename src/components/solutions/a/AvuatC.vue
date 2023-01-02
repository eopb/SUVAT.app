<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for a
  +sue
  +tmath 
    MathR(formula="v=u+at")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="u" size="small")
    | from both sides.
  +tmath 
    MathR(formula="v-u=at")
  +th3
    | First lets rearrange this equation by dividing both sides by
    MathR(formula="t" size="small")
  +tmath 
    MathR(formula="\\frac{v-u}{t}=a")
  +th3
    | Lastly enter known values.
  +tmath 
    MathR(:formula="e1")
  template(v-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator
      MathR(formula="=0" size="small")
      | Can't divide by zero.
</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math.js";
export default {
  name: "VvuatC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionA(this.soloution, this.dp);
    },
    e1: function () {
      return `\\frac{${MF.maybeBracket(this.suvat.v)}-${MF.maybeBracket(
        this.suvat.u
      )}}{${MF.maybeBracket(this.suvat.t)}}`;
    },
    soloution: function () {
      return (this.suvat.v - this.suvat.u) / this.suvat.t;
    },
  },
};
</script>

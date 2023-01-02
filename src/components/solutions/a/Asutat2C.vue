<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for a
  +sue
  +tmath 
    MathR(formula="s=ut+\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="ut" size="small")
    | from both sides.
  +tmath
    MathR(formula="s-ut=\\frac{1}{2}at^2")
  +th3
    | Next lets rearrange this equation by dividing both sides by
    MathR(formula="\\frac{1}{2}t^2" size="small")
  +tmath
    MathR(formula="\\frac{s-ut}{\\frac{1}{2}t^2}=a")
  +th3
    | Lastly enter known values.
  +tmath
    MathR(:formula="e1")
  template(v-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator 
      MathR(:formula="e2" size="small")
      | Can't divide by zero.
</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math.js";
export default {
  name: "Asutat2C",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionA(this.soloution, this.dp);
    },
    e1: function () {
      return `\\frac{${MF.maybeBracket(this.suvat.s)}-${MF.maybeBracket(
        this.suvat.u
      )}\\times${MF.maybeBracket(
        this.suvat.t
      )}}{\\frac{1}{2}\\times${MF.maybeBracket(this.suvat.t)}^2}`;
    },
    e2: function () {
      return `\\frac{1}{2}\\times${MF.maybeBracket(this.suvat.t)}^2=0`;
    },
    soloution: function () {
      return (
        (this.suvat.s - this.suvat.u * this.suvat.t) /
        (0.5 * Math.pow(this.suvat.t, 2))
      );
    },
  },
};
</script>

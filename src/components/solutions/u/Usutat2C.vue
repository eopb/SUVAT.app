<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for u
  +sue
  +tmath 
    MathR(formula="s=ut+\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="\\frac{1}{2}at^2" size="small")
    | from both sides.
  +tmath 
    MathR(formula="s-\\frac{1}{2}at^2=ut")
  +th3
    | First lets rearrange this equation by dividing both sides by
    MathR(formula="t" size="small")
  +tmath 
    MathR(formula="\\frac{s-\\frac{1}{2}at^2}{t}=u")
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
  name: "Usutat2C",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionU(this.soloution, "", this.dp);
    },
    e1: function () {
      return `\\frac{${MF.maybeBracket(
        this.suvat.s
      )}-\\frac{1}{2}\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}^2}{${MF.maybeBracket(
        this.suvat.t
      )}}`;
    },
    soloution: function () {
      return (
        (this.suvat.s - 0.5 * this.suvat.a * Math.pow(this.suvat.t, 2)) /
        this.suvat.t
      );
    },
  },
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    MathR(:formula="soloution_r" size="small")
  +sue
  +tmath 
    MathR(formula="s=\\frac{1}{2}(u+v)t")
  +th3
    | Enter known values.
  +tmath
    MathR(:formula="e1")
</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math";
export default {
  name: "SuvtC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionS(
        0.5 * (this.suvat.u + this.suvat.v) * this.suvat.t,
        this.dp
      );
    },
    e1: function () {
      return `\\frac{1}{2}\\times(${MF.maybeBracket(
        this.suvat.u
      )}+${MF.maybeBracket(this.suvat.v)})\\times${MF.maybeBracket(
        this.suvat.t
      )}`;
    },
  },
};
</script>

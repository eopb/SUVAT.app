<template lang="pug">
include ../mixins.pug
div
  +th1
    MathR(:formula="soloution_r" size="small")
  +sue
  +tmath 
    MathR(formula="s=vt-\\frac{1}{2}at^2")
  +th3
    | Enter known values.
  +tmath
    MathR(:formula="e1")

</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math";
export default {
  name: "Ssvtat2C",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionS(
        this.suvat.v * this.suvat.t -
          0.5 * this.suvat.a * Math.pow(this.suvat.t, 2),
        this.dp
      );
    },
    e1: function () {
      return `s=${MF.maybeBracket(this.suvat.v)}\\times${MF.maybeBracket(
        this.suvat.t
      )}-\\frac{1}{2}\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}^2`;
    },
  },
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for s
  +sue
  +tmath 
    MathR(formula="v^2=u^2+2as")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="u^2" size="small")
    | from both sides.
  +tmath 
    MathR(formula="v^2-u^2=2as")
  +th3
    | Then divide both side by
    MathR(formula="2a" size="small")
    | from both sides.
  +tmath
    MathR(formula="\\frac{v^2-u^2}{2a}=s")
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
import MF from "../../math";
export default {
  name: "Sv2u22asC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionS(this.soloution, this.dp);
    },
    e1: function () {
      return `\\frac{${MF.maybeBracket(this.suvat.v)}^2-${MF.maybeBracket(
        this.suvat.u
      )}^2}{2\\times${MF.maybeBracket(this.suvat.a)}}`;
    },
    e2: function () {
      return `2\\times${MF.maybeBracket(this.suvat.a)}=0`;
    },
    soloution: function () {
      return (
        (Math.pow(this.suvat.v, 2) - Math.pow(this.suvat.u, 2)) /
        (2 * this.suvat.a)
      );
    },
  },
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)&&!isNaN(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for t
  +sue
  +tmath 
    MathR(formula="s=ut+\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="s" size="small")
    | from both sides.
  +tmath 
    MathR(formula="0=\\frac{1}{2}at^2+ut-s")
  +th3
    | Using the quadratic equation
    MathR(formula="\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}" size="small")
    | we can deduce a formula for
    MathR(formula="t" size="small")
    | .
  +tmath 
    MathR(formula="t=\\frac{-u\\pm\\sqrt{u^2+2as}}{a}")
  +th3
    | Enter known values.
  +tmath
    MathR(:formula="e1")
  template(v-if="u22as < 0")
    +th3
      | Can't solve as
      MathR(:formula="e2" size="small")
      | and therefore has no real roots.
  emplate(v-else-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator
      MathR(formula="=0" size="small")
      | Can't divide by zero.

</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math.js";
export default {
  name: "Tsutat2C",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionT2(this.soloution, this.soloution2, this.dp);
    },
    e1: function () {
      return `\\frac{-${MF.maybeBracket(
        this.suvat.u
      )}\\pm\\sqrt{${MF.maybeBracket(
        this.suvat.u
      )}^2+2\\times ${MF.maybeBracket(this.suvat.a)}\\times ${MF.maybeBracket(
        this.suvat.s
      )}}}{${MF.maybeBracket(this.suvat.a)}}`;
    },
    e2: function () {
      return `${MF.maybeBracket(this.suvat.u)}^2+2\\times ${MF.maybeBracket(
        this.suvat.a
      )}\\times ${MF.maybeBracket(this.suvat.s)}<0`;
    },
    soloution: function () {
      return (-this.suvat.u + Math.sqrt(this.u22as)) / this.a2;
    },
    soloution2: function () {
      return (-this.suvat.u - Math.sqrt(this.u22as)) / this.a2;
    },
    a2: function () {
      return this.suvat.a;
    },
    u22as: function () {
      return Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s;
    },
  },
};
</script>

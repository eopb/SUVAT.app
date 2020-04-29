<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)&&!isNaN(soloution)")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) Can't solve for t
  +sue
  +tmath 
    Mathr(formula="s=vt-\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="s" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="0=-\\frac{1}{2}at^2+vt-s")
  +th3
    | Using the quadratic equation
    Mathr(formula="\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}" size="small")
    | we can deduce a formula for
    Mathr(formula="t" size="small")
    | .
  +tmath 
    Mathr(formula="t=\\frac{-v\\pm\\sqrt{v^2-2as}}{-a}")
  +th3
    | Enter known values.
  +tmath
    Mathr(:formula="e1")
  template(v-if="v22as < 0")
    +th3
      | Can't solve as
      Mathr(:formula="e2" size="small")
      | and therefore has no real roots.
  emplate(v-else-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator
      Mathr(formula="=0" size="small")
      | Can't divide by zero.

</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Tsvtat2",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionT2(this.soloution, this.soloution2, this.dp);
    },
    e1: function () {
      return `\\frac{-${MF.maybeBracket(
        this.suvat.v
      )}\\pm\\sqrt{${MF.maybeBracket(
        this.suvat.v
      )}^2-2\\times ${MF.maybeBracket(this.suvat.a)}\\times ${MF.maybeBracket(
        this.suvat.s
      )}}}{${MF.maybeBracket(this.suvat.a)}}`;
    },
    e2: function () {
      return `${MF.maybeBracket(this.suvat.v)}^2-2\\times ${MF.maybeBracket(
        this.suvat.a
      )}\\times ${MF.maybeBracket(this.suvat.s)}<0`;
    },
    soloution: function () {
      return (-this.suvat.v - Math.sqrt(this.v22as)) / this.a2;
    },
    soloution2: function () {
      return (-this.suvat.v + Math.sqrt(this.v22as)) / this.a2;
    },
    a2: function () {
      return -1 * this.suvat.a;
    },
    v22as: function () {
      return Math.pow(this.suvat.v, 2) - 2 * this.suvat.a * this.suvat.s;
    },
  },
};
</script>

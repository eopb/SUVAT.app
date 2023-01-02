<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      MathR(:formula="soloution_r" size="small")
    template(v-else) Can't solve for t
  +sue
  +tmath 
    MathR(formula="s=\\frac{1}{2}(u+v)t")
  +th3
    | First lets rearrange this equation by dividing both sides by
    MathR(formula="\\frac{1}{2}(u+v)" size="small")
  +tmath 
    MathR(formula="\\frac{2s}{u+v}=t")
  +th3
    | Enter known values.
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
import MF from "../../math";
export default {
  name: "TuvtC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionT(this.soloution, this.dp);
    },
    e1: function () {
      return `\\frac{2\\times${MF.maybeBracket(
        this.suvat.s
      )}}{${MF.maybeBracket(this.suvat.u)}+${MF.maybeBracket(this.suvat.v)}}`;
    },
    soloution: function () {
      return (2 * this.suvat.s) / (this.suvat.u + this.suvat.v);
    },
  },
};
</script>

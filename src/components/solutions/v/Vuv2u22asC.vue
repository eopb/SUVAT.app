<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="inRoot >= 0")
      MathR(:formula="soloution_r" size="small")
    template(v-else) No real roots for v
  +sue
  +tmath 
    MathR(formula="v^2=u^2+2as")
  +th3
    | First lets square root both sides.
  +tmath 
    MathR(formula="v=\\sqrt{u^2+2as}")
  +th3
    | Lastly enter known values.
  +tmath 
    MathR(:formula="e1")
  template(v-if="inRoot < 0")
    +th3
      | Can't solve as
      MathR(:formula="e2" size="small")
      | and therefore has no real roots.
</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math";
export default {
  name: "Uv2u22asC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionV(Math.abs(Math.sqrt(this.inRoot)), "\\pm", this.dp);
    },
    e1: function () {
      return `\\sqrt{${MF.maybeBracket(
        this.suvat.u
      )}^2+2\\times${MF.maybeBracket(this.suvat.a)}\\times${MF.maybeBracket(
        this.suvat.s
      )}}`;
    },
    e2: function () {
      return `${MF.maybeBracket(this.suvat.u)}^2+2\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.s)}<0`;
    },
    inRoot: function () {
      return Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s;
    },
  },
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="inRoot >= 0")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) No real roots for u
  +sue
  +tmath 
    Mathr(formula="v^2=u^2+2as")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="2as" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="v^2-2as=u^2")
  +th3
    | Next square root both sides.
  +tmath 
    Mathr(formula="\\sqrt{v^2-2as}=u")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")
  template(v-if="inRoot < 0")
    +th3
      | Can't solve as
      Mathr(:formula="e2" size="small")
      | and therefore has no real roots.
</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math";
export default {
  name: "Uv2u22as",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionU(Math.abs(Math.sqrt(this.inRoot)), "\\pm", this.dp);
    },
    e1: function () {
      return `\\sqrt{${MF.maybeBracket(
        this.suvat.v
      )}^2-2\\times${MF.maybeBracket(this.suvat.a)}\\times${MF.maybeBracket(
        this.suvat.s
      )}}`;
    },
    e2: function () {
      return `${MF.maybeBracket(this.suvat.v)}^2-2\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.s)}<0`;
    },
    inRoot: function () {
      return Math.pow(this.suvat.v, 2) - 2 * this.suvat.a * this.suvat.s;
    },
  },
};
</script>

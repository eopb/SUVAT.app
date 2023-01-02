<template lang="pug">
include ../mixins.pug
div
  +th1
    MathR(:formula="soloution_r" size="small")
  +sue
  +tmath 
    MathR(formula="v=u+at")
  +th3
    | Enter known values.
  +tmath 
    MathR(:formula="e1")

</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math.js";
export default {
  name: "VvuatC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionV(
        this.suvat.u + this.suvat.a * this.suvat.t,
        "",
        this.dp
      );
    },
    e1: function () {
      return `${this.suvat.u}+${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}`;
    },
  },
};
</script>

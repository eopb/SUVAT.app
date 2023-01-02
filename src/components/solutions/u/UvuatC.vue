<template lang="pug">
include ../mixins.pug
div
  +th1
    MathR(:formula="soloution_r" size="small")
  +sue
  +tmath 
    MathR(formula="v=u+at")
  +th3
    | First lets rearrange this equation by subtracting
    MathR(formula="at" size="small")
    | from both sides.
  +tmath 
    MathR(formula="v-at=u")
  +th3
    | Lastly enter known values.
  +tmath 
    MathR(:formula="e1")

</template>

<script>
import MathR from "../../MathR.vue";
import MF from "../../math";
export default {
  name: "UvuatC",
  props: ["suvat", "letter", "dp"],
  components: {
    MathR,
  },
  computed: {
    soloution_r: function () {
      return MF.solutionU(
        this.suvat.v - this.suvat.a * this.suvat.t,
        "",
        this.dp
      );
    },
    e1: function () {
      return `${MF.maybeBracket(this.suvat.v)}-${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}`;
    },
  },
};
</script>

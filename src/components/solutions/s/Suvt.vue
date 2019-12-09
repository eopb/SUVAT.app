<template lang="pug">
include ../mixins.pug
div
  +th1
    Mathr(:formula="soloution_r" size="small")
  +sue
  +tmath 
    Mathr(formula="s=\\frac{1}{2}(u+v)t")
  +th3
    | Enter known values.
  +tmath
    Mathr(:formula="e1")
</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math";
export default {
  name: "Suvt",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionS(
        0.5 * (this.suvat.u + this.suvat.v) * this.suvat.t,
        this.dp
      );
    },
    e1: function() {
      return `\\frac{1}{2}\\times(${MF.maybeBracket(
        this.suvat.u
      )}+${MF.maybeBracket(this.suvat.v)})\\times${MF.maybeBracket(
        this.suvat.t
      )}`;
    }
  }
};
</script>

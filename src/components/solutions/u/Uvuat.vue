<template lang="pug">
include ../mixins.pug
div
  +th1
    Mathr(:formula="soloution_r" size="small")
  +sue
  +tmath 
    Mathr(formula="v=u+at")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="at" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="v-at=u")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math";
export default {
  name: "Uvuat",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr,
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

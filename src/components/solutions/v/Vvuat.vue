<template lang="pug">
include ../mixins.pug
div
  +th1
    Mathr(:formula="soloution_r" size="small")
  +sue
  +tmath 
    Mathr(formula="v=u+at")
  +th3
    | Enter known values.
  +tmath 
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Vvuat",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionV(this.suvat.u + this.suvat.a * this.suvat.t, "");
    },
    e1: function() {
      return `${this.suvat.u}+${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}`;
    }
  }
};
</script>

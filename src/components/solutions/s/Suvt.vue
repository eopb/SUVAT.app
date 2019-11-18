<template lang="pug">
include ../mixins.pug
div
  +th1
    | s = {{ 0.5 * (suvat.u + suvat.v) * suvat.t }}
    sub m
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
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
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

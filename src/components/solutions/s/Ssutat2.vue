<template lang="pug">
include ../mixins.pug
div
  +th1
    | s = {{ suvat.u * suvat.t + 0.5 * suvat.a * Math.pow(suvat.t, 2) }}
    sub m
  +sue
  +tmath 
    Mathr(formula="s=ut+\\frac{1}{2}at^2")
  +th3
    | Enter known values.
  +tmath
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Ssutat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `s=${MF.maybeBracket(this.suvat.u)}\\times${MF.maybeBracket(
        this.suvat.t
      )}+\\frac{1}{2}\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}^2`;
    }
  }
};
</script>

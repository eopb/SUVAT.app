<template lang="pug">
include ../mixins.pug
div
  +th1
    | s = {{ suvat.v * suvat.t - 0.5 * suvat.a * Math.pow(suvat.t, 2) }}
    sub m
  +sue
  +tmath 
    Mathr(formula="s=vt-\\frac{1}{2}at^2")
  +th3
    | Enter known values.
  +tmath
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math";
export default {
  name: "Ssvtat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `s=${maybeBracket(this.suvat.v)}\\times${maybeBracket(
        this.suvat.t
      )}-\\frac{1}{2}\\times${maybeBracket(this.suvat.a)}\\times${maybeBracket(
        this.suvat.t
      )}^2`;
    }
  }
};
</script>

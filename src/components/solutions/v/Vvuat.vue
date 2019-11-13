<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = {{ suvat.u + suvat.a * suvat.t }}
    sub
      | ms
      sup -1
  +sue
  +tmath 
    Mathr(formula="$v=u+at$")
  +th3
    | Enter known values.
  +tmath 
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math.js";
export default {
  name: "Vvuat",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$${this.suvat.u}+${maybeBracket(
        this.suvat.a
      )}\\times${maybeBracket(this.suvat.t)}$`;
    }
  }
};
</script>

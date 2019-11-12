<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (Math.pow(suvat.v, 2) - Math.pow(suvat.u, 2)) / (2 * suvat.s) }}
    sub
      | ms
      sup -2
  +sue
  +tmath 
    Mathr(formula="$v^2=u^2+2as$")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="$u^2$" size="small")
    | from both sides.
  +tmath
    Mathr(formula="$v^2-u^2=2as$")
  +th3
    | Then divide both sides by
    Mathr(formula="$2s$" size="small")
    | from both sides.
  +tmath
    Mathr(formula="$\\frac{v^2-u^2}{2s}=a$")
  +th3
    | Lastly enter known values.
  +tmath
    Mathr(:formula="e1")
</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math.js";
export default {
  name: "Sv2u22as",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$\\frac{${maybeBracket(this.suvat.v)}^2-${maybeBracket(
        this.suvat.u
      )}^2}{2\\times${maybeBracket(this.suvat.s)}}$`;
    }
  }
};
</script>

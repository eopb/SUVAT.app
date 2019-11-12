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
    Mathr(:formula="e1")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(:formula="e2" size="small")
    | from both sides.
  +tmath
    Mathr(:formula="e3")
  +th3
    | Then divide both sides by
    Mathr(:formula="e4" size="small")
    | from both sides.
  +tmath
    Mathr(:formula="e5")
  +th3
    | Lastly enter known values.
  +tmath
    Mathr(:formula="e6")
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
  data: () => ({
    e1: "$v^2=u^2+2as$",
    e2: "$u^2$",
    e3: "$v^2-u^2=2as$",
    e4: "$2s$",
    e5: "$\\frac{v^2-u^2}{2s}=a$"
  }),
  computed: {
    e6: function() {
      return `$\\frac{${maybeBracket(this.suvat.v)}^2-${maybeBracket(
        this.suvat.u
      )}^2}{2${maybeBracket(this.suvat.s)}}=a$`;
    }
  }
};
</script>

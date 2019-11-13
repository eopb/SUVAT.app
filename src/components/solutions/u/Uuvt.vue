<template lang="pug">
include ../mixins.pug
div
  +th1
    | u = {{ (2 * suvat.s) / suvat.t - suvat.v }}
    sub
      | ms
      sup -1
  +sue
  +tmath 
    Mathr(formula="$s=\\frac{1}{2}(u+v)t$")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="$\\frac{1}{2}t$" size="small")
  +tmath
    Mathr(formula="$\\frac{2s}{t}=u+v$")
  +th3
    | Next lets rearrange this equation by subtracting
    Mathr(formula="$v$" size="small")
    | from both sides.
  +tmath
    Mathr(formula="$\\frac{2s}{t}-v=u$")
  +th3
    | Lastly enter known values.
  +tmath
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math.js";
export default {
  name: "Uuvt",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$\\frac{2\\times${maybeBracket(this.suvat.s)}}{${maybeBracket(
        this.suvat.t
      )}}-${maybeBracket(this.suvat.v)}$`;
    }
  }
};
</script>

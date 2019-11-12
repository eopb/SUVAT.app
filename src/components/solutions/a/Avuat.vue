<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (suvat.v - suvat.u) / suvat.t }}
    sub
      | ms
      sup -2
  +sue
  +tmath 
    Mathr(formula="$v=u+at$")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="$u$" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="$v-u=at$")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="$t$" size="small")
  +tmath 
    Mathr(formula="$\\frac{v-u}{t}=a$")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e6")
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
    e6: function() {
      return `$\\frac{${maybeBracket(this.suvat.v)}-${maybeBracket(
        this.suvat.u
      )}}{${maybeBracket(this.suvat.t)}}$`;
    }
  }
};
</script>

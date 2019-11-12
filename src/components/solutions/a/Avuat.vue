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
    Mathr(:formula="e1")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(:formula="e2" size="small")
    | from both sides.
  +tmath 
    Mathr(:formula="e3")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(:formula="e4" size="small")
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
  name: "Vvuat",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  data: () => ({
    e1: "$v=u+at$",
    e2: "$u$",
    e3: "$v-u=at$",
    e4: "$t$",
    e5: "$\\frac{v-u}{t}=a$"
  }),
  computed: {
    e6: function() {
      return `$\\frac{${maybeBracket(this.suvat.v)}-${maybeBracket(
        this.suvat.u
      )}}{${maybeBracket(this.suvat.t)}}$`;
    }
  }
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (suvat.s - suvat.u * suvat.t) / (0.5 * Math.pow(suvat.t, 2)) }}
    sub
      | ms
      sup -2
  +sue
  +tmath 
    Mathr(formula="$s=ut+\\frac{1}{2}at^2$")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="$ut$" size="small")
    | from both sides.
  +tmath
    Mathr(formula="$s-ut=\\frac{1}{2}at^2$")
  +th3
    | Next lets rearrange this equation by dividing both sides by
    Mathr(formula="$\\frac{1}{2}t^2$" size="small")
  +tmath
    Mathr(formula="$\\frac{s-ut}{\\frac{1}{2}t^2}=a$")
  +th3
    | Lastly enter known values.
  +tmath
    Mathr(:formula="e1")
</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math.js";
export default {
  name: "Asutat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$\\frac{${maybeBracket(this.suvat.s)}-${maybeBracket(
        this.suvat.u
      )}\\times${maybeBracket(this.suvat.t)}}{\\frac{1}{2}\\times${maybeBracket(
        this.suvat.t
      )}^2}$`;
    }
  }
};
</script>

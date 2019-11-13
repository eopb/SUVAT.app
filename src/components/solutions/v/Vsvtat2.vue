<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = {{ (suvat.s + 0.5 * suvat.a * Math.pow(suvat.t, 2)) / suvat.t }}
    sub
      | ms
      sup -1
  +sue
  +tmath 
    Mathr(formula="$s=vt-\\frac{1}{2}at^2$")
  +th3
    | First lets rearrange this equation by adding
    Mathr(formula="$\\frac{1}{2}at^2$" size="small")
    | to both sides.
  +tmath 
    Mathr(formula="$s+\\frac{1}{2}at^2=vt$")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="$t$" size="small")
  +tmath
    Mathr(formula="$\\frac{s+\\frac{1}{2}at^2}{t}=v$")
  +th3
    | Lastly enter known values.
  +tmath
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math";
export default {
  name: "Vsvtat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$\\frac{${maybeBracket(
        this.suvat.s
      )}+\\frac{1}{2}\\times${maybeBracket(this.suvat.a)}\\times${maybeBracket(
        this.suvat.t
      )}^2}{${this.suvat.t}}$`;
    }
  }
};
</script>

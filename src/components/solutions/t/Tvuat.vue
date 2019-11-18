<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      | t = {{ soloution }}
      sub s
    template(v-else) Can't solve for t
  +sue
  +tmath 
    Mathr(formula="v=u+at")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="u" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="v-u=at")
  +th3
    | Next divide both sides by
    Mathr(formula="a" size="small")
  +tmath 
    Mathr(formula="\\frac{v-u}{a}=t")
  +th3
    | Enter known values.
  +tmath 
    Mathr(:formula="e1")
  template(v-if="!isFinite(soloution)")
    +th3
      | Can't solve as the denominator
      Mathr(formula="=0" size="small")
      | Can't divide by zero.

</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Tvuat",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `\\frac{${MF.maybeBracket(this.suvat.v)}-${MF.maybeBracket(
        this.suvat.u
      )}}{${MF.maybeBracket(this.suvat.a)}}`;
    },
    soloution: function() {
      return (this.suvat.v - this.suvat.u) / this.suvat.a;
    }
  }
};
</script>

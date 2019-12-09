<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) Can't solve for a
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
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="t" size="small")
  +tmath 
    Mathr(formula="\\frac{v-u}{t}=a")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")
  template(v-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator
      Mathr(formula="=0" size="small")
      | Can't divide by zero.
</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Vvuat",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionA(this.soloution, this.dp);
    },
    e1: function() {
      return `\\frac{${MF.maybeBracket(this.suvat.v)}-${MF.maybeBracket(
        this.suvat.u
      )}}{${MF.maybeBracket(this.suvat.t)}}`;
    },
    soloution: function() {
      return (this.suvat.v - this.suvat.u) / this.suvat.t;
    }
  }
};
</script>

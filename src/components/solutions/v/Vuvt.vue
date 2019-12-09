<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) Can't solve for v
  +sue
  +tmath 
    Mathr(formula="s=\\frac{1}{2}(u+v)t")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="\\frac{1}{2}t" size="small")
  +tmath 
    Mathr(formula="\\frac{2s}{t}=u+v")
  +th3
    | Next lets rearrange this equation by subtracting
    Mathr(formula="u" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="\\frac{2s}{t}-u=v")
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
  name: "Vuvt",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionV(this.soloution, "", this.dp);
    },
    e1: function() {
      return `\\frac{2\\times${MF.maybeBracket(
        this.suvat.s
      )}}{${MF.maybeBracket(this.suvat.t)}}-${MF.maybeBracket(this.suvat.u)}`;
    },
    soloution: function() {
      return (2 * this.suvat.s) / this.suvat.t - this.suvat.u;
    }
  }
};
</script>

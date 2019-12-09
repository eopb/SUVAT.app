<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) Can't solve for a
  +sue
  +tmath 
    Mathr(formula="s=vt-\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="ut" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="s-vt=-\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by multiplying both sides by
    Mathr(formula="-1" size="small")
  +tmath 
    Mathr(formula="vt-s=\\frac{1}{2}at^2")
  +th3
    | Next lets rearrange this equation by dividing both sides by
    Mathr(formula="\\frac{1}{2}t^2" size="small")
  +tmath 
    Mathr(formula="\\frac{vt-s}{\\frac{1}{2}t^2}=a")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")
  template(v-if="!isFinite(soloution)")
    +th3
      | Can't solve as denominator
      Mathr(:formula="e2" size="small")
      | Can't divide by zero.
</template>

<script>
import Mathr from "../../Mathr.vue";
import MF from "../../math.js";
export default {
  name: "Asvtat2",
  props: ["suvat", "letter", "dp"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionA(this.soloution, this.dp);
    },
    e1: function() {
      return `\\frac{${MF.maybeBracket(this.suvat.v)}\\times${MF.maybeBracket(
        this.suvat.t
      )}-${MF.maybeBracket(this.suvat.s)}}{\\frac{1}{2}\\times${MF.maybeBracket(
        this.suvat.t
      )}^2}`;
    },
    e2: function() {
      return `\\frac{1}{2}\\times${MF.maybeBracket(this.suvat.t)}^2=0`;
    },
    soloution: function() {
      return (
        (this.suvat.v * this.suvat.t - this.suvat.s) /
        (0.5 * Math.pow(this.suvat.t, 2))
      );
    }
  }
};
</script>

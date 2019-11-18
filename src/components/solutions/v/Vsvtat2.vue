<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      Mathr(:formula="soloution_r" size="small")
    template(v-else) Can't solve for v
  +sue
  +tmath 
    Mathr(formula="s=vt-\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by adding
    Mathr(formula="\\frac{1}{2}at^2" size="small")
    | to both sides.
  +tmath 
    Mathr(formula="s+\\frac{1}{2}at^2=vt")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="t" size="small")
  +tmath
    Mathr(formula="\\frac{s+\\frac{1}{2}at^2}{t}=v")
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
import MF from "../../math";
export default {
  name: "Vsvtat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    soloution_r: function() {
      return MF.solutionV(this.soloution, "");
    },
    e1: function() {
      return `\\frac{${MF.maybeBracket(
        this.suvat.s
      )}+\\frac{1}{2}\\times${MF.maybeBracket(
        this.suvat.a
      )}\\times${MF.maybeBracket(this.suvat.t)}^2}{${this.suvat.t}}`;
    },
    soloution: function() {
      return (
        (this.suvat.s + 0.5 * this.suvat.a * Math.pow(this.suvat.t, 2)) /
        this.suvat.t
      );
    }
  }
};
</script>

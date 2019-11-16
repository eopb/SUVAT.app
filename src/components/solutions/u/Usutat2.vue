<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="isFinite(soloution)")
      | u = {{ soloution }}
      sub
        | ms
        sup -1
    template(v-else) Can't solve for u
  +sue
  +tmath 
    Mathr(formula="s=ut+\\frac{1}{2}at^2")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="\\frac{1}{2}at^2" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="s-\\frac{1}{2}at^2=ut")
  +th3
    | First lets rearrange this equation by dividing both sides by
    Mathr(formula="t" size="small")
  +tmath 
    Mathr(formula="\\frac{s-\\frac{1}{2}at^2}{t}=u")
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
import maybeBracket from "../../math.js";
export default {
  name: "Usutat2",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `\\frac{${maybeBracket(
        this.suvat.s
      )}-\\frac{1}{2}\\times${maybeBracket(this.suvat.a)}\\times${maybeBracket(
        this.suvat.t
      )}^2}{${maybeBracket(this.suvat.t)}}`;
    },
    soloution: function() {
      return (
        (this.suvat.s - 0.5 * this.suvat.a * Math.pow(this.suvat.t, 2)) /
        this.suvat.t
      );
    }
  }
};
</script>

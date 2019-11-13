// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = &plusmn;{{
    | Math.abs(
    | Math.sqrt(
    | Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s))
    | }}
    sub
      | ms
      sup -1
  +sue
  +tmath 
    Mathr(formula="$v^2=u^2+2as$")
  +th3
    | First lets square root both sides.
  +tmath 
    Mathr(formula="$v=\\sqrt{u^2+2as}$")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")
</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math";
export default {
  name: "Uv2u22as",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `$\\sqrt{${maybeBracket(this.suvat.u)}^2+2\\times${maybeBracket(
        this.suvat.a
      )}\\times${maybeBracket(this.suvat.s)}}$`;
    }
  }
};
</script>

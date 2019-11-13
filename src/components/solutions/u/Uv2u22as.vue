// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
include ../mixins.pug
div
  +th1
    template(v-if="inRoot >= 0")
      | u = &plusmn;{{
      | Math.abs(
      | Math.sqrt(
      | inRoot
      | )
      | )
      | }}
      sub
        | ms
        sup -1
    template(v-else) No real roots for u
  +sue
  +tmath 
    Mathr(formula="$v^2=u^2+2as$")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="$2as$" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="$v^2-2as=u^2$")
  +th3
    | Next square root both sides.
  +tmath 
    Mathr(formula="$\\sqrt{v^2-2as}=u$")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")
  template(v-if="inRoot < 0")
    +th3
      | Can't solve as
      Mathr(:formula="e2" size="small")
      | and therefore has no real roots.
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
      return `$\\sqrt{${maybeBracket(this.suvat.v)}^2-2\\times${maybeBracket(
        this.suvat.a
      )}\\times${maybeBracket(this.suvat.s)}}$`;
    },
    e2: function() {
      return `$${maybeBracket(this.suvat.v)}^2-2\\times${maybeBracket(
        this.suvat.a
      )}\\times${maybeBracket(this.suvat.s)}<0$`;
    },
    inRoot: function() {
      return Math.pow(this.suvat.v, 2) - 2 * this.suvat.a * this.suvat.s;
    }
  }
};
</script>

<template lang="pug">
include ../mixins.pug
div
  +th1
    | u = {{ suvat.v - suvat.a * suvat.t }}
    sub
      | ms
      sup -1
  +sue
  +tmath 
    Mathr(formula="v=u+at")
  +th3
    | First lets rearrange this equation by subtracting
    Mathr(formula="at" size="small")
    | from both sides.
  +tmath 
    Mathr(formula="v-at=u")
  +th3
    | Lastly enter known values.
  +tmath 
    Mathr(:formula="e1")

</template>

<script>
import Mathr from "../../Mathr.vue";
import maybeBracket from "../../math";
export default {
  name: "Uvuat",
  props: ["suvat", "letter"],
  components: {
    Mathr
  },
  computed: {
    e1: function() {
      return `${maybeBracket(this.suvat.v)}-${maybeBracket(
        this.suvat.a
      )}\\times${maybeBracket(this.suvat.t)}`;
    }
  }
};
</script>

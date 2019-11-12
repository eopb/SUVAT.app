<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (suvat.s - suvat.u * suvat.t) / (0.5 * Math.pow(suvat.t, 2)) }}
    sub
      | ms
      sup -2
  +sue
  +tmath
    mi s
    mo =
    mi u
    mi t
    mo +
    mfrac
      mn 1
      mn 2
    mi a
    msup
      mi t
      mn 2
  +th3
    | First lets rearrange this equation by subtracting
    vue-mathjax(:formula="ut")
    | from both sides.
  +tmath
    mi s
    mo -
    mi u
    mi t
    mo =
    mfrac
      mn 1
      mn 2
    mi a
    msup
      mi t
      mn 2
  +th3
    | Next lets rearrange this equation by dividing both sides by
    math
      mfrac
        mn 1
        mn 2
      msup
        mi t
        mn 2
  +tmath
    mfrac
      div
        mi s
        mo -
        mi u
        mi t
      mpadded
        mfrac
          mn 1
          mn 2
        msup
          mi t
          mn 2
    mo =
    mi a
  +th3
    | Lastly enter known values.
  +tmath
    mfrac
      div
        mn {{ suvat.s }}
        mo -
        mn {{ suvat.u }}
        mo &times;
        mn {{ suvat.t }}
      mpadded
        mfrac
          mn 1
          mn 2
        mo &times;
        msup
          mn {{ suvat.t }}
          mn 2
</template>

<script>
import { VueMathjax } from "vue-mathjax";
export default {
  name: "Asutat2",
  props: ["suvat", "letter"],
  components: {
    "vue-mathjax": VueMathjax
  },
  data: () => ({
    ut: "$ut$"
  }),
  computed: {
    eqa: function() {
      return "$\\frac{a}{" + this.suvat.u + "}$";
    }
  }
};
</script>

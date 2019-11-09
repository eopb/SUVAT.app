<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = {{ (2 * suvat.s) / suvat.t - suvat.u }}
    sub
      | ms
      sup -1
  +sue
  +tmath
    mi s
    mo =
    mfrac
      mn 1
      mn 2
    mo (
    mi u
    mo +
    mi v
    mo )
    mi t
  +th3
    | Next lets rearrange this equation by subtracting
    math
      mi u
    | from both sides.
  +tmath
    mfrac
      div
        mn 2
        mi s
      mi t
    mo -
    mi u
    mo =
    mi v
  +th3
    | Lastly enter known values.
  +tmath
    mfrac
      div
        mn 2
        mo &times;
        mn {{ suvat.s }}
      mn {{ suvat.t }}
    mo -
    mn {{ suvat.u }}

</template>

<script>
export default {
  name: "Vuvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

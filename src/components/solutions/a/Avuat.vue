<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (suvat.v - suvat.u) / suvat.t }}
    sub
      | ms
      sup -2
  +sue
  +tmath
    mi v
    mo =
    mi u
    mo +
    mi a
    mi t
  +th3
    | First lets rearrange this equation by subtracting
    math
      mi u
    | from both sides.
  +tmath
    mi v
    mo -
    mi u
    mo =
    mi a
    mi t
  +th3
    | First lets rearrange this equation by dividing both sides by
    math
      mi t
  +tmath
    mfrac
      div
        mi v
        mo -
        mi u
      mi t
    mo =
    mi a
  +th3
    | Lastly enter known values.
  +tmath
    mfrac
      div
        mn {{ suvat.v }}
        mo -
        mn {{ suvat.u }}
      mn {{ suvat.t }}
</template>

<script>
export default {
  name: "Vvuat",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

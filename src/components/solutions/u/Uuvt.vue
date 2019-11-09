<template lang="pug">
include ../mixins.pug
div
  +th1
    | u = {{ (2 * suvat.s) / suvat.t - suvat.v }}
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
    | First lets rearrange this equation by dividing both sides by
    math
      mfrac
        mn 1
        mn 2
      mi t
  +tmath
    mfrac
      div
        mn 2
        mi s
      mi t
    mo =
    mi u
    mo +
    mi v
  +th3
    | Next lets rearrange this equation by subtracting
    math
      mi v
    | from both sides.
  +tmath
    mfrac
      div
        mn 2
        mi s
      mi t
    mo -
    mi v
    mo =
    mi u
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
    mn {{ suvat.v }}

</template>

<script>
export default {
  name: "Uuvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

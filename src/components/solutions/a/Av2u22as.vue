<template lang="pug">
include ../mixins.pug
div
  +th1
    | a = {{ (Math.pow(suvat.v, 2) - Math.pow(suvat.u, 2)) / (2 * suvat.s) }}
    sub
      | ms
      sup -2
  +th2
    | Solution
  +th3
    | Using the equation.
  transition(appear, name='fade')
    div
      math
        msup
          mi v
          mn 2
        mo =
        msup
          mi u
          mn 2
        mo +
        mn 2
        mi a
        mi s
  +th3
    | First lets rearrange this equation by subtracting
    math
      msup
        mi u
        mn 2
    | from both sides.
  +tmath
    msup
      mi v
      mn 2
    mo -
    msup
      mi u
      mn 2
    mo =
    mn 2
    mi a
    mi s
  +th3
    | Then divide both side by
    math
      mn 2
      mi s
    | from both sides.
  +tmath
    mfrac
      mn
        msup
          mi v
          mn 2
        mo -
        msup
          mi u
          mn 2
      mn
        mn 2
        mi s
    mo =
    mi a
  +th3
    | Lastly enter known values.
  tmath
    mfrac
      mn
        msup
          mn {{ suvat.v }}
          mn 2
        mo -
        msup
          mn {{ suvat.u }}
          mn 2
      mn
        mn 2
        mo &times;
        mn {{ suvat.s }}
</template>

<script>
export default {
  name: "Sv2u22as",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

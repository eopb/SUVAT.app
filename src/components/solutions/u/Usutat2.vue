<template lang="pug">
include ../mixins.pug
div
  +th1
    | u = {{ (suvat.s - 0.5 * suvat.a * Math.pow(suvat.t, 2)) / suvat.t }}
    sub
      | ms
      sup -1
  +th2
    | Solution
  +th3
    | Using the equation.
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
    math
      mfrac
        mn 1
        mn 2
      mi a
      msup
        mi t
        mn 2
    | from both sides.
  +tmath
    mi s
    mo -
    mfrac
      mn 1
      mn 2
    mi a
    msup
      mi t
      mn 2
    mo =
    mi u
    mi t
  +th3
    | First lets rearrange this equation by dividing both sides by
    math
      mi t
  +tmath
    mfrac
      div
        mi s
        mo -
        mfrac
          mn 1
          mn 2
        mi a
        msup
          mi t
          mn 2
      mi t
  mo =
  mi u
  +th3
    | Lastly enter known values.
  +tmath
    mfrac
      div
        mn {{ suvat.s }}
        mo -
        mfrac
          mn 1
          mn 2
        mo &times;
        mn {{ suvat.a }}
        mo &times;
        msup
          mn {{ suvat.t }}
          mn 2
      mn {{ suvat.t }}

</template>

<script>
export default {
  name: "Usutat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

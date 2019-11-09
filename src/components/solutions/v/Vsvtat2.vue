<template lang="pug">
include ../mixins.pug
div
  transition(appear, name='fade')
    h1
      | v = {{ (suvat.s + 0.5 * suvat.a * Math.pow(suvat.t, 2)) / suvat.t }}
      sub
        | ms
        sup -1
  transition(appear, name='fade')
    h2 Solution
  transition(appear, name='fade')
    h3 Using the equation.
  transition(appear, name='fade')
    div
      math
        mi s
        mo =
        mi v
        mi t
        mo -
        mfrac
          mn 1
          mn 2
        mi a
        msup
          mi t
          mn 2
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by adding
      math
        mfrac
          mn 1
          mn 2
        mi a
        msup
          mi t
          mn 2
      |         to both sides.
  transition(appear, name='fade')
    div
      math
        mi s
        mo +
        mfrac
          mn 1
          mn 2
        mi a
        msup
          mi t
          mn 2
        mo =
        mi v
        mi t
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by dividing both sides by
      math
        mi t
  transition(appear, name='fade')
    div
      math
        mfrac
          div
            mi s
            mo +
            mfrac
              mn 1
              mn 2
            mi a
            msup
              mi t
              mn 2
          mi t
      mo =
      mi v
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
        mfrac
          div
            mn {{ suvat.s }}
            mo +
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
  name: "Vsvtat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

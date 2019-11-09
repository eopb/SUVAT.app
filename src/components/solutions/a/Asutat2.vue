<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | a = {{ (suvat.s - suvat.u * suvat.t) / (0.5 * Math.pow(suvat.t, 2)) }}
      sub
        | ms
        sup -2
  transition(appear, name='fade')
    h2 Solution
  transition(appear, name='fade')
    h3 Using the equation.
  transition(appear, name='fade')
    div
      math
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
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by subtracting
      math
        mi u
        mi t
      |         from both sides.
  transition(appear, name='fade')
    div
      math
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
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by dividing both sides by
      math
        mfrac
          mn 1
          mn 2
        msup
          mi t
          mn 2
  transition(appear, name='fade')
    div
      math
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
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
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
export default {
  name: "Asutat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

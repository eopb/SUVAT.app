<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | a = {{ (suvat.v * suvat.t - suvat.s) / (0.5 * Math.pow(suvat.t, 2)) }}
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
      | First lets rearrange this equation by subtracting
      math
        mi v
        mi t
      |         from both sides.
  transition(appear, name='fade')
    div
      math
        mi s
        mo -
        mi v
        mi t
        mo =
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
      | First lets rearrange this equation by multiplying both sides by
      math
        mo -
        mn 1
  transition(appear, name='fade')
    div
      math
        mi v
        mi t
        mo -
        mi s
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
        mi v
        mi t
        mo -
        mi s
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
        mn {{ suvat.v }}
        mo &times;
        mn {{ suvat.t }}
        mo -
        mn {{ suvat.s }}
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
  name: "Asvtat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

<template lang="pug">
include ../mixins.pug
div
  transition(appear, name='fade')
    h1
      | u = {{ (2 * suvat.s) / suvat.t - suvat.v }}
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
        mfrac
          mn 1
          mn 2
        mo (
        mi u
        mo +
        mi v
        mo )
        mi t
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by dividing both sides by
      math
        mfrac
          mn 1
          mn 2
        mi t
  transition(appear, name='fade')
    div
      math
        mfrac
          div
            mn 2
            mi s
          mi t
      mo =
      mi u
      mo +
      mi v
  transition(appear, name='fade')
    h3
      | Next lets rearrange this equation by subtracting
      math
        mi v
      |         from both sides.
  transition(appear, name='fade')
    div
      math
        mfrac
          div
            mn 2
            mi s
          mi t
      mo -
      mi v
      mo =
      mi u
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
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

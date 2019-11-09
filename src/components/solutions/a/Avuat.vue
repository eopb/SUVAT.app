<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | a = {{ (suvat.v - suvat.u) / suvat.t }}
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
        mi v
        mo =
        mi u
        mo +
        mi a
        mi t
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by subtracting
      math
        mi u
      |         from both sides.
  transition(appear, name='fade')
    div
      math
        mi v
        mo -
        mi u
        mo =
        mi a
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
            mi v
            mo -
            mi u
          mi t
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

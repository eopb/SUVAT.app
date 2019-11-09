<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | s = {{ (Math.pow(suvat.v, 2) - Math.pow(suvat.u, 2)) / (2 * suvat.a) }}
      sub m
  transition(appear, name='fade')
    h2 Solution
  transition(appear, name='fade')
    h3 Using the equation.
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
  transition(appear, name='fade')
    h3
      | First lets rearrange this equation by subtracting
      math
        msup
          mi u
          mn 2
      |         from both sides.
  transition(appear, name='fade')
    div
      math
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
  transition(appear, name='fade')
    h3
      | Then divide both side by
      math
        mn 2
        mi a
      |         from both sides.
  transition(appear, name='fade')
    div
      math
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
            mi a
        mo =
        mi s
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
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
            mn {{ suvat.a }}

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

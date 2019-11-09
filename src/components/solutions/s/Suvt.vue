<template lang="pug">
include ../mixins.pug
div
  transition(appear, name='fade')
    h1
      | s = {{ 0.5 * (suvat.u + suvat.v) * suvat.t }}
      sub m
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
    h3 Enter known values.
  transition(appear, name='fade')
    div
      math
        mn s
        mo =
        mfrac
          mn 1
          mn 2
        mo &times;
        mo (
        mn {{ suvat.u }}
        mo +
        mn {{ suvat.v }}
        mo )
        mo &times;
        mn {{ suvat.t }}
</template>

<script>
export default {
  name: "Suvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

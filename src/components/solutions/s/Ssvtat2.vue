<template lang="pug">
div
  transition(appear='', name='fade')
    h1
      | s = {{ suvat.v * suvat.t - 0.5 * suvat.a * Math.pow(suvat.t, 2) }}
      sub m
  transition(appear='', name='fade')
    h2 Solution
  transition(appear='', name='fade')
    h3 Using the equation.
  transition(appear='', name='fade')
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
  transition(appear='', name='fade')
    h3 Enter known values.
  transition(appear='', name='fade')
    div
      math
        mi s
        mo =
        mn {{ suvat.v }}
        mo ×
        mn {{ suvat.t }}
        mo -
        mfrac
          mn 1
          mn 2
        mo ×
        mn {{ suvat.a }}
        mo ×
        msup
          mn {{ suvat.t }}
          mn 2

</template>

<script>
export default {
  name: "Ssvtat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

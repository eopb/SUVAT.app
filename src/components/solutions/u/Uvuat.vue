<template lang="pug">
div
  transition(appear='', name='fade')
    h1
      | u = {{ suvat.v - suvat.a * suvat.t }}
      sub
        | ms
        sup -1
  transition(appear='', name='fade')
    h2 Solution
  transition(appear='', name='fade')
    h3 Using the equation.
  transition(appear='', name='fade')
    div
      math
        mi v
        mo =
        mi u
        mo +
        mi a
        mi t
  transition(appear='', name='fade')
    h3
      | First lets rearrange this equation by subtracting
      math
        mi a
        mi t
      |         from both sides.
  transition(appear='', name='fade')
    div
      math
        mi v
        mo -
        mi a
        mi t
        mo =
        mi u
  transition(appear='', name='fade')
    h3 Lastly enter known values.
  transition(appear='', name='fade')
    div
      math
        mn {{ suvat.v }}
        mo -
        mn {{ suvat.a }}
        mo ×
        mn {{ suvat.t }}

</template>

<script>
export default {
  name: "Uvuat",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

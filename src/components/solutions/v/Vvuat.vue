<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | v = {{ suvat.u + suvat.a * suvat.t }}
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
        mi v
        mo =
        mi u
        mo +
        mi a
        mi t
  transition(appear, name='fade')
    h3 Enter known values.
  transition(appear, name='fade')
    div
      math
        mn {{ suvat.u }}
        mo +
        mn {{ suvat.a }}
        mo &times;
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

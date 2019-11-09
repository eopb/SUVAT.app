// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
div
  transition(appear, name='fade')
    h1
      | v = &plusmn;{{
      | Math.abs(
      | Math.sqrt(
      | Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s))
      | }}
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
    h3 First lets square root both sides.
  transition(appear, name='fade')
    div
      math
        mn v
        mo =
        msqrt
          msup
            mn u
            mn 2
          mo +
          mn 2
          mn a
          mn s
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
        msqrt
          msup
            mi {{ suvat.u }}
            mn 2
          mo +
          mn 2
          mo &times;
          mi {{ suvat.a }}
          mo &times;
          mi {{ suvat.s }}
</template>

<script>
export default {
  name: "Uv2u22as",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

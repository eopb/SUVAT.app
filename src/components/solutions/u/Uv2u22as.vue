// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
include ../mixins.pug
div
  transition(appear, name='fade')
    h1
      | u = &plusmn;{{
      | Math.abs(
      | Math.sqrt(
      | Math.pow(this.suvat.v, 2) - 2 * this.suvat.a * this.suvat.s
      | )
      | )
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
    h3
      | First lets rearrange this equation by subtracting
      math
        mn 2
        mi a
        mi s
      |         from both sides.
  transition(appear, name='fade')
    div
      math
        msup
          mi v
          mn 2
        mo -
        mn 2
        mi a
        mi s
        mo =
        msup
          mi u
          mn 2
  transition(appear, name='fade')
    h3 Next square root both sides.
  transition(appear, name='fade')
    div
      math
        msqrt
          msup
            mi v
            mn 2
          mo -
          mn 2
          mi a
          mi s
        mo =
        mi u
  transition(appear, name='fade')
    h3 Lastly enter known values.
  transition(appear, name='fade')
    div
      math
        msqrt
          msup
            mn {{ suvat.v }}
            mn 2
          mo -
          mn 2
          mo &times;
          mn {{ suvat.a }}
          mo &times;
          mn {{ suvat.s }}
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

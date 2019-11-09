// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = &plusmn;{{
    | Math.abs(
    | Math.sqrt(
    | Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s))
    | }}
    sub
      | ms
      sup -1
  +th2
    | Solution
  +th3
    | Using the equation.
  +tmath
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
  +th3
    | First lets square root both sides.
  +tmath
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
  +th3
    | Lastly enter known values.
  +tmath
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

// TODO add better support for zero real roots and multiple soloutions.

<template lang="pug">
include ../mixins.pug
div
  +th1
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
    | First lets rearrange this equation by subtracting
    math
      mn 2
      mi a
      mi s
    | from both sides.
  +tmath
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
  +th3
    | Next square root both sides.
  +tmath
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
  +th3
    | Lastly enter known values.
  +tmath
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

<template lang="pug">
include ../mixins.pug
div
  +th1
    | v = {{ suvat.u + suvat.a * suvat.t }}
    sub
      | ms
      sup -1
  +th2
    | Solution
  +th3
    | Using the equation.
  +tmath
    mi v
    mo =
    mi u
    mo +
    mi a
    mi t
  +th3
    | Enter known values.
  +tmath
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

<template lang="pug">
include ../mixins.pug
div
  +th1
    | u = {{ suvat.v - suvat.a * suvat.t }}
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
    | First lets rearrange this equation by subtracting
    math
      mi a
      mi t
    | from both sides.
  +tmath
    mi v
    mo -
    mi a
    mi t
    mo =
    mi u
  +th3
    | Lastly enter known values.
  +tmath
    mn {{ suvat.v }}
    mo -
    mn {{ suvat.a }}
    mo &times;
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

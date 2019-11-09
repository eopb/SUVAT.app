<template lang="pug">
include ../mixins.pug
div
  +th1
    | s = {{ suvat.v * suvat.t - 0.5 * suvat.a * Math.pow(suvat.t, 2) }}
    sub m
  +sue
  +tmath
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
  +th3
    | Enter known values.
  +tmath
    mi s
    mo =
    mn {{ suvat.v }}
    mo &times;
    mn {{ suvat.t }}
    mo -
    mfrac
      mn 1
      mn 2
    mo &times;
    mn {{ suvat.a }}
    mo &times;
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

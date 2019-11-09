<template lang="pug">
include ../mixins.pug
div
  +th1
    | s = {{ 0.5 * (suvat.u + suvat.v) * suvat.t }}
    sub m
  +sue
  +tmath
    mi s
    mo =
    mfrac
      mn 1
      mn 2
    mo (
    mi u
    mo +
    mi v
    mo )
    mi t
  +th3
    | Enter known values.
  +tmath
    mn s
    mo =
    mfrac
      mn 1
      mn 2
    mo &times;
    mo (
    mn {{ suvat.u }}
    mo +
    mn {{ suvat.v }}
    mo )
    mo &times;
    mn {{ suvat.t }}
</template>

<script>
export default {
  name: "Suvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

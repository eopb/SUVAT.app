<template>
  <div>
    <transition appear name="fade">
      <h1>
        s = {{ 0.5 * (suvat.u + suvat.v) * suvat.t }}
        <sub>m</sub>
      </h1>
    </transition>
    <transition appear name="fade">
      <h2>Solution</h2>
    </transition>
    <transition appear name="fade">
      <h3>Using the equation.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>s</mi>
          <mo>=</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mo>(</mo>
          <mi>u</mi>
          <mo>+</mo>
          <mi>v</mi>
          <mo>)</mo>
          <mi>t</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>Enter known values.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mn>s</mn>
          <mo>=</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mo>&times;</mo>
          <mo>(</mo>
          <mn>{{ suvat.u }}</mn>
          <mo>+</mo>
          <mn>{{ suvat.v }}</mn>
          <mo>)</mo>
          <mo>&times;</mo>
          <mn>{{ suvat.t }}</mn>
        </math>
      </div>
    </transition>
  </div>
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

<template>
  <div>
    <transition appear name="fade">
      <h1>
        s = {{ suvat.v * suvat.t - 0.5 * suvat.a * Math.pow(suvat.t, 2) }}
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
          <mi>v</mi>
          <mi>t</mi>
          <mo>-</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mi>a</mi>
          <msup>
            <mi>t</mi>
            <mn>2</mn>
          </msup>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>Enter known values.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>s</mi>
          <mo>=</mo>
          <mn>{{ suvat.v }}</mn>
          <mo>&times;</mo>
          <mn>{{ suvat.t }}</mn>
          <mo>-</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mo>&times;</mo>
          <mn>{{ suvat.a }}</mn>
          <mo>&times;</mo>
          <msup>
            <mn>{{ suvat.t }}</mn>
            <mn>2</mn>
          </msup>
        </math>
      </div>
    </transition>
  </div>
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

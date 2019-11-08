<template>
  <div>
    <transition appear name="fade">
      <h1>
        v = {{ (2 * suvat.s) / suvat.t - suvat.u }}
        <sub>
          ms
          <sup>-1</sup>
        </sub>
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
      <h3>
        Next lets rearrange this equation by subtracting
        <math>
          <mi>u</mi>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <div>
              <mn>2</mn>
              <mi>s</mi>
            </div>
            <mi>t</mi>
          </mfrac>
          <mo>-</mo>
          <mi>u</mi>
          <mo>=</mo>
          <mi>v</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>Lastly enter known values.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <div>
              <mn>2</mn>
              <mo>&times;</mo>
              <mn>{{ suvat.s }}</mn>
            </div>
            <mn>{{ suvat.t }}</mn>
          </mfrac>
          <mo>-</mo>
          <mn>{{ suvat.u }}</mn>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Vuvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

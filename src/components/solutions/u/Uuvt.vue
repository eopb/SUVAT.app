<template>
  <div>
    <transition appear name="fade">
      <h1>
        u = {{ (2 * suvat.s) / suvat.t - suvat.v }}
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
        First lets rearrange this equation by dividing both sides by
        <math>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mi>t</mi>
        </math>
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
          <mo>=</mo>
          <mi>u</mi>
          <mo>+</mo>
          <mi>v</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        Next lets rearrange this equation by subtracting
        <math>
          <mi>v</mi>
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
          <mi>v</mi>
          <mo>=</mo>
          <mi>u</mi>
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
              <mi>{{ suvat.s }}</mi>
            </div>
            <mi>{{ suvat.t }}</mi>
          </mfrac>
          <mo>-</mo>
          <mi>{{ suvat.v }}</mi>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Uuvt",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

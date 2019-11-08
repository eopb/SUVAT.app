<template>
  <div>
    <transition appear name="fade">
      <h1>
        a = {{ (suvat.v - suvat.u) / suvat.t }}
        <sub>
          ms
          <sup>-2</sup>
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
          <mi>v</mi>
          <mo>=</mo>
          <mi>u</mi>
          <mo>+</mo>
          <mi>a</mi>
          <mi>t</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        First lets rearrange this equation by subtracting
        <math>
          <mi>u</mi>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>v</mi>
          <mo>-</mo>
          <mi>u</mi>
          <mo>=</mo>
          <mi>a</mi>
          <mi>t</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        First lets rearrange this equation by dividing both sides by
        <math>
          <mi>a</mi>
        </math>
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <div>
              <mi>v</mi>
              <mo>-</mo>
              <mi>u</mi>
            </div>
            <mi>t</mi>
          </mfrac>
          <mo>=</mo>
          <mi>a</mi>
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
              <mi>{{ suvat.v }}</mi>
              <mo>-</mo>
              <mi>{{ suvat.u }}</mi>
            </div>
            <mi>{{ suvat.t }}</mi>
          </mfrac>
        </math>
      </div>
    </transition>
  </div>
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

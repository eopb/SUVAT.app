<template>
  <div>
    <transition appear name="fade">
      <h1>
        s = {{ (suvat.s - 0.5 * suvat.a * Math.pow(suvat.t, 2)) / suvat.t }}
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
          <mi>u</mi>
          <mi>t</mi>
          <mo>+</mo>
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
      <h3>
        First lets rearrange this equation by subtracting
        <math>
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
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>s</mi>
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
          <mo>=</mo>
          <mi>u</mi>
          <mi>t</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        First lets rearrange this equation by dividing both sides by
        <math>
          <mi>t</mi>
        </math>
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <div>
              <mi>s</mi>
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
            </div>
            <mi>t</mi>
          </mfrac>
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
              <mi>{{ suvat.s }}</mi>
              <mo>-</mo>
              <mfrac>
                <mn>1</mn>
                <mn>2</mn>
              </mfrac>
              <mo>&times;</mo>
              <mi>{{ suvat.a }}</mi>
              <mo>&times;</mo>
              <msup>
                <mi>{{ suvat.t }}</mi>
                <mn>2</mn>
              </msup>
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
  name: "Usutat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

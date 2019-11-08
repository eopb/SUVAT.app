<template>
  <div>
    <transition appear name="fade">
      <h1>
        u = {{ (suvat.v * suvat.t - suvat.s) / (0.5 * Math.pow(suvat.t, 2)) }}
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
      <h3>
        First lets rearrange this equation by subtracting
        <math>
          <mi>v</mi>
          <mi>t</mi>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>s</mi>
          <mo>-</mo>
          <mi>v</mi>
          <mi>t</mi>
          <mo>=</mo>
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
      <h3>
        First lets rearrange this equation by multiplying both sides by
        <math>
          <mo>-</mo>
          <mn>1</mn>
        </math>
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>v</mi>
          <mi>t</mi>
          <mo>-</mo>
          <mi>s</mi>

          <mo>=</mo>
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
        First lets rearrange this equation by dividing both sides by
        <math>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <msup>
            <mi>t</mi>
            <mn>2</mn>
          </msup>
        </math>
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <div>
              <mi>v</mi>
              <mi>t</mi>
              <mo>-</mo>
              <mi>s</mi>
            </div>
            <mpadded>
              <mfrac>
                <mn>1</mn>
                <mn>2</mn>
              </mfrac>
              <msup>
                <mi>t</mi>
                <mn>2</mn>
              </msup>
            </mpadded>
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
              <mn>{{ suvat.v }}</mn>
              <mo>&times;</mo>
              <mn>{{ suvat.t }}</mn>
              <mo>-</mo>
              <mn>{{ suvat.s }}</mn>
            </div>
            <mpadded>
              <mfrac>
                <mn>1</mn>
                <mn>2</mn>
              </mfrac>
              <mo>&times;</mo>
              <msup>
                <mn>{{ suvat.t }}</mn>
                <mn>2</mn>
              </msup>
            </mpadded>
          </mfrac>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Asvtat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

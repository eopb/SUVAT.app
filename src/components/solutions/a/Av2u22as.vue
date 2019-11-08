<template>
  <div>
    <transition appear name="fade">
      <h1>
        a = {{ (Math.pow(suvat.v, 2) - Math.pow(suvat.u, 2)) / (2 * suvat.s) }}
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
          <msup>
            <mi>v</mi>
            <mn>2</mn>
          </msup>
          <mo>=</mo>
          <msup>
            <mi>u</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>2</mn>
          <mi>a</mi>
          <mi>s</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        First lets rearrange this equation by subtracting
        <math>
          <msup>
            <mi>u</mi>
            <mn>2</mn>
          </msup>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <msup>
            <mi>v</mi>
            <mn>2</mn>
          </msup>
          <mo>-</mo>
          <msup>
            <mi>u</mi>
            <mn>2</mn>
          </msup>
          <mo>=</mo>

          <mn>2</mn>
          <mi>a</mi>
          <mi>s</mi>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>
        Then divide both side by
        <math>
          <mn>2</mn>
          <mi>s</mi>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mfrac>
            <mn>
              <msup>
                <mi>v</mi>
                <mn>2</mn>
              </msup>
              <mo>-</mo>
              <msup>
                <mi>u</mi>
                <mn>2</mn>
              </msup>
            </mn>
            <mn>
              <mn>2</mn>
              <mi>s</mi>
            </mn>
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
            <mn>
              <msup>
                <mn>{{ suvat.v }}</mn>
                <mn>2</mn>
              </msup>
              <mo>-</mo>
              <msup>
                <mn>{{ suvat.u }}</mn>
                <mn>2</mn>
              </msup>
            </mn>
            <mn>
              <mn>2</mn>
              <mo>&times;</mo>
              <mn>{{ suvat.s }}</mn>
            </mn>
          </mfrac>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Sv2u22as",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

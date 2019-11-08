// TODO add better support for zero real roots and multiple soloutions.

<template>
  <div>
    <transition appear name="fade">
      <h1>
        v = &plusmn;{{
        Math.abs(
        Math.sqrt(
        Math.pow(this.suvat.u, 2) + 2 * this.suvat.a * this.suvat.s
        )
        )
        }}
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
      <h3>First lets square root both sides.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>v</mi>
          <mo>=</mo>
          <msqrt>
            <msup>
              <mi>u</mi>
              <mn>2</mn>
            </msup>
            <mo>+</mo>
            <mn>2</mn>
            <mi>a</mi>
            <mi>s</mi>
          </msqrt>
        </math>
      </div>
    </transition>
    <transition appear name="fade">
      <h3>Lastly enter known values.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <msqrt>
            <msup>
              <mi>{{ suvat.u }}</mi>
              <mn>2</mn>
            </msup>
            <mo>+</mo>
            <mn>2</mn>
            <mo>&times;</mo>
            <mi>{{ suvat.a }}</mi>
            <mo>&times;</mo>
            <mi>{{ suvat.s }}</mi>
          </msqrt>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Uv2u22as",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

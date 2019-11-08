<template>
  <div>
    <transition appear name="fade">
      <h1>
        v = {{ suvat.u + suvat.a * suvat.t }}
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
      <h3>Enter known values.</h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mn>{{ suvat.u }}</mn>
          <mo>+</mo>
          <mn>{{ suvat.a }}</mn>
          <mo>&times;</mo>
          <mn>{{ suvat.t }}</mn>
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

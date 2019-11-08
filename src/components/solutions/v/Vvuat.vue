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
          <mi>{{ suvat.u }}</mi>
          <mo>+</mo>
          <mi>{{ suvat.a }}</mi>
          <mo>&times;</mo>
          <mi>{{ suvat.t }}</mi>
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

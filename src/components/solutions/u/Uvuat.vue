<template>
  <div>
    <transition appear name="fade">
      <h1>
        s = {{suvat.v -(suvat.a * suvat.t) }}
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
          <mi>a</mi>
          <mi>t</mi>
        </math>
        from both sides.
      </h3>
    </transition>
    <transition appear name="fade">
      <div>
        <math>
          <mi>v</mi>
          <mo>-</mo>
          <mi>a</mi>
          <mi>t</mi>
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
          <mi>{{suvat.v}}</mi>
          <mo>-</mo>
          <mi>{{suvat.a}}</mi>
          <mo>&times;</mo>
          <mi>{{suvat.t}}</mi>
        </math>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Uvuat",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

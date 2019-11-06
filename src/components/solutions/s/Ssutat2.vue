<template>
  <div>
    <transition appear name="fade">
      <h1>
        s = {{(suvat.u * suvat.t ) + (0.5*suvat.a * (Math.pow(suvat.t, 2)))}}
        <sub>
          ms
          <sup>-1</sup>
        </sub>
      </h1>
    </transition>
    <transition appear name="fade">
      <h2>Solution</h2>
    </transition>
    <div>
      <math>
        <mi>s</mi>
        <mo>=</mo>
        <mi>s</mi>
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
  </div>
</template>

<script>
export default {
  name: "Ssutat2",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>

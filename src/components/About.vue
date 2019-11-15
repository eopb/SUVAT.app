<template>
  <div id="about">
    <div>
      <h1>About suvat</h1>
      <p>Suvat is first and foremost acronym.</p>
      <p>
        s =
        <a href="https://en.wikipedia.org/wiki/Displacement_(vector)"
          >displacement</a
        >
      </p>
      <p>
        u = initial
        <a href="https://en.wikipedia.org/wiki/Velocity">velocity</a>
      </p>
      <p>
        v = final
        <a href="https://en.wikipedia.org/wiki/Velocity">velocity</a>
      </p>
      <p>
        a =
        <a href="https://en.wikipedia.org/wiki/Acceleration">acceleration</a>
      </p>
      <p>
        t =
        <a href="https://en.wikipedia.org/wiki/Time">time</a>
      </p>
      <p>These variables are linked by the suvat equations.</p>
      <Mathr
        formula="$v=u+at\\s=ut+\frac{1}{2}at^2\\s=\frac{1}{2}(u+v)t\\v^2=u^2+2as\\s=vt-\frac{1}{2}at^2$"
      />
      <p>
        Using these equations any three variables combined with the correct
        equations can be used to calcuate the other two values.
      </p>
      <p>
        This makes it easy to solve physics problems with
        <a
          href="https://en.wikipedia.org/wiki/Equations_of_motion#Uniform_acceleration"
          >constant acceleration</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import Mathr from "./Mathr.vue";
export default {
  name: "About",
  components: {
    Mathr
  }
};
</script>

<style scoped lang="sass">

#about
  display: flex
  justify-content: center
  text-align: left
  div
    width: 90%
    @media (min-width: 820px)
      width: 800px
    p
      font-size: 1.1em
</style>

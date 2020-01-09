<template>
  <div id="about">
    <div>
      <h1>About suvat</h1>
      <p>Suvat is first and foremost an acronym.</p>
      <ul>
        <li>
          s =
          <a href="https://en.wikipedia.org/wiki/Displacement_(vector)"
            >displacement</a
          >
        </li>
        <li>
          u = initial
          <a href="https://en.wikipedia.org/wiki/Velocity">velocity</a>
        </li>
        <li>
          v = final
          <a href="https://en.wikipedia.org/wiki/Velocity">velocity</a>
        </li>
        <li>
          a =
          <a href="https://en.wikipedia.org/wiki/Acceleration">acceleration</a>
        </li>
        <li>
          t =
          <a href="https://en.wikipedia.org/wiki/Time">time</a>
        </li>
      </ul>
      <p>These variables are linked by the suvat equations.</p>
      <Mathr
        formula="\tiny{1}: \normalsize{v=u+at}\\\tiny{2}: \normalsize{s=ut+\frac{1}{2}at^2}\\\tiny{3}: \normalsize{s=\frac{1}{2}(u+v)t}\\\tiny{4}: \normalsize{v^2=u^2+2as}\\\tiny{5}: \normalsize{s=vt-\frac{1}{2}at^2}"
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

      <h1>Deriving suvat</h1>
      <h3>Assumptions</h3>
      <Mathr
        formula="\text{velocity}=\frac{\text{displacement}}{\text{time}}"
      />
      <Mathr
        formula="\text{acceleration}=\frac{\text{change in velocity}}{\text{time}}"
      />
      <h3>Deriving<Mathr formula="v=u+at" size="small" /></h3>
      <p class="smalltext">
        If you run into any issues with this calculator please email
        <a
          href="mailto:incoming+efunb-suvat-calculator-15193084-issue-@incoming.gitlab.com"
          >incoming+efunb-suvat-calculator-15193084-issue-@incoming.gitlab.com</a
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
    p, li
      font-size: 1.1em
      &.smalltext
        font-size: 0.8em
    ul
      padding-left: 16px
</style>

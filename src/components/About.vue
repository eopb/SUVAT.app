<template>
  <div id="about">
    <div>
      <h1 id="about">About suvat</h1>
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
      <p>
        These variables are linked by
        <a
          href="https://en.wikipedia.org/wiki/Equations_of_motion#Constant_translational_acceleration_in_a_straight_line"
          >equations of motion</a
        >
        called suvat equations.
      </p>
      <MathR
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

      <h1 id="deriving">Deriving equations of motion</h1>

      <h3>Assumptions</h3>

      <p>
        <MathR
          formula="\text{average velocity}=\frac{\text{displacement}}{\text{time}}"
          size="small"
        />
      </p>
      <p>
        <MathR
          formula="\text{acceleration}=\frac{\text{change in velocity}}{\text{time}}"
          size="small"
        />
      </p>
      <p>
        These are literally the definitions of
        <a href="https://en.wikipedia.org/wiki/Velocity#Average_velocity"
          >average velocity</a
        >
        and
        <a
          href="https://en.wikipedia.org/wiki/Acceleration#Average_acceleration"
          >acceleration</a
        >.
      </p>
      <h3>
        Deriving
        <MathR formula="v=u+at" size="small" />
      </h3>
      <p>
        The assumption we made that
        <MathR
          formula="\text{acceleration}=\frac{\text{change in velocity}}{\text{time}}"
          size="small"
        />can be rewritten using our suvat variables to become
        <MathR formula="a=\frac{v-u}{t}" size="small" />. This can then be
        rearranged to finally form <MathR formula="v=u+at" size="small" />.
      </p>

      <h3>
        Deriving
        <MathR formula="s=\frac{1}{2}(u+v)t" size="small" />
      </h3>
      <p>
        The assumption we made that
        <MathR
          formula="\text{average velocity}=\frac{\text{displacement}}{\text{time}}"
          size="small"
        />can be rewritten using our suvat variables to become
        <MathR formula="\text{average velocity}=\frac{s}{t}" size="small" />.
        The average velocity is also the average of the initial and final
        velocities so we can also write
        <MathR formula="\text{average velocity}=\frac{u+v}{2}" size="small" />.
        Combine these two to find
        <MathR formula="\frac{u+v}{2}=\frac{s}{t}" size="small" />. This can
        then be rearranged to form
        <MathR formula="s=\frac{1}{2}(u+v)t" size="small" />.
      </p>

      <h3>
        Deriving
        <MathR formula="s=ut+\frac{1}{2}at^2" size="small" />and
        <MathR formula="s=vt-\frac{1}{2}at^2" size="small" />
      </h3>
      <p>
        We have already derived that
        <MathR formula="v=u+at" size="small" />and
        <MathR formula="s=\frac{1}{2}(u+v)t" size="small" />. We can substitute
        <MathR formula="v=u+at" size="small" />into
        <MathR formula="s=\frac{1}{2}(u+v)t" size="small" />to form
        <MathR formula="s=\frac{1}{2}(u+(u+at))t" size="small" />. This can then
        be rearranged to form
        <MathR formula="s=ut+\frac{1}{2}at^2" size="small" />.
      </p>
      <p>
        Deriving
        <MathR formula="s=vt-\frac{1}{2}at^2" size="small" />can be done in a
        simallar way but first <MathR formula="v=u+at" size="small" />must be
        rearranged to make <MathR formula="u" size="small" />the subject forming
        <MathR formula="u=v-at" size="small" />. Then the substitution can be
        done to form <MathR formula="s=\frac{1}{2}((v-at)+v)t" size="small" />.
        This can then be rearranged to form
        <MathR formula="s=vt-\frac{1}{2}at^2" size="small" />.
      </p>

      <h3>
        Deriving
        <MathR formula="v^2=u^2+2as" size="small" />
      </h3>
      <p>
        <MathR formula="v=u+at" size="small" />must be rearranged to make
        <MathR formula="t" size="small" />the subject forming
        <MathR formula="t=\frac{v-u}{a}" size="small" />. This can then be
        substituted into <MathR formula="s=\frac{1}{2}(u+v)t" size="small" />to
        form <MathR formula="s=\frac{1}{2}(u+v)(\frac{v-u}{a})" size="small" />.
        Lastly it can be rearranged to form
        <MathR formula="v^2=u^2+2as" size="small" />.
      </p>

      <p class="smalltext">
        If you run into any issues with this calculator please email
        <a
          href="mailto:incoming+efunb-suvat-app-15193084-issue-@incoming.gitlab.com"
          >incoming+efunb-suvat-app-15193084-issue-@incoming.gitlab.com</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import MathR from "./MathR.vue";
export default {
  name: "AboutPage",
  components: {
    MathR,
  },
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

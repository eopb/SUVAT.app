<template>
  <div id="solution">
    <template v-if="formular() !== null">
      <template v-if="letter === s">
        <Ssutat2C
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Ssutat2C>
        <SuvtC
          v-else-if="formular() === 3"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></SuvtC>
        <Sv2u22asC
          v-else-if="formular() === 4"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Sv2u22asC>
        <Ssvtat2C
          v-if="formular() === 5"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Ssvtat2C>
      </template>
      <template v-if="letter === u">
        <UvuatC
          v-if="formular() === 1"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></UvuatC>
        <Usutat2C
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Usutat2C>
        <UuvtC
          v-if="formular() === 3"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></UuvtC>
        <Uv2u22asC
          v-if="formular() === 4"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Uv2u22asC>
      </template>
      <template v-if="letter === v">
        <VvuatC
          v-if="formular() === 1"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></VvuatC>
        <VuvtC
          v-if="formular() === 3"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></VuvtC>
        <Vuv2u22asC
          v-if="formular() === 4"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Vuv2u22asC>
        <Vsvtat2C
          v-if="formular() === 5"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Vsvtat2C>
      </template>
      <template v-if="letter === a">
        <AvuatC
          v-if="formular() === 1"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></AvuatC>
        <Asutat2C
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Asutat2C>
        <Av2u22asC
          v-if="formular() === 4"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Av2u22asC>
        <Asvtat2C
          v-if="formular() === 5"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Asvtat2C>
      </template>
      <template v-if="letter === t">
        <TvuatC
          v-if="formular() === 1"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></TvuatC>
        <Tsutat2C
          v-if="formular() === 2"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Tsutat2C>
        <TuvtC
          v-if="formular() === 3"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></TuvtC>
        <Tsvtat2C
          v-if="formular() === 5"
          :suvat="suvat"
          :letter="letter"
          :dp="dp"
        ></Tsvtat2C>
      </template>
    </template>
  </div>
</template>

<script>
import Ssutat2C from "./solutions/s/Ssutat2C.vue";
import SuvtC from "./solutions/s/SuvtC.vue";
import Sv2u22asC from "./solutions/s/Sv2u22asC.vue";
import Ssvtat2C from "./solutions/s/Ssvtat2C.vue";
import UvuatC from "./solutions/u/UvuatC.vue";
import Usutat2C from "./solutions/u/Usutat2C.vue";
import UuvtC from "./solutions/u/UuvtC.vue";
import Uv2u22asC from "./solutions/u/Uv2u22asC.vue";
import VvuatC from "./solutions/v/VvuatC.vue";
import VuvtC from "./solutions/v/VuvtC.vue";
import Vuv2u22asC from "./solutions/v/Vuv2u22asC.vue";
import Vsvtat2C from "./solutions/v/Vsvtat2C.vue";
import AvuatC from "./solutions/a/AvuatC.vue";
import Asutat2C from "./solutions/a/Asutat2C.vue";
import Av2u22asC from "./solutions/a/Av2u22asC.vue";
import Asvtat2C from "./solutions/a/Asvtat2C.vue";
import TvuatC from "./solutions/t/TvuatC.vue";
import Tsutat2C from "./solutions/t/Tsutat2C.vue";
import TuvtC from "./solutions/t/TuvtC.vue";
import Tsvtat2C from "./solutions/t/Tsvtat2C.vue";
export default {
  name: "SolutionC",
  components: {
    Ssutat2C,
    SuvtC,
    Sv2u22asC,
    Ssvtat2C,
    UvuatC,
    Usutat2C,
    UuvtC,
    Uv2u22asC,
    VvuatC,
    VuvtC,
    Vuv2u22asC,
    Vsvtat2C,
    AvuatC,
    Asutat2C,
    Av2u22asC,
    Asvtat2C,
    TvuatC,
    Tsutat2C,
    TuvtC,
    Tsvtat2C,
  },
  props: ["suvat", "letter", "dp"],
  data: () => ({
    s: "s",
    u: "u",
    v: "v",
    a: "a",
    t: "t",
  }),
  methods: {
    formular() {
      switch (this.letter) {
        case "s":
          if (
            this.suvat.u !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 2;
          if (
            this.suvat.u !== null &&
            this.suvat.v !== null &&
            this.suvat.t !== null
          )
            return 3;
          if (
            this.suvat.v !== null &&
            this.suvat.u !== null &&
            this.suvat.a !== null
          )
            return 4;
          if (
            this.suvat.v !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 5;

          break;

        case "u":
          if (
            this.suvat.v !== null &&
            this.suvat.a !== null &&
            this.suvat.t !== null
          )
            return 1;
          if (
            this.suvat.s !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 2;
          if (
            this.suvat.s !== null &&
            this.suvat.v !== null &&
            this.suvat.t !== null
          )
            return 3;
          if (
            this.suvat.v !== null &&
            this.suvat.a !== null &&
            this.suvat.s !== null
          )
            return 4;
          break;

        case "v":
          if (
            this.suvat.u !== null &&
            this.suvat.a !== null &&
            this.suvat.t !== null
          )
            return 1;
          if (
            this.suvat.s !== null &&
            this.suvat.u !== null &&
            this.suvat.t !== null
          )
            return 3;
          if (
            this.suvat.u !== null &&
            this.suvat.a !== null &&
            this.suvat.s !== null
          )
            return 4;
          if (
            this.suvat.s !== null &&
            this.suvat.t !== null &&
            this.suvat.a !== null
          )
            return 5;
          break;

        case "a":
          if (
            this.suvat.v !== null &&
            this.suvat.u !== null &&
            this.suvat.t !== null
          )
            return 1;
          if (
            this.suvat.s !== null &&
            this.suvat.u !== null &&
            this.suvat.t !== null
          )
            return 2;
          if (
            this.suvat.v !== null &&
            this.suvat.u !== null &&
            this.suvat.s !== null
          )
            return 4;
          if (
            this.suvat.s !== null &&
            this.suvat.v !== null &&
            this.suvat.t !== null
          )
            return 5;
          break;

        case "t":
          if (
            this.suvat.v !== null &&
            this.suvat.u !== null &&
            this.suvat.a !== null
          )
            return 1;
          if (
            this.suvat.s !== null &&
            this.suvat.u !== null &&
            this.suvat.a !== null
          )
            return 2;
          if (
            this.suvat.s !== null &&
            this.suvat.u !== null &&
            this.suvat.v !== null
          )
            return 3;
          if (
            this.suvat.s !== null &&
            this.suvat.v !== null &&
            this.suvat.a !== null
          )
            return 5;
          break;
      }
      return null;
    },
  },
};
</script>

<style lang="sass">


#solution
  overflow-x: auto
  width: auto
  > div
    display: inline-flex
    align-items: center
    justify-content: flex-start
    align-items: stretch
    flex-direction: row
    height: 100%
    min-width: 100%
    h1, h2, h3
      margin: 0
      white-space: nowrap
    h3
      math
        display: inline-block
        font-size: 1.4em

    > *
      min-width: 300px
      max-width: auto
      padding-left: 10px
      padding-right: 10px
      box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75)
      display: flex
      align-items: center
      justify-content: center

      math
        font-size: 3em
        white-space: nowrap
        padding: 10px
      @for $i from 1 through 20
        &:nth-child(#{$i})
            transition-delay: calc((($i * 1s) - 1s) / 10) + .02
    > h2
      writing-mode: vertical-lr
      text-orientation: sideways
      transform: rotate(180deg)
      width: 100px
      min-width: unset
.fade-enter-active, .fade-leave-active
  transition: .5s
  transform: scale(1)
.fade-enter, .fade-leave-to
  opacity: 0
  transform: scale(0.8)
</style>

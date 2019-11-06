<template>
  <div id="solution">
    <div>
      <h1>ans = {{letterValue()}}</h1>
      <h1>bar</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution",
  props: ["suvat", "letter"],
  data: () => ({
    creditLimit: ""
  }),
  methods: {
    letterValue() {
      switch (this.letter) {
        case "s":
          return this.suvat.s;

        case "u":
          return this.suvat.u;

        case "v":
          return this.suvat.v;

        case "a":
          return this.suvat.a;

        case "t":
          return this.suvat.t;
      }
      console.log(this.suvat);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  margin: 0
  min-width: 300px

#solution
  overflow-x: scroll
  width: 100%
  > div
    display: inline flex
    align-items: center
    justify-content: left
    flex-direction: row
    height: 100%
    *
      height: 100%
      width: 950px
      
      box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75)
      display: flex
      align-items: center
      justify-content: center
      flex-direction: colum
</style>

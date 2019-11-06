<template>
  <div id="solution">
    <h1>foo</h1>
    <h1>bar</h1>
  </div>
</template>

<script>
export default {
  name: "Solution",
  props: ["suvat"],
  data: () => ({
    creditLimit: ""
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  margin: 0
  min-width: 300px

#solution
  display: flex
  align-items: center
  justify-content: left
  flex-direction: row
  *
    height: 100%
    box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.75)
</style>

<template>
  <div>page1</div>
</template>
<script>
export default {
  name: 'Page1',
  data () {
    return {
    }
  },
  beforeCreate () {
    console.log('------------page1---beforeCreate')
  },
  created () {
    console.log('------------page1---created')
  },
  beforeMount () {
    console.log('------------page1---beforeMount')
  },
  mounted: function () {
    console.log('------------page1---mounted')
  },
  beforeDestroy () {
    console.log('------------page1---beforeDestroy')
  },
  destroyed () {
    console.log('------------page1---destroyed')
  }
}
</script>

<style scoped>
</style>

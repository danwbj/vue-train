<template>
  <div class="hello">
   <home-header></home-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    'home-header': HomeHeader
  },
  mounted: function () {
    this.changemsg('hhhhhh')
  },
  methods: {
    changemsg: function (text) {
      this.$store.dispatch('changemsg', text)
    }
  },
  computed: {
    ...mapState({
      msg: state => state.msg
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

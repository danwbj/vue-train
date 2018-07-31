<template>
  <div id="app">
  <loading v-model="isLoading"></loading>
  <!-- transition 过渡效果 -->
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
*{
  margin:0
}

body {
  background-color: #ffffff;
}
</style>

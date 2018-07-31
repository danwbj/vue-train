<template>
  <div class="hello">
    <home-header v-bind:title="title"></home-header>
    <h1>{{ msg }}</h1>
    <x-button class="homebtn" type="primary" @click.native="golist">go list</x-button>
    <x-button class="homebtn" type="primary" @click.native="gopage1">go page1</x-button>
    <x-button class="homebtn" type="primary" @click.native="gopage2">go page2</x-button>
  </div>
</template>

<script>
import { XButton } from 'vux'
import HomeHeader from '@/components/HomeHeader'
export default {
  name: 'Home',
  components: {
    XButton,
    HomeHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'titleddd'
    }
  },
  methods: {
    gohome () {
      this.$router.push({ path: 'home' })
    },
    golist () {
      this.$router.push({ path: 'userlist' })
    },
    gopage1 () {
      console.log(this.$router)
      this.$router.push({ path: 'page1' })
    },
    gopage2 () {
      this.$router.push({ path: 'page2' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homebtn{
  width:200px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

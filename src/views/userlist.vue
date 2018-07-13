<template>
  <div class="hello">
   <home-header></home-header>
   <user-list-card v-for="item in userlist" v-bind:key="item.id" v-bind:userinfo="item"></user-list-card>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import UserListCard from '@/components/UserListCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UserList',
  data () {
    return {
    }
  },
  components: {
    'user-list-card': UserListCard,
    'home-header': HomeHeader
  },
  // 实例创建完成请求接口数据
  created: function () {
    this.getuserlist({})
  },
  mounted: function () {
    this.changemsg('dddd')
  },
  methods: {
    // changemsg: function (text) {
    //   this.$store.dispatch('changemsg', text)
    // },
    ...mapActions([
      //   'changemsg', // 将 `this.changemsg()` 映射为 `this.$store.dispatch('changemsg')`
      // `mapActions` 也支持载荷：
      'changemsg', // 将 `this.changemsg(amount)` 映射为 `this.$store.dispatch('changemsg', text)`
      'getuserlist'
    ])
  },
  computed: {
    // 绑定当前页面需要的state中的数据
    ...mapState({
      msg: state => state.msg,
      userlist: state => state.userlist
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

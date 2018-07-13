import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: HelloWorld
      component: resolve => require(['@/views/home'], resolve)
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   // component: Home
    //   component: resolve => require(['@/views/home'], resolve)
    // },
    {
      path: '/userlist',
      name: 'Userlist',
      // component: Home
      component: resolve => require(['@/views/userlist'], resolve)
    }
  ]
})

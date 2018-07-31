import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/views/page1'
import Page2 from '@/views/page2'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: resolve => require(['@/views/userlist'], resolve)
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
      // component: resolve => require(['@/views/page1'], resolve)
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
      // component: resolve => require(['@/views/page2'], resolve)
    }
  ]
})

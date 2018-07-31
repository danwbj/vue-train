// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MutationType from './store/mutations-type'
const FastClick = require('fastclick')

Vue.config.productionTip = false

// 添加 Fastclick 移除移动端点击延迟
FastClick.attach(document.body)

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    [MutationType.UPDATE_LOADING_STATUS] (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

// 使用vue-router的beforeEach和afterEach来更改loading状态
router.beforeEach(function (to, from, next) {
  store.commit(MutationType.UPDATE_LOADING_STATUS, {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit(MutationType.UPDATE_LOADING_STATUS, {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

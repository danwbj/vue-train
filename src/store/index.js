import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'
// import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'hello',
    userlist: []
  },
  actions,
  mutations,
  strict: true
//   plugins
})

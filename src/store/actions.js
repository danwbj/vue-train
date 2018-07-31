import { getuserlist, getInfoConfig } from '../api'

export default {
  changemsg ({ commit }, text) {
    commit('changemsg', text)
  },
  getuserlist ({ commit }, params) {
    getuserlist((data) => {
      commit('GET_USER_LIST', data)
    })
  },
  getInfoConfig ({ commit }, params) {
    getInfoConfig(1, 2).then((res) => {
      console.log('res.data: ', res.data)
    }).catch(err => {
      console.log('err: ', err)
    })
  }
}

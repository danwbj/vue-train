import MutationType from './mutations-type'
import * as _ from 'lodash'

// for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//   window.localStorage.clear()
// }

export const mutations = {
  // addTodo (state, todo) {
  //   state.todos.push(todo)
  // },
  // removeTodo (state, todo) {
  //   state.todos.splice(state.todos.indexOf(todo), 1)
  // },

  // editTodo (state, { todo, text = todo.text, done = todo.done }) {
  //   todo.text = text
  //   todo.done = done
  // },
  changemsg (state, text) {
    state.msg = text
  },
  // 获取用户列表
  [MutationType.GET_USER_LIST] (state, payload) {
    state.userlist = state.userlist.concat(payload)
  },
  // 合并state
  [MutationType.MERGE_STATE] (state, payload) {
    state = _.merge({}, state, payload)
  },
  // 重置state
  [MutationType.RESET_STATE] (state, payload) {
    state = {}
  }
}

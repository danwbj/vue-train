export default {
  addTodo ({ commit }, text) {
    commit('addTodo', {
      text,
      done: false
    })
  },
  changemsg ({ commit }, text) {
    commit('changemsg', text)
  }
}

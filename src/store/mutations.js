export const STORAGE_KEY = 'todos-vuejs'

const GET_USER_LIST = 'GET_USER_LIST'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo (state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text
    todo.done = done
  },
  changemsg (state, text) {
    state.msg = text
  },
  [GET_USER_LIST] (state, payload) {
    state.userlist = state.userlist.concat(payload)
  }
}

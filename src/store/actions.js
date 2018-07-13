export default {
  addTodo ({ commit }, text) {
    commit('addTodo', {
      text,
      done: false
    })
  },
  changemsg ({ commit }, text) {
    commit('changemsg', text)
  },
  getuserlist ({ commit }, params) {
    let list = [
      {
        id: 1,
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状。星球有一定的形状星球有一定的形状星球有一定的形状星球有一定的形状',
        img: 'https://bpic.588ku.com/element_pic/17/07/01/cf9bbd8d49cc53263252bdfb0e562cc9.jpg!/fw/260/quality/90/unsharp/true/compress/true'
      },
      {
        id: 2,
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状。',
        img: 'https://bpic.588ku.com/original_pic/18/06/11/7d436cdf9df75e16d041c36e5f9d742a.jpg!/fw/260/quality/90/unsharp/true/compress/true'
      }
    ]
    commit('GET_USER_LIST', list)
  }
}

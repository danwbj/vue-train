
import axios from 'axios'

let users = [
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

let getuserlist = (cb) => {
  setTimeout(() => cb(users), 100)
}
/**
 * 获取详情页配置信息
 * @param {*} channel
 * @param {*} activityId
 */
let getInfoConfig = (channel, activityId) => {
  return axios.get(`/api/activityTemplate/${channel}/${activityId}`)
}

/**
 * 提交在线报名信息
 * @param {*} obj
 */
let apply = (obj) => {
  return axios.post(`/api/course/lottery`, obj)
}
/**
 * 我的报名信息
 * @param {*} activityId
 */
let myapply = (activityId) => {
  return axios.get(`/api/activityTemplate/myRegisterInfo/${activityId}`)
}
/**
 * 获取报名表单
 */
let applyFormConfig = () => {
  return axios.get(`/api/course/form`)
}

export {
  getInfoConfig,
  apply,
  myapply,
  applyFormConfig,
  getuserlist
}


import axios from 'axios'

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
  applyFormConfig
}

import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
export default defineStore('user', () => {
  let userInfo = reactive({
    name: ''
  })
  const token = ref<string>('123')
  const requestUserInfo = () => {
    userInfo.name = 'a'
  }
  const getUserInfo = () => {
    return userInfo
  }
  const getToken = () => {
    return token
  }
  return { requestUserInfo, getUserInfo, getToken }
})
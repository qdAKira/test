// import Cookies from 'js-cookie'

// const TokenKey = 'vue_admin_template_token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

const token = 'vue_admin_template_token'

// 存储token
export const setToken =(token)=>{
  localStorage.setItem('TOKEN',token)
}
// 获取token
export const getToken =()=>{
  return localStorage.getItem('TOKEN')
}

// 清除本地存储token
export const removeToken = ()=>{
   localStorage.removeItem('TOKEN')
}
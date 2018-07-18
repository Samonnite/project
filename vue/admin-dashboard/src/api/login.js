import axios from 'axios'
import { baseUrl } from '@/config'

export const requestLogin = params => {
  return axios.post(`${baseUrl}/auth/login`, params).then(res => res.data)
}
export const requestCaptcha = params => {
  return axios.get(`${baseUrl}/auth/captcha`, params).then(res => res.data)
}

import axios from 'axios'
import { baseUrl } from '@/config'

export const requestRegister = params => {
  return axios.post(`${baseUrl}/register`, params).then(res => res.data)
}
export const requestCaptcha = params => {
  return axios.get(`${baseUrl}/captcha`, params).then(res => res.data)
}
export const requestSendCode = params => {
  return axios.post(`${baseUrl}/sendCode`, params).then(res => res.data)
}
export const requestCheckUsername = params => {
  return axios.post(`${baseUrl}/checkUsername`, params).then(res => res.data)
}

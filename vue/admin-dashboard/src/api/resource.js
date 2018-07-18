import axios from 'axios'
import { baseUrl } from '@/config'

export const requestResource = params => {
  return axios.get(`${baseUrl}/resource/list`, {params: params}).then(res => res.data)
}
export const requestRelation = params => {
  return axios.get(`${baseUrl}/resource/relation`, {params: params}).then(res => res.data)
}
export const requestAttach = params => {
  return axios.get(`${baseUrl}/resource/attachRole`, {params: params}).then(res => res.data)
}

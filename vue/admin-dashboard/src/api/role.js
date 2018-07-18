import axios from 'axios'
import { baseUrl } from '@/config'

export const requestRole = params => {
  return axios.get(`${baseUrl}/role/list`, {params: params}).then(res => res.data)
}

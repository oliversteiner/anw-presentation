import {BoardResponse} from "@/_models/board"
import axios from 'axios'

export const testAPI = axios.create({
 // baseURL: process.env.VUE_APP_HOST + '/api',
  baseURL: 'http://a-nicer-way.test' + '/api',
})




export async function getBoardList() {
  const response = await testAPI.get('/boards')
  return response.data as BoardResponse
}

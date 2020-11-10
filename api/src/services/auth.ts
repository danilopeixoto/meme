import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_AUTHENTICATION_URL,
  timeout: 1000
})

export default api

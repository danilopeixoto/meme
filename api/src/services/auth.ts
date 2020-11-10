import axios from 'axios'

import config from '../config'

const api = axios.create({
  baseURL: config.authentication_url,
  timeout: 1000
})

export default api

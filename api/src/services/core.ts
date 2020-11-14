import axios from 'axios'

import config from '../config'

const api = axios.create({
  baseURL: config.core_url,
  timeout: 2000
})

export default api

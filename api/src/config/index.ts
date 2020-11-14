import path from 'path'
import fs from 'fs'
import * as dotenv from 'dotenv'

const file = fs.readFileSync(path.join(__dirname, '../../.env'))
const parsed_config = dotenv.parse(file)

for (const variable in parsed_config) {
  process.env[variable] = process.env[variable] || parsed_config[variable]
}

const config = {
  port: process.env.API_PORT,
  version: process.env.API_VERSION,
  core_url: process.env.API_CORE_URL
}

export default config

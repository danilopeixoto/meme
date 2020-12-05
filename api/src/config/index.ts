import path from 'path'
import fs from 'fs'
import * as dotenv from 'dotenv'

const file = fs.readFileSync(path.join(__dirname, '../../.env'))
const parsedConfiguration = dotenv.parse(file)

for (const variable in parsedConfiguration) {
  process.env[variable] = process.env[variable] || parsedConfiguration[variable]
}

const config = {
  port: process.env.API_PORT,
  version: process.env.API_VERSION,
  core_url: process.env.API_CORE_URL
}

export default config

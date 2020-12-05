import path from 'path'
import fs from 'fs'
import * as dotenv from 'dotenv'

const file = fs.readFileSync(path.join(__dirname, '../../.env'))
const parsedConfiguration = dotenv.parse(file)

for (const variable in parsedConfiguration) {
  process.env[variable] = process.env[variable] || parsedConfiguration[variable]
}

const config = {
  port: process.env.CORE_PORT,
  version: process.env.CORE_VERSION,
  authentication_url: process.env.CORE_AUTHENTICATION_URL,
  database_url: process.env.CORE_DATABASE_URL,
  database_name: process.env.CORE_DATABASE_NAME,
  database_collection: process.env.CORE_DATABASE_COLLECTION
}

export default config

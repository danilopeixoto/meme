import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const config = {
  port: process.env.API_PORT,
  version: process.env.API_VERSION,
  authentication_url: process.env.API_AUTHENTICATION_URL,
  database_url: process.env.API_DATABASE_URL,
  database_name: process.env.API_DATABASE_NAME,
  database_collection: process.env.API_DATABASE_COLLECTION
}

export default config

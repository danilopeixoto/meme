import restify from 'restify'
import mongoose from 'mongoose'

import routes from './routes'
import config from './config'
import database from './services/database'

const server = restify.createServer()

routes.applyRoutes(server, `/${config.version}`)

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

server.listen(config.port, function() {
  console.log('Server running...')

  mongoose.connect(config.database_url, database, function(error) {
    if (!error) {
      console.log(`Database connected successfully.`)
    } else {
      console.error(`Database connection failed: ${error}`)
    }
  })
})

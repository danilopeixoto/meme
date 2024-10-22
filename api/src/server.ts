import restify from 'restify'

import routes from './routes'
import config from './config'

const server = restify.createServer()

routes.applyRoutes(server, `/${config.version}`)

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

server.listen(config.port, function() {
  console.log('Server running...')
})

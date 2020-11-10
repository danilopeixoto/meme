import dotenv from 'dotenv/config'
import restify from 'restify'
import mongoose from 'mongoose'

import routes from './routes'
import database from './services/database'

const server = restify.createServer()

routes.applyRoutes(server, `api/${process.env.API_VERSION}`)

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

server.listen(process.env.API_PORT, function() {
  console.log('Servidor executando...')

  mongoose.connect(database.url, database.config, function(error) {
    if (!error) {
      console.log(`Banco de dados conectado.`)
    } else {
      console.log(`Erro ao conectar ao banco de dados: ${error}`)
    }
  })
})

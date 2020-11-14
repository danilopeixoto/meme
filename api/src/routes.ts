import { Router } from 'restify-router'

import MemeController from './controllers/MemeController'

const routes = new Router()

const memeController = new MemeController()

routes.post('/meme', memeController.create)
routes.patch('/meme/:id', memeController.update)
routes.get('/meme', memeController.search)
routes.del('/meme/:id', memeController.remove)

export default routes

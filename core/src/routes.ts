import { Router } from 'restify-router'

import MemeController from './controllers/MemeController'
import AuthController from './controllers/AuthController'

const routes = new Router()

const memeController = new MemeController()
const authController = new AuthController()

routes.post('/auth/login', authController.login)

routes.post('/meme', authController.validateToken, memeController.create)
routes.patch('/meme/:id', authController.validateToken, memeController.update)
routes.get('/meme', authController.validateToken, memeController.search)
routes.del('/meme/:id', authController.validateToken, memeController.remove)

export default routes

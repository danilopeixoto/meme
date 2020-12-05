import { Request, Response, Next } from 'restify'

import auth from '../services/auth'

class AuthController {
  async login(request: Request, response: Response) {
    console.log('Authentication controller running POST method: login.')

    try {
      const serviceResponse = await auth.post('login', request.body)

      return response.json(serviceResponse.status, serviceResponse.data)
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de autenticação.'
        })
      }
    }
  }

  async validateToken(request: Request, response: Response, next: Next) {
    console.log('Authentication controller running middleware: validateToken.')

    const token = request.headers.token || ''

    try {
      await auth.post(
        'validateToken',
        {},
        { headers: { token } }
      )

      next()
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de autenticação.'
        })
      }
    }
  }
}

export default AuthController

import { Request, Response } from 'restify'

import core from '../services/core'

class MemeController {
  async create(request: Request, response: Response) {
    console.log('Meme controller running POST method: create.')

    const token = request.headers.token
    const headers = token ? { token } : {}

    try {
      const serviceResponse = await core.post('meme', request.body, { headers })

      return response.json(serviceResponse.status, serviceResponse.data)
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de memes.'
        })
      }
    }
  }

  async update(request: Request, response: Response) {
    console.log('Meme controller running PATCH method: update.')

    const id = request.params.id || ''

    const token = request.headers.token
    const headers = token ? { token } : {}

    try {
      const serviceResponse = await core.patch(`meme/${id}`, request.body, {
        headers
      })

      return response.json(serviceResponse.status, serviceResponse.data)
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de memes.'
        })
      }
    }
  }

  async search(request: Request, response: Response) {
    console.log('Meme controller running GET method: search.')

    const id = request.query.id
    const params = id ? { id } : {}

    const token = request.headers.token
    const headers = token ? { token } : {}

    try {
      const serviceResponse = await core.get('meme', {
        params,
        headers
      })

      return response.json(serviceResponse.status, serviceResponse.data)
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de memes.'
        })
      }
    }
  }

  async remove(request: Request, response: Response) {
    console.log('Meme controller running DELETE method: remove.')

    const id = request.params.id || ''

    const token = request.headers.token
    const headers = token ? { token } : {}

    try {
      const serviceResponse = await core.delete(`meme/${id}`, { headers })

      return response.json(serviceResponse.status, serviceResponse.data)
    } catch (error) {
      if (error.response) {
        return response.json(error.response.status, error.response.data)
      } else {
        return response.json(500, {
          msg: 'Falha ao acessar serviço de memes.'
        })
      }
    }
  }
}

export default MemeController

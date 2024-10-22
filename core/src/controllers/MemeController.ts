import { Request, Response } from 'restify'

import Meme from '../models/Meme'

class MemeController {
  async create(request: Request, response: Response) {
    console.log('Meme controller running POST method: create.')

    try {
      const body = await Meme.create(request.body)

      return response.json(201, body)
    } catch (error) {
      return response.json(500, {
        msg: 'Falha ao criar recurso no banco de dados.'
      })
    }
  }

  async update(request: Request, response: Response) {
    console.log('Meme controller running PATCH method: update.')

    const { id } = request.params

    try {
      const body = await Meme.findByIdAndUpdate(id, request.body, { new: true })

      if (body === null) {
        return response.json(404, {
          msg: 'Recurso não encontrado.'
        })
      }

      return response.json(200, body)
    } catch (error) {
      return response.json(500, {
        msg: 'Falha ao acessar recurso no banco de dados.'
      })
    }
  }

  async list(request: Request, response: Response) {
    console.log('Meme controller running GET method: list.')

    try {
      const body = await Meme.find()

      return response.json(200, body)
    } catch (error) {
      return response.json(500, {
        msg: 'Falha ao acessar recurso no banco de dados.'
      })
    }
  }

  async find(request: Request, response: Response) {
    console.log('Meme controller running GET method: find.')

    const { id } = request.params

    try {
      const body = await Meme.findById(id)

      if (body === null) {
        return response.json(404, {
          msg: 'Recurso não encontrado.'
        })
      }

      return response.json(200, body)
    } catch (error) {
      return response.json(500, {
        msg: 'Falha ao acessar recurso no banco de dados.'
      })
    }
  }

  async remove(request: Request, response: Response) {
    console.log('Meme controller running DELETE method: remove.')

    const { id } = request.params

    try {
      const document = await Meme.findByIdAndDelete(id)

      if (document === null) {
        return response.json(404, {
          msg: 'Recurso não encontrado.'
        })
      }

      const body = {
        id,
        excluido: document
      }

      return response.json(200, body)
    } catch (error) {
      return response.json(500, {
        msg: 'Falha ao acessar recurso no banco de dados.'
      })
    }
  }
}

export default MemeController

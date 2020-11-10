import { Request, Response } from 'restify'

import Meme from '../models/Meme'

class MemeController {
  async create(request: Request, response: Response) {
    console.log('Meme controller running POST method: create.')

    const body = await Meme.create(request.body)

    return response.json(201, body)
  }

  async update(request: Request, response: Response) {
    console.log('Meme controller running PATCH method: update.')

    const { id } = request.params
    const body = await Meme.findByIdAndUpdate(id, request.body, { new: true })

    return response.json(200, body)
  }

  async search(request: Request, response: Response) {
    console.log('Meme controller running GET method: search.')

    const { id } = request.query
    const body = id ? await Meme.findById(id) : await Meme.find()

    return response.json(200, body)
  }

  async remove(request: Request, response: Response) {
    console.log('Meme controller running DELETE method: remove.')

    const { id } = request.params

    let body = {
      id,
      excluido: await Meme.findByIdAndDelete(id)
    }

    return response.json(200, body)
  }
}

export default MemeController

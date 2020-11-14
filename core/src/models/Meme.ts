import { Schema, model } from 'mongoose'

import config from '../config'

const MemeSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    ano: Number
  },
  {
    timestamps: true
  }
)

export default model('Meme', MemeSchema, config.database_collection)

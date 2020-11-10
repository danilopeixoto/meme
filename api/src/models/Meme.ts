import { Schema, model } from 'mongoose'

import database from '../services/database'

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

export default model('Meme', MemeSchema, database.collection_name)

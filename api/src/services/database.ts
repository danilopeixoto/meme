const url = process.env.API_DATABASE_URL

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: process.env.API_DATABASE_NAME
}

const collection_name = process.env.API_DATABASE_COLLECTION_NAME

export default { url, config, collection_name }

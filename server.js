const express = require('express')
const data = require('./data')

const PORT = 3000;

const app = express();

app.get('/', async (requst, response) => {
  const { url} = requst;

  if (url === '/') {
    response.send({
      data: data
    })
  }

  response.status(400).json({message: 'Неправильный запрос'})
})

app.get('/programs/:alias', async (requst, response) => {
  const { params, query} = requst;
  // TODO: сделать проверку alias на существование - если нет, то 404

  response.status(400).json({message: 'Неправильный запрос'})
})

app.listen(PORT, () => {
  console.log(`Server was started ar port ${PORT}`)
})
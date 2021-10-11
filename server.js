const express = require('express')
const data = require('./data')

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', async (requst, response) => {
  const { url} = requst;

  if (url === '/') {
    response.send(data)
  }

  // response.status(400).json({message: 'Неправильный запрос'})
})

app.get('/programs/:alias', async (requst, response) => {
  const { params, query} = requst;
  // TODO: сделать проверку alias на существование - если нет, то 404

  // response.status(400).json({message: 'Неправильный запрос'})
})

app.listen(PORT, () => {
  console.log(`Server was started ar port ${PORT}`)
})